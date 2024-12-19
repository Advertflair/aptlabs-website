'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-cattleya-orchid to-blue-curacao rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Join Our Mission
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-white/90">
          Help us create a world where technology serves everyone, especially those who need it most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="group px-6 py-3 bg-spicy-mustard rounded-lg hover:bg-arabesque transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Early Access</span>
          </button>
          <button 
            className="px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-cattleya-orchid transition-colors"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;