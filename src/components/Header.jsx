import React from 'react';
import { Bell, Search, User, Settings } from 'lucide-react';

const Header = ({ onOpenCommand }) => {
  return (
    <header className="w-full sticky top-0 z-30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500" />
          <button className="text-lg font-semibold tracking-tight" aria-label="Go to Dashboard">Studeez</button>
        </div>

        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <button
            onClick={onOpenCommand}
            className="w-full group flex items-center gap-2 px-3 py-2 rounded-md bg-gray-50 border border-gray-200 text-gray-500 hover:bg-white hover:border-gray-300 transition"
            aria-label="Open command palette"
          >
            <Search size={18} className="text-gray-400 group-hover:text-gray-500" />
            <span className="text-sm">Search…</span>
            <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded border border-gray-300 bg-white text-gray-500">Ctrl K</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Notifications">
            <Bell size={18} />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Settings">
            <Settings size={18} />
          </button>
          <button className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100" aria-label="Account menu">
            <div className="h-7 w-7 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
            <User size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
