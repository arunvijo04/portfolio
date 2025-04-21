import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

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
      <div className="p-6 rounded-2xl border border-blue-500 shadow-[0_0_50px_rgba(0,123,255,0.4)]">
        <div className="flex flex-col items-center justify-start">
          {/* Lanyard String */}
          <motion.div
            style={{ rotate: stringRotate }}
            className="h-20 w-1 bg-white relative flex items-center justify-center"
          >
          </motion.div>

          {/* Hook */}
          <div className="w-6 h-6 rounded-full bg-black relative z-10 -mt-1">
            <div className="w-3 h-3 border-2 border-white rounded-full absolute top-1 left-1" />
          </div>

          {/* Card */}
          <motion.div
            drag
            dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
            onDragEnd={handleDragEnd}
            className="relative w-64 h-96 preserve-3d cursor-grab active:cursor-grabbing origin-top"
            style={{ x, y, rotateX, rotateY: flipped ? 180 : rotateY }}
          >
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-[#1a1a2e] text-white rounded-xl shadow-xl flex flex-col items-center justify-end p-4 overflow-hidden">
              <img
                src="src/assets/profile.png"
                alt="Front"
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="mt-2 text-center">
                <p className="font-bold text-lg">Arun Vijo</p>
                <p className="text-pink-400 mt-1">07.07.2004</p>
                <div className="bg-black text-pink-500 w-10 h-10 rounded-md mt-2 flex items-center justify-center font-bold">
                  06
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rotateY-180 bg-[#25253c] text-white rounded-xl shadow-xl flex flex-col items-center justify-end p-4 overflow-hidden">
              <img
                src="src/assets/profile.png"
                alt="Back"
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="text-center mt-4">
                <p className="text-lg font-semibold">Tech Stack</p>
                <ul className="mt-2 text-sm text-gray-300">
                  <li>• TypeScript</li>
                  <li>• React</li>
                  <li>• TailwindCSS</li>
                  <li>• Android</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
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