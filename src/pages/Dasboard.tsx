import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import Sidebar from '@/components/Sidebar';
import Overview from './sections/Overview';
import Orders from './sections/Orders';
import MenuManager from './sections/MenuManager';
import Branches from './sections/Branches';
import Staff from './sections/Staff';
import Analytics from './sections/Analytics';

export default function DashboardPage() {
  const { user } = useApp();
  const [section, setSection] = useState('overview');

  if (!user) return <p className="text-center mt-20 text-xl text-red-600">Access denied. Please log in.</p>;

  return (
    <div className="flex h-screen">
      <Sidebar role={user.role} selected={section} onSelect={setSection} />
      <main className="flex-1 bg-gray-100 overflow-auto p-6">
        {section === 'overview' && <Overview />}
        {section === 'orders' && <Orders />}
        {section === 'menu' && <MenuManager />}
        {section === 'branches' && <Branches />}
        {section === 'staff' && <Staff />}
        {section === 'analytics' && <Analytics />}
        {section === 'settings' && <div>Settings Section</div>}
      </main>
    </div>
  );
}