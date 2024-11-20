import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Cigna Health</h3>
            <p className="text-sm">
              Providing quality healthcare solutions for over 50 years. Your health is our priority.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Find a Doctor</a></li>
              <li><a href="#" className="hover:text-white">View Plans</a></li>
              <li><a href="#" className="hover:text-white">Member Login</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Primary Care</a></li>
              <li><a href="#" className="hover:text-white">Specialist Care</a></li>
              <li><a href="#" className="hover:text-white">Mental Health</a></li>
              <li><a href="#" className="hover:text-white">Pharmacy Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>1-800-CIGNA24</li>
              <li>support@cignahealth.com</li>
              <li>900 Cottage Grove Rd,</li>
              <li>Bloomfield, CT 06002</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Cigna Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}