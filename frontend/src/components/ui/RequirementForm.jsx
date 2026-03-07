import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

export default function RequirementForm({ concept, depth, onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);
  const [statusText, setStatusText] = useState('Forging architecture questions...');
  const [refining, setRefining] = useState(false);
  
  // Use a ref to track timeouts so they don't leak
  const timerRef = useRef(null);

  const fetchQuestions = useCallback(async () => {
    try {
      setLoading(true);
      setStatusText(retryCount > 0 ? 'Cooling the Forge... Retrying' : 'Forging architecture questions...');
      setError('');
      
      const response = await axios.get(`http://localhost:8001/api/v1/forge/questions/${depth}?concept=${encodeURIComponent(concept)}`);
      
      const fetchedQuestions = response.data?.questions || [];
      setQuestions(fetchedQuestions);
    } catch (err) {
      if (err.response?.status === 429) {
        const delay = Math.pow(2, retryCount) * 1000;
        setStatusText(`Cooling the Forge... Retrying in ${delay/1000}s`);
        
        timerRef.current = setTimeout(() => {
          setRetryCount(prev => prev + 1);
        }, delay);
        return;
      }
      setError(err.response?.data?.detail || err.message || 'Failed to generate questions');
    } finally {
      // Logic fix: Don't stop loading if we are about to retry
      if (!statusText.includes('Retrying')) {
        setLoading(false);
      }
    }
  }, [concept, depth, retryCount]);

  useEffect(() => {
    if (concept && questions.length === 0) {
      fetchQuestions();
    }
    // Cleanup the timer on unmount
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [concept, fetchQuestions, questions.length]);

  const handleAnswerChange = (id, val) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRefining(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8001/api/v1/forge/generate', {
        concept,
        answers,
        user_id: localStorage.getItem('ideaforge_user_id') || 'guest_user'
      });
      onComplete(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || err.message || 'Failed to refine architecture');
    } finally {
      setRefining(false);
    }
  };

  return (
    <>
      {/* Skeuomorphic Glass Loading Overlay */}
      {(loading || refining) && (
        <div className="fixed inset-0 bg-[#F5F5F0]/70 backdrop-blur-lg z-50 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-cloud-accent/20 rounded-full animate-ping blur-2xl" />
              <div className="z-10 w-20 h-20 bg-ceramic-base rounded-full shadow-skeuo-outer flex items-center justify-center border border-white/40">
                <div className={`w-4 h-4 rounded-full ${statusText.includes('Cooling') ? 'bg-orange-400' : 'bg-cloud-accent'} animate-pulse`} />
              </div>
            </div>
            <p className="text-[10px] font-black text-ink-muted uppercase tracking-[0.3em] animate-pulse">
              {refining ? 'Refining Architecture...' : statusText}
            </p>
          </div>
        </div>
      )}

      {error && !statusText.includes('Retrying') && (
        <div className="text-center p-8 rounded-3xl bg-ceramic-base shadow-skeuo-outer border border-red-100 mb-8">
          <p className="text-red-500 font-bold mb-6 italic">"Error in the Forge: {error}"</p>
          <button 
            onClick={() => { setRetryCount(0); fetchQuestions(); }}
            className="px-8 py-3 rounded-xl bg-ceramic-base text-cloud-accent font-bold shadow-skeuo-outer hover:shadow-skeuo-inner transition-all active:scale-95"
          >
            Re-Ignite Connection
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-10 text-left">
        <div className="space-y-8 max-h-[55vh] overflow-y-auto px-6 pb-6 custom-scrollbar scroll-smooth">
          {questions.map((q, idx) => (
            <div key={q.id || idx} className="group space-y-4 animate-in fade-in slide-in-from-bottom-2">
              <label className="block text-xs font-black text-ink-muted uppercase tracking-widest opacity-70">
                Module {idx + 1} // {q.text}
              </label>
              {q.type === 'select' ? (
                <div className="relative">
                  <select 
                    required
                    value={answers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    className="w-full p-5 rounded-2xl bg-ceramic-base shadow-skeuo-inner text-ink-dark font-bold appearance-none border-none"
                  >
                    <option value="" disabled>Select implementation path...</option>
                    {q.options?.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <input 
                  type="text"
                  required
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  className="w-full p-5 rounded-2xl bg-ceramic-base shadow-skeuo-inner text-ink-dark font-bold border-none"
                  placeholder="Define requirement..."
                />
              )}
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/40 flex justify-end">
          <button 
            type="submit"
            disabled={questions.length === 0 || Object.keys(answers).length < questions.length || loading || refining}
            className="px-10 py-5 rounded-2xl bg-ceramic-base text-cloud-accent font-black tracking-[0.2em] uppercase shadow-skeuo-outer active:shadow-skeuo-inner transition-all disabled:opacity-30"
          >
            Forge Blueprint
          </button>
        </div>
      </form>
    </>
  );
}