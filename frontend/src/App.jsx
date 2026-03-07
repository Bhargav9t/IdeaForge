import React, { useState, useEffect } from 'react';
import TopNavLayout from './components/layout/TopNavLayout';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import GraphCanvas from './pages/GraphCanvas';
import RequirementForm from './components/ui/RequirementForm';
import CeramicErrorModal from './components/ui/CeramicErrorModal';
import LoginPage from './pages/LoginPage';

export default function App() {
  // Master state for which "window/tab" is currently open
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'new', 'map', 'analysis'
  
  // State for the generated project
  const [projectIdea, setProjectIdea] = useState(null);
  const [dbError, setDbError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('ideaforge_token'));

  // Monitor Database Connection Status
  const checkDbHealth = async () => {
    try {
      const response = await fetch("http://localhost:8001/api/v1/admin/system-health");
      if (!response.ok) {
        setDbError(true);
      } else {
        setDbError(false);
      }
    } catch (error) {
      setDbError(true);
    }
  };

  useEffect(() => {
    checkDbHealth();
    const interval = setInterval(checkDbHealth, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);
  const handleGenerateGraph = (data) => {
    setProjectIdea(data);
    setCurrentView('analysis'); // Automatically move them to the questions/analysis tab next
  };

  // Render the correct component based on the active tab
  const renderView = () => {
    switch(currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'new':
        return <LandingPage onGenerate={handleGenerateGraph} />;
      case 'map':
        return (
          <div className="h-[80vh] w-full rounded-3xl overflow-hidden shadow-skeuo-outer border border-white">
            <GraphCanvas idea={projectIdea} />
          </div>
        );
      case 'analysis':
        return (
          <div className="bg-ceramic-base p-8 rounded-3xl shadow-skeuo-outer min-h-[80vh] flex flex-col items-center justify-center scale-in-slow">
            <RequirementForm 
              concept={projectIdea?.idea} 
              depth={projectIdea?.depth}
              onComplete={(data) => {
                setProjectIdea({ ...projectIdea, ...data });
                setCurrentView('map');
              }}
            />
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <CeramicErrorModal isOpen={dbError} onRetry={checkDbHealth} />
        <LoginPage onLogin={() => setIsAuthenticated(true)} />
      </>
    );
  }

  return (
    <>
      <CeramicErrorModal isOpen={dbError} onRetry={checkDbHealth} />
      <TopNavLayout currentView={currentView} onViewChange={setCurrentView}>
        {renderView()}
      </TopNavLayout>
    </>
  );
}