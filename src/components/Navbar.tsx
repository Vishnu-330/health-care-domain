import React from 'react';
import { Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">Cigna Health</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-700">Find a Doctor</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Insurance Plans</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Health & Wellness</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Member Resources</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="hidden md:flex items-center space-x-2 text-blue-700 hover:text-blue-800">
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}