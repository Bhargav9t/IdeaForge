import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard({ onNewProject }) {
  const [stats, setStats] = useState({
    activeProjects: 0,
    generatedNodes: 0,
    aiStatus: 'Waking up...',
    engine: 'Initializing...'
  });

  // Fetch the real data when the dashboard loads
  useEffect(() => {
    axios.get('http://localhost:8001/api/v1/forge/stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch live stats:", error);
      });
  }, []);

  return (
    <div className="h-full flex flex-col space-y-8 animate-fade-in">
      
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-ink-dark tracking-tighter">
            Architect Overview
          </h2>
          <p className="text-ink-muted mt-2 font-medium">
            Real-time telemetry from the stochastic engine.
          </p>
        </div>
        
        {/* Quick Action Button */}
        <button 
          onClick={onNewProject}
          className="px-6 py-3 bg-cloud-accent text-white font-bold rounded-xl shadow-[0_4px_12px_rgba(74,144,226,0.3)] hover:shadow-[0_6px_16px_rgba(74,144,226,0.4)] hover:-translate-y-0.5 transition-all"
        >
          Initialize Forge
        </button>
      </div>

      {/* Skeuomorphic Stat Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Stat Block 1 */}
        <div className="p-6 rounded-3xl bg-ceramic-base shadow-skeuo-outer flex flex-col justify-between h-40">
          <span className="text-xs font-bold text-ink-muted uppercase tracking-widest">Active Projects</span>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-black text-ink-dark drop-shadow-sm">
              {stats.activeProjects}
            </span>
            <span className="text-sm font-bold text-cloud-accent">Blueprints</span>
          </div>
        </div>

        {/* Stat Block 2 */}
        <div className="p-6 rounded-3xl bg-ceramic-base shadow-skeuo-outer flex flex-col justify-between h-40">
          <span className="text-xs font-bold text-ink-muted uppercase tracking-widest">Generated Nodes</span>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-black text-ink-dark drop-shadow-sm">
              {stats.generatedNodes}
            </span>
            <span className="text-sm font-bold text-emerald-500">Components</span>
          </div>
        </div>

        {/* Stat Block 3: AI Engine Status */}
        <div className="p-6 rounded-3xl bg-ceramic-base shadow-skeuo-inner border border-white/40 flex flex-col justify-between h-40">
          <span className="text-xs font-bold text-ink-muted uppercase tracking-widest">Engine Status</span>
          <div>
            <div className="flex items-center gap-3 mb-1">
              {/* Pulsing indicator */}
              <div className={`w-3 h-3 rounded-full shadow-inner ${stats.aiStatus === 'Optimal' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></div>
              <span className="text-2xl font-black text-ink-dark">{stats.aiStatus}</span>
            </div>
            <span className="text-xs font-mono text-ink-muted">{stats.engine}</span>
          </div>
        </div>

      </div>

      {/* Empty State / Activity Area */}
      <div className="flex-1 rounded-3xl bg-ceramic-base shadow-skeuo-inner border border-white/40 p-8 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-ceramic-base shadow-skeuo-outer rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-cloud-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-ink-dark mb-2">The Forge is Idle</h3>
        <p className="text-ink-muted max-w-md">
          Awaiting input. Click "Initialize Forge" to define a new architectural concept and let the AI generate the layout.
        </p>
      </div>

    </div>
  );
}