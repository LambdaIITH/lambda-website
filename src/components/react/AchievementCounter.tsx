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
          className="text-center"
        >
          <div className="text-4xl mb-2">{achievement.icon}</div>
          <motion.span
            className="text-3xl font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={counted ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {counted ? achievement.value : 0}
          </motion.span>
          <p className="text-lg text-gray-600 dark:text-gray-400">{achievement.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementCounter;