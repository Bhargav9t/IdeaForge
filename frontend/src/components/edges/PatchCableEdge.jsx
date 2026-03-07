import React from 'react';
import { BaseEdge, getBezierPath } from '@xyflow/react';

export default function PatchCableEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  // Calculates the smooth curve between nodes
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetPosition,
    targetX,
    targetY,
  });

  return (
    <>
      {/* LAYER 1: The "Glow & Shadow" 
          This provides the 3D lift and ambient light bleed 
      */}
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          strokeWidth: 12,
          stroke: 'rgba(0, 240, 255, 0.1)', // Very faint cyber blue
          strokeLinecap: 'round',
          filter: 'drop-shadow(0px 12px 8px rgba(0,0,0,0.8))', // Creates physical depth
        }}
      />
      
      {/* LAYER 2: The "Neon Core" 
          The solid, high-intensity center of the cable 
      */}
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          strokeWidth: 4,
          stroke: '#00f0ff', // Vivid cyber blue
          strokeLinecap: 'round',
          opacity: 0.9,
        }}
      />
    </>
  );
}