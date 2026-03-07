import React from 'react';
import MechanicalButton from './MechanicalButton';

export default function CeramicErrorModal({ isOpen, errorMessage, onRetry }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#F5F5F0]/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      {/* Raised Ceramic Modal */}
      <div className="bg-ceramic-base p-10 rounded-[2.5rem] shadow-skeuo-outer border border-white max-w-lg w-full scale-in-slow text-center">
        
        {/* Recessed Error Basin */}
        <div className="bg-ceramic-base shadow-skeuo-inner rounded-3xl p-8 mb-8 border border-cloud-accent/10">
          <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-ink-dark tracking-tight mb-2 uppercase">Connection Severed</h3>
          <p className="text-sm font-bold text-ink-muted leading-relaxed">
            {errorMessage || 'The SQLAlchemy Forge link was broken. Check backend services and database status.'}
          </p>
        </div>

        {/* Action Area */}
        <div className="flex justify-center">
          {/* We wrap the text in a span so it works properly within MechanicalButton generic styles, 
              though we apply our own classes if needed. MechanicalButton accepts children and onClick. */}
          <MechanicalButton onClick={onRetry} variant="primary">
             Reconnect
          </MechanicalButton>
        </div>
      </div>
    </div>
  );
}
