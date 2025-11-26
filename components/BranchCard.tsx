import React from 'react';
import { MapPin, Phone, ExternalLink, Award } from 'lucide-react';
import { Branch } from '../types';

interface BranchCardProps {
  branch: Branch;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={branch.imageUrl} 
          alt={branch.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        {branch.isDirectManaged && (
          <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Award className="w-3 h-3" />
            직영점
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
            <a href={branch.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {branch.name}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
            </a>
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2">
            {branch.description}
          </p>
        </div>

        <div className="space-y-2 mb-6 flex-1">
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <MapPin className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
            <span>{branch.address}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Phone className="w-4 h-4 text-green-500 shrink-0" />
            <a href={`tel:${branch.phone}`} className="hover:text-green-600 underline-offset-2 hover:underline">
              {branch.phone}
            </a>
          </div>
        </div>

        <a 
          href={branch.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`
            w-full py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors
            ${branch.isDirectManaged 
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200' 
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}
          `}
        >
          {branch.name} 홈페이지 방문
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default BranchCard;