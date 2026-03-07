import React from 'react';

/**
 * MechanicalButton: A 3D tactile button with physical depression states.
 * Uses custom shadows defined in tailwind.config.js for depth.
 */
const MechanicalButton = ({ onClick, children, disabled, variant = 'primary' }) => {
  // Styles change based on the button's purpose
  const isPrimary = variant === 'primary';
  
  const borderStyles = isPrimary 
    ? 'border-[#00f0ff] text-[#00f0ff]' 
    : 'border-gray-600 text-gray-400';

  const glowStyles = isPrimary 
    ? 'hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]' 
    : 'hover:shadow-white/5';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-10 py-4 rounded-xl font-black tracking-[0.2em] uppercase 
        transition-all duration-75 ease-in-out
        bg-[#0a0a0c] border-2 ${borderStyles} ${glowStyles}
        
        /* The "Skeuomorphic Lift" - Heavy outer shadows */
        shadow-[6px_6px_12px_#040405,-6px_-6px_12px_#121216]
        
        /* The "Mechanical Press" - Move down and flatten shadow on click */
        active:translate-y-1 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8)]
        
        /* Disabled state */
        disabled:opacity-30 disabled:cursor-not-allowed disabled:active:translate-y-0
      `}
    >
      {/* Internal "Liquid Glass" highlight for a premium finish */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
      
      <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        {children}
      </span>
    </button>
  );
};

export default MechanicalButton;