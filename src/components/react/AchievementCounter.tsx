import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Achievement {
  label: string;
  value: number;
  icon: string;
}

interface AchievementCounterProps {
  achievements: Achievement[];
}

const AchievementCounter: React.FC<AchievementCounterProps> = ({ achievements }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    if (inView && !counted) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 }
      }));
      setCounted(true);
    }
  }, [inView, controls, counted]);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center p-6 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg backdrop-blur-sm border border-violet-100 dark:border-violet-900"
        >
          <div className="text-4xl mb-2">{achievement.icon}</div>
          <motion.span
            className="text-3xl font-bold text-violet-600 dark:text-violet-400"
            initial={{ opacity: 0 }}
            animate={counted ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {counted ? achievement.value : 0}
          </motion.span>
          <p className="text-lg text-violet-700 dark:text-violet-300">{achievement.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementCounter;