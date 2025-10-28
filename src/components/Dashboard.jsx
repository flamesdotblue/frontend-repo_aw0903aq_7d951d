import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Plus, TrendingUp } from 'lucide-react';

const StatCard = ({ label, value, sub }) => (
  <div className="flex-1 min-w-[180px] rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
    <p className="text-xs text-gray-500">{label}</p>
    <div className="flex items-baseline gap-2 mt-1">
      <p className="text-2xl font-semibold">{value}</p>
      {sub ? <span className="text-xs text-green-600 inline-flex items-center gap-1"><TrendingUp size={14} />{sub}</span> : null}
    </div>
  </div>
);

const QuickCard = ({ title, children }) => (
  <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm min-h-[160px]">
    <h3 className="text-sm font-semibold text-gray-800 mb-2">{title}</h3>
    {children}
  </div>
);

const MiniBars = () => (
  <div className="flex items-end gap-1 h-10">
    {[30, 60, 40, 70, 50, 80, 45].map((h, i) => (
      <div key={i} className="w-2 rounded bg-indigo-200 hover:bg-indigo-300 transition" style={{ height: `${h}%` }} />
    ))}
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex-1 min-w-0">
      {/* Hero with Spline cover */}
      <section className="relative rounded-2xl overflow-hidden border border-gray-100 bg-white">
        <div className="h-[280px] w-full">
          <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Welcome back 👋</h2>
            <p className="text-sm text-gray-600">Here’s a snapshot of your learning journey.</p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm shadow">
            <Play size={16} /> Start Session
          </button>
        </div>
      </section>

      {/* Progress summary cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <StatCard label="XP" value="1,240" sub="+8%" />
        <StatCard label="Streak" value="7 days" />
        <StatCard label="Next Goal" value="Finish Algebra Ch. 4" />
        <StatCard label="Focus Time (wk)" value="9h 20m" sub="+12%" />
      </section>

      {/* Bento quick modules */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
        <QuickCard title="Focus">
          <div className="flex items-center justify-between">
            <MiniBars />
            <button className="px-3 py-1.5 rounded-md bg-gray-900 text-white text-xs">Start</button>
          </div>
        </QuickCard>
        <QuickCard title="Planner">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Math review • 3 PM</li>
            <li>• English essay draft • 5 PM</li>
            <li>• Physics problems • 7 PM</li>
          </ul>
        </QuickCard>
        <QuickCard title="Notes">
          <p className="text-sm text-gray-600">“Einstein’s postulates imply constant light speed…”</p>
        </QuickCard>
        <QuickCard title="Flashcards">
          <p className="text-sm text-gray-600">12 due today • Deck: Biology</p>
        </QuickCard>
      </section>

      {/* Activity timeline */}
      <section className="mt-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Recent Activity</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <p>Completed Pomodoro • 25m • Calculus</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <p>Added 3 notes to Physics</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <p>Planner updated for tomorrow</p>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center"
        aria-label="Quick add"
      >
        <Plus />
      </button>
    </div>
  );
};

export default Dashboard;
