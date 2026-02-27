import { Home, Users, BarChart2, Menu, Coffee, Settings } from 'lucide-react';
import { UserRole } from '@/context/AppContext';

interface SidebarProps {
  role: UserRole;
  selected: string;
  onSelect: (section: string) => void;
}

export default function Sidebar({ role, selected, onSelect }: SidebarProps) {
  const items = [
    { key: 'overview', label: 'Overview', icon: <Home size={18} />, roles: ['director','manager','designer'] },
    { key: 'orders', label: 'Orders', icon: <Coffee size={18} />, roles: ['chef','waiter','manager','director','designer'] },
    { key: 'menu', label: 'Menu', icon: <Menu size={18} />, roles: ['designer','manager','director'] },
    { key: 'branches', label: 'Branches', icon: <BarChart2 size={18} />, roles: ['manager','director','designer'] },
    { key: 'staff', label: 'Staff', icon: <Users size={18} />, roles: ['director','designer'] },
    { key: 'analytics', label: 'Analytics', icon: <BarChart2 size={18} />, roles: ['director','designer'] },
    { key: 'settings', label: 'Settings', icon: <Settings size={18} />, roles: ['designer'] },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-gray-100 h-screen flex flex-col">
      <div className="p-4 font-bold text-xl">Coffee Life Dashboard</div>
      <nav className="flex-1 flex flex-col gap-1">
        {items.filter(i => i.roles.includes(role)).map(i => (
          <button
            key={i.key}
            onClick={() => onSelect(i.key)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-all hover:bg-gray-800 ${selected === i.key ? 'bg-gray-800' : ''}`}
          >
            {i.icon} {i.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}