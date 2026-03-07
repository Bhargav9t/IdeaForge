import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Import newly redesign tactile components
import SkeuomorphicNode from '../components/nodes/SkeuomorphicNode';
import PatchCableEdge from '../components/edges/PatchCableEdge';

const nodeTypes = {
  skeuomorphic: SkeuomorphicNode,
};

const edgeTypes = {
  patchCable: PatchCableEdge,
};

// ... initialNodes/initialEdges data is same as before, but increased spacing for best look ...
const initialNodes = [
    {
      id: '1',
      type: 'skeuomorphic',
      position: { x: 250, y: 100 },
      data: { 
        title: 'Project Initiation', 
        description: 'The raw idea is parsed and the base architecture is drafted.',
        techStack: ['Groq Llama-3', 'FastAPI'],
        status: 'verified' 
      },
    },
    {
      id: '2',
      type: 'skeuomorphic',
      position: { x: 250, y: 450 }, // increased vertical gap
      data: { 
        title: 'Database Schema', 
        description: 'Generating UUID-based MySQL tables with SQLAlchemy.',
        techStack: ['MySQL', 'SQLAlchemy'],
        status: 'pending' 
      },
    }
  ];

export default function GraphCanvas({ idea }) {
  // Use generated nodes if available, otherwise fallback to the interactive default map
  const [nodes, setNodes] = useState(idea?.nodes || initialNodes);
  const [edges, setEdges] = useState(idea?.edges || []); // edges start empty in initial data now

  // Standard React Flow handlers
  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, type: 'patchCable' }, eds)), []);

  return (
    <div className="w-full h-full bg-ceramic-base relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        {/* CHANGED: Deep black grid is gone. Warm ceramic background with very faint dots */}
        <Background color="#DEDEC9" gap={30} size={1} />
        
        {/* Controls panel: Redesigned tactile style */}
        <Controls />
      </ReactFlow>

      {/* Rebranded Persistent UI Overlay */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <h2 className="text-2xl font-black text-ink-dark tracking-[0.3em] uppercase opacity-40">
          FORGE <span className="text-cloud-accent font-medium">WORKSPACE</span>
        </h2>
      </div>
    </div>
  );
}