import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
          alt="Healthcare professionals"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Health Journey <br />Starts Here
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Access world-class healthcare services, find the right plan, and take control of your well-being with our comprehensive health solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center">
              Find a Doctor <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              Explore Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}