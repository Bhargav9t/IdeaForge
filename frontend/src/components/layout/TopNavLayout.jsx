import React, { useState } from 'react';

export default function TopNavLayout({ children, currentView, onViewChange }) {
  const [profileOpen, setProfileOpen] = useState(false);

  // Added the Collaboration tab with a multi-user SVG icon
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { id: 'new', label: '+ New Project', icon: 'M12 4v16m8-8H4', isPrimary: true },
    { id: 'map', label: 'Concept Map', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { id: 'analysis', label: 'Analysis', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'collab', label: 'Collaboration', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  ];

  return (
    <div className="min-h-screen w-screen bg-ceramic-base overflow-x-hidden flex flex-col">
      {/* Top Navigation Bar - Frosted Glass */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 glass-panel-light flex items-center justify-between px-8">
        
        {/* Logo - Top Left */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onViewChange('dashboard')}>
          <div className="w-8 h-8 rounded-lg bg-ceramic-base shadow-skeuo-outer flex items-center justify-center border border-cloud-accent/30">
            <span className="text-cloud-accent font-black text-xl">&lt;&gt;</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-ink-dark italic">
            IDEA<span className="text-cloud-accent font-light not-italic">FORGE</span>
          </h1>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold tracking-wide text-sm transition-all duration-300 ${
                item.isPrimary 
                  ? 'bg-cloud-accent text-white shadow-[0_4px_12px_rgba(74,144,226,0.3)] hover:shadow-[0_6px_16px_rgba(74,144,226,0.4)] hover:-translate-y-0.5' 
                  : currentView === item.id 
                    ? 'bg-ceramic-base shadow-skeuo-inner text-cloud-accent' 
                    : 'text-ink-muted hover:text-ink-dark hover:bg-white/50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon}></path>
              </svg>
              {item.label}
              
              {/* Add a tiny Live badge to the collab tab to make it pop */}
              {item.id === 'collab' && (
                <span className="ml-1 text-[8px] bg-ceramic-base shadow-skeuo-inner text-cyan-500 border border-white/40 px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
                  Live
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Profile - Top Right */}
        <div className="relative">
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 pl-6 border-l border-ink-muted/20 hover:opacity-80 transition-opacity"
          >
            <div className="text-right hidden md:block">
              <span className="block text-sm font-bold text-ink-dark">Architect</span>
              <span className="block text-[10px] text-ink-muted uppercase tracking-widest">Active</span>
            </div>
            <div className={`w-10 h-10 rounded-full bg-ceramic-base shadow-skeuo-outer border-2 border-white flex items-center justify-center text-cloud-accent font-black transition-transform ${profileOpen ? 'scale-95 shadow-skeuo-inner' : ''}`}>
              A
            </div>
          </button>
          
          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute right-0 mt-4 w-48 py-2 bg-white/80 backdrop-blur-3xl rounded-2xl shadow-skeuo-outer border border-white flex flex-col z-50 animate-fade-in origin-top-right">
              <button 
                onClick={() => { setProfileOpen(false); onViewChange('dashboard'); }}
                className="px-4 py-2 text-left font-bold text-ink-dark shadow-skeuo-inner bg-ceramic-base m-2 rounded-xl hover:text-cloud-accent"
              >
                Settings
              </button>
              <button 
                onClick={() => {
                  setProfileOpen(false);
                  localStorage.removeItem('ideaforge_token');
                  localStorage.removeItem('ideaforge_user_id');
                  window.location.reload();
                }}
                className="px-4 py-2 text-left font-bold text-ink-dark shadow-skeuo-inner bg-ceramic-base mx-2 mb-2 rounded-xl text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area - Padding top ensures it sits below the fixed header */}
      <main className="flex-1 pt-24 px-8 pb-8">
        <div className="max-w-7xl mx-auto h-full animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}