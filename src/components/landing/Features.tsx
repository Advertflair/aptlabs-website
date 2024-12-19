'use client';

import React from 'react';
import { Shield, Heart, Users, Brain, Bell, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Simple by Design",
      items: [
        {
          icon: <Shield className="w-6 h-6" />,
          text: "One-click protection against common threats",
          color: "#D8AE48" // spicy-mustard
        },
        {
          icon: <Heart className="w-6 h-6" />,
          text: "Voice-controlled interfaces for easy access",
          color: "#FF96B7" // desert-flower
        },
        {
          icon: <Users className="w-6 h-6" />,
          text: "Community-driven support networks",
          color: "#9C4CBD" // cattleya-orchid
        }
      ]
    },
    {
      title: "Built for Everyone",
      items: [
        {
          icon: <Bell className="w-6 h-6" />,
          text: "Real-time alerts and protection",
          color: "#33BECC" // blue-curacao
        },
        {
          icon: <Brain className="w-6 h-6" />,
          text: "Intelligent assistance without complexity",
          color: "#CA80B1" // opera-mauve
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          text: "Works on any device, anywhere",
          color: "#D16F52" // arabesque
        }
      ]
    }
  ];

  return (
    <div className="bg-blue-curacao/5 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-cattleya-orchid text-center mb-12">
          Our Approach
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-arabesque mb-6">
                {section.title}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      {React.cloneElement(item.icon, {
                        style: { color: item.color }
                      })}
                    </div>
                    <span className="text-gray-700 mt-1">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}