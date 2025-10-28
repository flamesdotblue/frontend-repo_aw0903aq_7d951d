import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Dashboard from './components/Dashboard';

const App = () => {
  // Basic command palette shortcut (Ctrl/Cmd + K)
  const openCommand = () => {
    // Minimal feedback for now
    alert('Command Palette — coming soon!');
  };

  useEffect(() => {
    const handler = (e) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      if ((isMac && e.metaKey && e.key.toLowerCase() === 'k') || (!isMac && e.ctrlKey && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        openCommand();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header onOpenCommand={openCommand} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <Sidebar />
          <Dashboard />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
