import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Dashboard from './components/Dashboard';

const App = () => {
  const openCommand = () => {
    alert('Command Palette — coming soon!');
  };

  useEffect(() => {
    const handler = (e) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC');
      if ((isMac && e.metaKey && e.key.toLowerCase() === 'k') || (!isMac && e.ctrlKey && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        openCommand();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header onOpenCommand={openCommand} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Three-column responsive layout with aligned tops */}
        <div className="grid items-start gap-6 grid-cols-1 md:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_20rem]">
          <Sidebar />
          <Dashboard />
          <RightPanel />
        </div>
      </main>
    </div>
  );
};

export default App;
