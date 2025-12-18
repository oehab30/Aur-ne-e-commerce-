import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from "@/hooks/products/useproduct";
import DashboardStats from '@/components/dashboard/DashboardStats';
import DashboardProductGrid from '@/components/dashboard/DashboardProductGrid';
import DashboardWelcome from '@/components/dashboard/DashboardWelcome';
import RecentActivity from '@/components/dashboard/RecentActivity';

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = "User"; // Placeholder, normally from context or auth

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const { isFetching, error, data, refetch } = useProducts();

  if (isFetching) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">Error loading products</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardWelcome userName={userName} onRefresh={() => refetch()} />

        <DashboardStats />

        <DashboardProductGrid products={data} />

        <RecentActivity />
      </main>
    </div>
  );
};

export default Dashboard;
