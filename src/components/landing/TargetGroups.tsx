'use client';

import { Users, HandHeart, Brain, Bell, Laptop, Sun } from 'lucide-react';

export default function TargetGroups() {
  const groups = [
    {
      icon: Users,
      title: "Elderly Care",
      description: "Protecting seniors from scams, simplifying daily tasks, and maintaining independence",
      color: "#FF96B7"
    },
    {
      icon: HandHeart,
      title: "Accessibility Solutions",
      description: "Empowering people with disabilities through adaptive technology and intuitive interfaces",
      color: "#9C4CBD"
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description: "Helping young people manage anxiety and stress with gentle, supportive tools",
      color: "#33BECC"
    },
    {
      icon: Bell,
      title: "Safety First",
      description: "Protecting vulnerable groups from digital threats and scams",
      color: "#D8AE48"
    },
    {
      icon: Laptop,
      title: "Digital Inclusion",
      description: "Making technology accessible for minority and underserved communities",
      color: "#CA80B1"
    },
    {
      icon: Sun,
      title: "Daily Assistance",
      description: "Simplifying everyday tasks with intelligent, easy-to-use tools",
      color: "#D16F52"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-cattleya-orchid text-center mb-12">Who We Help</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {groups.map((group, index) => {
          const Icon = group.icon;
          return (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              style={{ borderTop: `4px solid ${group.color}` }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${group.color}20` }}
              >
                <Icon className="w-6 h-6" style={{ color: group.color }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: group.color }}>
                {group.title}
              </h3>
              <p className="text-gray-600">{group.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}