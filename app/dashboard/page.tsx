// app/page.tsx
import React from "react";

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Allwave AP System
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        This is your internal Accounts Payable system. Start by connecting your 
        Dwolla integration and managing payments efficiently.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
        Get Started
      </button>
    </main>
  );
};

export default HomePage;