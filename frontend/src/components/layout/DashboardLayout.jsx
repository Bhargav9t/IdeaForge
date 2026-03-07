import React from 'react';

export default function DashboardLayout({ children, onNewProject, onOpenHistory }) {
  return (
    <div className="flex h-screen w-screen bg-ceramic-base overflow-hidden relative">
      
      {/* Soft Background Gradients for the Canvas */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-cloud-blue/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#E8E8E1] rounded-full blur-[150px] pointer-events-none" />

      {/* Left Sidebar (n8n style) */}
      <aside className="relative z-20 w-80 h-full glass-panel-light border-r border-white/60 flex flex-col justify-between p-6 shadow-[4px_0_24px_rgba(136,152,170,0.1)]">
        
        <div className="space-y-10">
          {/* Logo Area */}
          <div className="px-2">
            <h1 className="text-3xl font-black tracking-tighter text-ink-dark italic drop-shadow-sm">
              IDEA<span className="text-cloud-accent font-light not-italic">GRAPH</span>
            </h1>
          </div>

          {/* Primary Action: Raised Ceramic Tile */}
          <button 
            onClick={onNewProject}
            className="w-full py-5 px-6 rounded-2xl bg-ceramic-base text-cloud-accent font-bold tracking-wider shadow-skeuo-outer active:shadow-skeuo-inner active:translate-y-[2px] transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
            </svg>
            New Blueprint
          </button>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold text-ink-muted uppercase tracking-widest px-4 mb-4">Workspace</h3>
            
            <button 
              onClick={onOpenHistory}
              className="w-full text-left px-4 py-3 rounded-xl text-ink-dark font-semibold hover:bg-white/60 hover:shadow-skeuo-inner transition-all flex items-center gap-3 group"
            >
              <svg className="w-5 h-5 text-ink-muted group-hover:text-cloud-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Project History
            </button>

            {/* THE NEW COLLABORATION TAB */}
            <button 
              onClick={() => console.log("Collab opened - Add routing logic here later")}
              className="w-full text-left px-4 py-3 rounded-xl text-ink-dark font-semibold hover:bg-white/60 hover:shadow-skeuo-inner transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-ink-muted group-hover:text-cloud-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Collaboration
              </div>
              {/* Carved-in Live Badge */}
              <span className="text-[9px] bg-ceramic-base shadow-skeuo-inner text-cyan-500 border border-white/40 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Live</span>
            </button>
          </div>
        </div>

        {/* Profile Card: Raised Ceramic Element */}
        <button className="w-full mt-auto p-4 rounded-2xl bg-ceramic-base shadow-skeuo-outer active:shadow-skeuo-inner active:translate-y-[2px] transition-all flex items-center gap-4 text-left group">
          
          {/* Avatar Ring */}
          <div className="w-12 h-12 rounded-full bg-ceramic-base shadow-skeuo-inner flex items-center justify-center border-2 border-white">
            <span className="text-cloud-accent font-black tracking-tighter">DR</span>
          </div>
          
          {/* Profile Details */}
          <div className="flex-col flex">
            <span className="text-sm font-bold text-ink-dark group-hover:text-cloud-accent transition-colors">Danda Rajashekar</span>
            <span className="text-[10px] text-ink-muted font-mono uppercase tracking-widest mt-0.5">AIML Architect</span>
          </div>
        </button>
      </aside>

      {/* Main Canvas Area */}
      <main className="relative z-10 flex-1 h-full bg-transparent">
        {children}
      </main>
    </div>
  );
}