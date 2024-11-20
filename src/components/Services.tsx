import React from 'react';
import { Heart, Stethoscope, Pill, Brain, Users, Shield } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Preventive Care',
    description: 'Regular check-ups and screenings to keep you healthy'
  },
  {
    icon: Stethoscope,
    title: 'Specialist Care',
    description: 'Access to top specialists in every medical field'
  },
  {
    icon: Pill,
    title: 'Pharmacy Benefits',
    description: 'Affordable prescriptions and home delivery options'
  },
  {
    icon: Brain,
    title: 'Mental Health',
    description: '24/7 access to mental health professionals'
  },
  {
    icon: Users,
    title: 'Family Plans',
    description: 'Comprehensive coverage for the whole family'
  },
  {
    icon: Shield,
    title: 'Insurance Coverage',
    description: 'Flexible plans tailored to your needs'
  }
];

export default function Services() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Healthcare Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed to meet your needs at every stage of life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}