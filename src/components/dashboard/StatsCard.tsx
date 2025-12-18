import React from 'react';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  iconBgColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon, iconBgColor }) => {
  return (
    <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-500/20 transition-all duration-300">
      <div className="flex items-center">
        <div className={`shrink-0 rounded-xl p-4 ${iconBgColor} bg-opacity-10 group-hover:bg-opacity-20 transition-colors duration-300`}>
          {React.cloneElement(icon as React.ReactElement, { 
            className: `h-6 w-6 ${(icon as React.ReactElement).props.className.replace('text-white', '')} ${iconBgColor.replace('bg-', 'text-')}` 
          })}
        </div>
        <div className="ml-5">
          <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
          <p className="text-2xl font-bold text-gray-900 tracking-tight">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
