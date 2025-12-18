import React from 'react';

interface DashboardWelcomeProps {
  userName: string;
  onRefresh: () => void;
}

const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ userName, onRefresh }) => {
  return (
    <div className="mb-8 flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">Welcome back, {userName}!</h2>
        <p className="mt-2 text-gray-600">Here's an overview of your account and products.</p>
      </div>
      <button 
        onClick={onRefresh}
        className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
      >
        Refresh Products
      </button>
    </div>
  );
};

export default DashboardWelcome;
