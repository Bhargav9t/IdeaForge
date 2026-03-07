import React from 'react';
import { Handle, Position } from '@xyflow/react';

/**
 * SkeuomorphicNode: A tactile, raised ceramic milestone card for light mode.
 * Perfectly mapped to the E-Commerce Architecture dummy data.
 */
const SkeuomorphicNode = ({ data }) => {
  // Map status or default to pending
  const isError = data.status === 'error';
  const isVerified = data.status === 'verified' || data.status === 'completed';

  return (
    <div className={`
      relative w-80 p-6 rounded-3xl bg-ceramic-base shadow-skeuo-outer border border-white
      transition-all duration-300 ease-out hover:shadow-skeuo-inner hover:translate-y-[2px]
      ${isError ? 'shadow-[10px_10px_20px_#D5D5D0,-10px_-10px_20px_#FFFFFF,0_0_25px_rgba(255,42,42,0.3)] border-red-300' : ''}
    `}>
      {/* Target Handle (Input) - Designed to look like a recessed port */}
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-5 h-5 !bg-ceramic-base !border-4 !border-cloud-accent shadow-skeuo-inner rounded-full -mt-2"
      />

      <div className="relative z-10 space-y-4">
        {/* Header Area */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-black tracking-tight text-ink-dark leading-snug uppercase">
            {/* THE FIX: React Flow uses data.label, not data.title */}
            {data.label || data.title || 'System Component'}
          </h3>
          
          {/* Status LED: Frosted Glass Status Light */}
          <div className={`w-5 h-5 rounded-full glass-panel-light shadow-skeuo-outer border border-white/50 flex items-center justify-center ${
            isError ? 'bg-[#ff2a2a] animate-pulse shadow-[0_0_15px_#ff2a2a]' : 
            isVerified ? 'bg-cloud-accent shadow-[0_0_15px_rgba(0,163,255,0.4)]' : 
            'bg-yellow-400 animate-pulse'
          }`}>
            <div className="w-2 h-2 rounded-full bg-white opacity-80 blur-[1px]"></div>
          </div>
        </div>
        
        {/* Description: Calm muted text */}
        <p className="text-xs text-ink-muted leading-relaxed font-bold italic opacity-80">
          {data.description || 'Architectural node provisioned.'}
        </p>
        
        {/* Tech Stack: Recessed ceramic container with slight glass shimmer */}
        <div className="mt-5 p-4 rounded-2xl bg-ceramic-base shadow-skeuo-inner flex gap-2 flex-wrap border border-black/5">
          {/* Handle cases where techStack is an array OR a comma-separated string */}
          {(Array.isArray(data.techStack) ? data.techStack : (data.techStack?.split(',') || [])).map((tech, index) => (
            tech.trim() !== "" && (
              <span 
                key={index} 
                className="text-[10px] uppercase font-black font-mono tracking-widest px-3 py-1.5 rounded-lg bg-ceramic-base shadow-skeuo-outer text-cloud-accent transition-all hover:shadow-skeuo-inner hover:translate-y-px"
              >
                {tech.trim()}
              </span>
            )
          )) || <span className="text-[10px] text-ink-muted/50 italic font-bold">No stack defined</span>}
        </div>
      </div>

      {/* Source Handle (Output) - Recessed port for outbound connections */}
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="w-5 h-5 !bg-ceramic-base !border-4 !border-cloud-accent shadow-skeuo-inner rounded-full -mb-2"
      />
    </div>
  );
};

export default SkeuomorphicNode;