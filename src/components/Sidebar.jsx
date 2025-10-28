import React from 'react';
import { Home, Brain, Calendar, Timer, BarChart3, Library, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active }) => (
  <button
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition hover:bg-gray-100 ${
      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
    }`}
    aria-current={active ? 'page' : undefined}
  >
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:flex-col md:w-60 shrink-0 border-r border-gray-100 bg-white h-[calc(100vh-56px)] sticky top-14">
      <nav className="p-3 space-y-1">
        <NavItem icon={Home} label="Dashboard" active />
        <NavItem icon={Brain} label="Study Techniques" />
        <NavItem icon={Calendar} label="Planner" />
        <NavItem icon={Timer} label="Focus Mode" />
        <NavItem icon={BarChart3} label="Progress Tracker" />
        <NavItem icon={Library} label="Library" />
      </nav>
      <div className="mt-auto p-3">
        <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-fuchsia-50 border border-indigo-100">
          <p className="text-xs text-gray-600">Tip: Press <span className="font-medium">Ctrl + K</span> to search anywhere.</p>
        </div>
        <div className="mt-2">
          <NavItem icon={Settings} label="Settings" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
