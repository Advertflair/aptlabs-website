'use client';

import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <span className="font-bold">aptlabs.ai</span>
          </div>
          <div className="text-sm text-gray-400">
            Making technology accessible for everyone
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;