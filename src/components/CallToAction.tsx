import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-blue-100 mb-8">
              Join millions of members who trust us with their healthcare needs. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Online
              </button>
            </div>
          </div>
          
          <div className="bg-blue-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Contact Form</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200 border border-blue-600 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200 border border-blue-600 focus:outline-none focus:border-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200 border border-blue-600 focus:outline-none focus:border-white"
              />
              <button className="w-full bg-white text-blue-700 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Request Callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}