import React from 'react';
import { motion } from 'framer-motion';

const techStacks = [
  { name: 'React', icon: '⚛' },
  { name: 'Node.js', icon: '｡🇯‌🇸‌' },
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Docker', icon: '🐳' },
  { name: 'GraphQL', icon: '◼️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Flutter', icon: '💙' },
];

const TechStackSlider: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-primary">Our Tech Stack</h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...techStacks, ...techStacks].map((tech, index) => (
            <div key={index} className="flex-shrink-0 w-48 mx-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105 transform-gpu">
                <span className="text-4xl mb-2">{tech.icon}</span>
                <span className="text-lg font-semibold text-center">{tech.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackSlider;


