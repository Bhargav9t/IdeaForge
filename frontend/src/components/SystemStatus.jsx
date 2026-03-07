import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SystemStatus = () => {
  const [aiStatus, setAiStatus] = useState('checking');
  const [dbStatus, setDbStatus] = useState('checking');
  const [corsError, setCorsError] = useState(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        // Check AI health
        const aiResponse = await axios.get('http://localhost:8000/api/v1/health/ai');
        setAiStatus(aiResponse.data.status === 'healthy' ? 'healthy' : 'unhealthy');
      } catch (error) {
        if (error.response) {
          setAiStatus('unhealthy');
        } else if (error.request) {
          // CORS or network error
          setCorsError('CORS or Network Error: Unable to reach backend. Check if backend is running and CORS is configured.');
          setAiStatus('error');
        } else {
          setAiStatus('error');
        }
      }

      try {
        // Check DB health
        const dbResponse = await axios.get('http://localhost:8000/api/v1/health/db');
        setDbStatus(dbResponse.data.status === 'healthy' ? 'healthy' : 'unhealthy');
      } catch (error) {
        if (error.response) {
          setDbStatus('unhealthy');
        } else if (error.request) {
          setCorsError('CORS or Network Error: Unable to reach backend. Check if backend is running and CORS is configured.');
          setDbStatus('error');
        } else {
          setDbStatus('error');
        }
      }
    };

    checkHealth();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'bg-green-500';
      case 'unhealthy': return 'bg-red-500';
      case 'checking': return 'bg-yellow-500 animate-pulse';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'healthy': return 'ONLINE';
      case 'unhealthy': return 'OFFLINE';
      case 'checking': return 'CHECKING...';
      default: return 'ERROR';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-8">
      <div className="relative bg-[#0d0d0f] border-2 border-[#00f0ff] rounded-2xl p-8 shadow-[8px_8px_16px_#040405,-8px_-8px_16px_#121216]">
        {/* Glassmorphic overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-3xl font-black text-[#00f0ff] text-center mb-8 tracking-wider uppercase">
            System Status Dashboard
          </h1>

          {corsError && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
              <p className="text-red-400 font-semibold">CORS Error Detected:</p>
              <p className="text-red-300 text-sm mt-1">{corsError}</p>
            </div>
          )}

          <div className="space-y-6">
            {/* AI Status */}
            <div className="flex items-center justify-between p-6 bg-[#0a0a0c] border border-[#00f0ff]/30 rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8)]">
              <div className="flex items-center space-x-4">
                <div className={`w-6 h-6 rounded-full ${getStatusColor(aiStatus)} shadow-lg`}></div>
                <div>
                  <h2 className="text-xl font-bold text-[#00f0ff] uppercase tracking-wide">AI Status</h2>
                  <p className="text-gray-400 text-sm">Ollama Service (llama3)</p>
                </div>
              </div>
              <span className={`text-lg font-black ${aiStatus === 'healthy' ? 'text-green-400' : aiStatus === 'unhealthy' ? 'text-red-400' : 'text-yellow-400'} uppercase tracking-wider`}>
                {getStatusText(aiStatus)}
              </span>
            </div>

            {/* Database Status */}
            <div className="flex items-center justify-between p-6 bg-[#0a0a0c] border border-[#00f0ff]/30 rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8)]">
              <div className="flex items-center space-x-4">
                <div className={`w-6 h-6 rounded-full ${getStatusColor(dbStatus)} shadow-lg`}></div>
                <div>
                  <h2 className="text-xl font-bold text-[#00f0ff] uppercase tracking-wide">Database Status</h2>
                  <p className="text-gray-400 text-sm">TiDB Connection</p>
                </div>
              </div>
              <span className={`text-lg font-black ${dbStatus === 'healthy' ? 'text-green-400' : dbStatus === 'unhealthy' ? 'text-red-400' : 'text-yellow-400'} uppercase tracking-wider`}>
                {getStatusText(dbStatus)}
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-[#0a0a0c] border-2 border-[#00f0ff] text-[#00f0ff] rounded-xl font-black uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-75 shadow-[4px_4px_8px_#040405,-4px_-4px_8px_#121216] active:translate-y-1 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8)]"
            >
              Refresh Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;