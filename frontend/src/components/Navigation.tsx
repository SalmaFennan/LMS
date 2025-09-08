import React from 'react';
import { 
  Home, 
  Users, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  ShoppingCart, 
  ClipboardList
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
<nav className="bg-red-500 text-white w-72 min-h-screen p-4">
        {/* Logo + titre */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          {/* Logo image */}
          <img 
            src="/dataprotect.png" 
            alt="Logo" 
            className="h-12 w-auto object-contain bg-white rounded-md p-1 shadow-sm"
          />  

          {/* Texte à côté du logo */}
          <span className="text-xl font-bold text-white whitespace-nowrap">
            Sensi-Pro
          </span>
        </div>
        
        <p className="text-red-100 text-sm leading-snug">
          DATAPROTECT une sécurité unifiée <br />
          un interlocuteur unique
        </p>
      </div>

      {/* Menu */}
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <button
                onClick={() => setActiveModule(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeModule === item.id 
                    ? 'bg-red-600 text-white shadow-md' 
                    : 'hover:bg-red-400 text-red-50'
                }`}
              >
                <Icon size={20} />
                <span className="truncate">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
