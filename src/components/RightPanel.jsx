import React from 'react';
import { Timer as TimerIcon, Lightbulb, StickyNote } from 'lucide-react';

const WidgetCard = ({ title, children, icon: Icon }) => (
  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      {Icon ? <Icon size={16} className="text-indigo-600" /> : null}
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
    </div>
    {children}
  </div>
);

const RightPanel = () => {
  return (
    <aside className="hidden xl:block w-80 shrink-0 h-[calc(100vh-56px)] sticky top-14 border-l border-gray-100 bg-gray-50/60 p-4 space-y-4">
      <WidgetCard title="Timer" icon={TimerIcon}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">25:00</p>
            <p className="text-xs text-gray-500">Pomodoro</p>
          </div>
          <button className="px-3 py-1.5 rounded-md bg-indigo-600 text-white text-sm">Start</button>
        </div>
      </WidgetCard>
      <WidgetCard title="Notes" icon={StickyNote}>
        <textarea className="w-full h-24 rounded-md border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Quick note…" />
        <div className="flex justify-end mt-2">
          <button className="text-xs text-indigo-600 hover:underline">Save</button>
        </div>
      </WidgetCard>
      <WidgetCard title="AI Tips" icon={Lightbulb}>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Try a 50/10 deep focus split today.</li>
          <li>Revise yesterday’s calculus notes.</li>
          <li>Block 2-4 PM for project work.</li>
        </ul>
      </WidgetCard>
    </aside>
  );
};

export default RightPanel;
