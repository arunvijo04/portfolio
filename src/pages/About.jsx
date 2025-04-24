import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import ThreeIDCard from '../components/ThreeIDCard'

const About = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateY = useTransform(x, [-200, 200], [-30, 30]);
  const rotateX = useTransform(y, [-200, 200], [30, -30]);
  const stringRotate = useTransform(x, [-300, 300], [-15, 15]);

  const [flipped, setFlipped] = useState(false);

  const handleDragEnd = () => {
    const threshold = 100;
    if (y.get() > threshold) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }

    animate(x, 0, { type: 'spring', stiffness: 200, damping: 15 });
    animate(y, 0, { type: 'spring', stiffness: 200, damping: 15 });
  };

  return (
    <motion.div
      className="w-full min-h-screen px-4 py-10 flex flex-col md:flex-row items-center justify-center gap-60"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ID Card Section */}
      <div className="p-6 rounded-2xl border border-blue-500 shadow-[0_0_50px_rgba(0,123,255,0.4)] bg-black">

  <ThreeIDCard />
</div>

      {/* About Text Section */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl font-bold text-blue-300 mb-4">About Me</h1>
        <p className="text-gray-300 leading-relaxed">
          Passionate and self-driven B.Tech Computer Science student with hands-on experience in full-stack development, AI/ML,
          and innovative real-world projects. Actively contributing to tech communities and startups, I aim to bring creativity,
          efficiency, and impact to every line of code.
        </p>
        <p className="mt-4 text-gray-400">
          Currently pursuing my degree at Rajagiri School of Engineering & Technology, Kochi.
          I thrive on solving meaningful problems, learning continuously, and building technologies that make a difference.
        </p>
      </div>
    </motion.div>
  );
};

export default About;