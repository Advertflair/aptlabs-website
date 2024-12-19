'use client';

import { Shield } from 'lucide-react';
import ThemeToggle from '@/components/theme/ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-light-bg-primary dark:bg-dark-bg-primary">
      <nav className="bg-blue-curacao text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8" />
            <span className="text-2xl font-bold">aptlabs.ai</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="px-4 py-2 hover:opacity-80">Solutions</button>
            <button className="px-4 py-2 hover:opacity-80">About</button>
            <button className="px-4 py-2 bg-spicy-mustard rounded-lg hover:opacity-80">
              Join Us
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}