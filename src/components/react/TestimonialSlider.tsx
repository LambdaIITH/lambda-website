import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: [0, -100 * testimonials.length],
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
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialSlider;