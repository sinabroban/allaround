import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { HQ_URL } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              세심귀뜸봉 사업단
            </span>
          </div>
          
          <a 
            href={HQ_URL}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">본사 홈페이지</span>
            <span className="sm:hidden">본사</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;