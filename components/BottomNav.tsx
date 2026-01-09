import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Coffee, ShoppingBag, MessageSquare, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 w-full max-w-md z-50 px-4 pb-6 pt-2 pointer-events-none">
      <div className="pointer-events-auto bg-white/90 dark:bg-surface-dark/90 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] shadow-2xl h-[72px] flex items-center justify-around px-2">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center w-16 gap-1 transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
        >
          <Home strokeWidth={2.5} size={24} />
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        
        <Link 
          to="/menu" 
          className={`flex flex-col items-center justify-center w-16 gap-1 transition-colors ${isActive('/menu') ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
        >
          <Coffee strokeWidth={2.5} size={24} />
          <span className="text-[10px] font-bold">Flavors</span>
        </Link>
        
        <div className="w-16 h-16 rounded-full bg-primary text-white shadow-glow flex items-center justify-center -mt-8 border-[6px] border-background-light dark:border-background-dark transform hover:scale-110 transition-transform cursor-pointer">
          <ShoppingBag strokeWidth={2.5} size={24} />
        </div>
        
        <Link 
          to="/reviews"
          className={`flex flex-col items-center justify-center w-16 gap-1 transition-colors ${isActive('/reviews') ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
        >
          <MessageSquare strokeWidth={2.5} size={24} />
          <span className="text-[10px] font-bold">Reviews</span>
        </Link>
        
        <Link 
          to="/profile"
          className={`flex flex-col items-center justify-center w-16 gap-1 transition-colors ${isActive('/profile') ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
        >
          <User strokeWidth={2.5} size={24} />
          <span className="text-[10px] font-bold">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;