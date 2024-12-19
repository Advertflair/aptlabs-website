import React from 'react';
import { Shield, Users, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Making Life 
            <span className="text-blue-600 dark:text-blue-400"> Easier </span>
            Through Technology
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
            Simple, accessible apps designed to help vulnerable populations navigate daily challenges with dignity and ease.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-6 py-2 shadow-sm">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-200">Protected</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-6 py-2 shadow-sm">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-200">Connected</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-6 py-2 shadow-sm">
              <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-200">Supportive</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}