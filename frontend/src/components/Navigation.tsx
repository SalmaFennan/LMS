import React from 'react';
import { 
  Home, 
  Users, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  ShoppingCart, 
  ClipboardList,
  Dumbbell
} from 'lucide-react';

interface NavigationProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeModule, setActiveModule }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Tableau de Bord', icon: Home },
    { id: 'members', label: 'Membres', icon: Users },
    { id: 'employees', label: 'Employés', icon: UserCheck },
    { id: 'attendance', label: 'Présences', icon: ClipboardList },
    { id: 'classes', label: 'Cours', icon: Calendar },
    { id: 'finance', label: 'Finances', icon: DollarSign },
    { id: 'shop', label: 'Boutique', icon: ShoppingCart },
  ];

  return (
    <nav className="bg-blue-600 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Dumbbell size={32} />
          <h1 className="text-xl font-bold">GymManager Pro</h1>
        </div>
        <p className="text-blue-200 text-sm">Gestion de Salle de Sport</p>
      </div>
      
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <button
                onClick={() => setActiveModule(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeModule === item.id 
                    ? 'bg-blue-700 text-white' 
                    : 'hover:bg-blue-500 text-blue-100'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};