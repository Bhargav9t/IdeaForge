import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 1. THIS IS THE MISSING FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    // For the hackathon evaluation, we allow any login
    if (email && password) {
      onLogin(); 
    }
  };

  return (
    <div className="flex h-screen w-screen bg-ceramic-base items-center justify-center">
      <div className="z-10 w-full max-w-md p-10 rounded-[2rem] glass-panel-light flex flex-col gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-black text-ink-dark italic">
            IDEA<span className="text-cloud-accent font-light not-italic">FORGE</span>
          </h1>
          <p className="text-sm text-ink-muted uppercase">Workspace Authentication</p>
        </div>

        {/* 2. ENSURE THIS MATCHES THE FUNCTION NAME ABOVE */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-ink-muted uppercase">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl bg-ceramic-base shadow-skeuo-inner"
              placeholder="architect@hitam.org"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-ink-muted uppercase">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl bg-ceramic-base shadow-skeuo-inner"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 rounded-xl bg-ceramic-base text-cloud-accent font-black shadow-skeuo-outer active:shadow-skeuo-inner"
          >
            Access Terminal
          </button>
        </form>
      </div>
    </div>
  );
}