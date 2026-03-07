import React, { useState } from 'react';

// Simple Modal Component for the Complexity Selection
function ComplexityModal({ isOpen, onClose, onSelect }) {
  const [selectedDepth, setSelectedDepth] = useState('simple');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal entry animation */}
      <div className="bg-white/80 backdrop-blur-3xl p-10 rounded-[2.5rem] shadow-glass-depth border border-white max-w-lg w-full scale-in-slow">
        <h3 className="text-3xl font-black text-ink-dark tracking-tight mb-8">Set Your Forging Depth</h3>
        
        <div className="flex flex-col gap-4">
          {['simple', 'moderate', 'complex'].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedDepth(level)}
              className={`w-full p-6 rounded-2xl transition-all duration-300 flex items-center gap-6 ${
                selectedDepth === level 
                  ? 'bg-ceramic-base shadow-skeuo-outer border-2 border-cloud-accent' 
                  : 'bg-ceramic-dark hover:bg-ceramic-base/60'
              }`}
            >
              <div className={`w-8 h-8 rounded-full shadow-skeuo-inner flex items-center justify-center ${selectedDepth === level ? 'bg-cloud-accent' : 'bg-ceramic-dark'}`}>
                {selectedDepth === level && <div className="w-3 h-3 bg-white rounded-full"></div>}
              </div>
              <div>
                <span className="block text-xl font-bold uppercase tracking-wide text-ink-dark">
                  {level}
                </span>
                <span className="block text-xs font-medium text-ink-muted mt-0.5">
                  {level === 'simple' ? '5 Targeted Questions' : level === 'moderate' ? '15 In-Depth Questions' : '25 Comprehensive Questions'}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-4 mt-12 justify-end">
          <button onClick={onClose} className="px-6 py-3 rounded-xl bg-ceramic-dark text-ink-muted font-bold hover:text-ink-dark">Cancel</button>
          <button 
            onClick={() => onSelect(selectedDepth)}
            className="px-8 py-3 rounded-xl bg-ceramic-base text-cloud-accent font-black tracking-widest uppercase shadow-skeuo-outer active:shadow-skeuo-inner"
          >
            Start Forging
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage({ onGenerate }) {
  const [idea, setIdea] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isForging, setIsForging] = useState(false);
  const [finalDepth, setFinalDepth] = useState('simple');

  const handleOpenModal = () => {
    if (!idea.trim()) return;
    setIsModalOpen(true);
  };

  const handleForgingSequence = (depth) => {
    setIsModalOpen(false);
    setFinalDepth(depth);
    setIsForging(true);
    
    // Simulate the analyzing animation before transitioning to the Questionnaire
    setTimeout(() => {
      onGenerate({ idea: idea, depth: depth }); 
      setIsForging(false);
    }, 4000); 
  };

  // --- THE ANALYZING ANIMATION STATE ---
  if (isForging) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center relative scale-in-slow">
        {/* Soft pulsing glass spheres */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-64 h-64 bg-cloud-blue/50 rounded-full animate-ping blur-2xl" />
          <div className="absolute w-40 h-40 bg-white/60 backdrop-blur-3xl border border-white rounded-full shadow-glass-depth animate-pulse" />
          <div className="z-10 w-20 h-20 bg-ceramic-base rounded-full shadow-skeuo-inner border-4 border-cloud-accent flex items-center justify-center">
            <div className="w-4 h-4 bg-cloud-accent rounded-full animate-bounce" />
          </div>
        </div>
        <h2 className="mt-12 text-3xl font-black text-ink-dark tracking-widest uppercase">
          Forging Architecture
        </h2>
        <p className="mt-3 text-sm font-bold text-ink-muted uppercase tracking-widest animate-pulse">
          Analyzing {finalDepth} requirements...
        </p>
      </div>
    );
  }

  // --- THE MAIN INPUT STATE ---
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 relative overflow-y-auto">
      
      <ComplexityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelect={handleForgingSequence} 
      />

      {/* Slow entry animation applied to the entire form block */}
      <div className="w-full max-w-4xl flex flex-col items-center gap-12 z-10 scale-in-slow">
        
        {/* Rebranding Header */}
        <div className="text-center space-y-2">
          <h1 className="text-8xl font-black tracking-tighter text-ink-dark italic drop-shadow-sm">
            IDEA<span className="text-cloud-accent font-light not-italic">FORGE</span>
          </h1>
          <p className="text-sm text-ink-muted font-bold tracking-[0.2em] uppercase">
            Blueprint Generator & Flowchart Architect
          </p>
        </div>

        {/* Recessed Ceramic Input Basin */}
        <div className="w-full flex flex-col gap-3">
          <label className="text-[10px] font-bold text-ink-muted uppercase tracking-widest pl-2">
            Project Concept
          </label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your app or web platform. What is the core problem it solves?"
            className="w-full h-56 p-8 rounded-[2rem] bg-ceramic-base shadow-skeuo-inner text-ink-dark focus:outline-none focus:ring-2 focus:ring-cloud-accent/20 transition-all placeholder-ink-muted/40 font-medium text-lg resize-none leading-relaxed"
          />
        </div>

        {/* Master Action Button */}
        <button 
          onClick={handleOpenModal} 
          disabled={!idea.trim()}
          className="group relative px-12 py-5 rounded-2xl bg-ceramic-base text-cloud-accent font-black tracking-[0.2em] uppercase shadow-skeuo-outer active:shadow-skeuo-inner active:translate-y-[2px] transition-all disabled:opacity-50 disabled:shadow-none"
        >
          Initiate Forging
          {/* Subtle hover highlight */}
          <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </button>

      </div>
    </div>
  );
}