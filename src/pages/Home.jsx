import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom'; // This is the correct path when the image is in the public folder.


const roles = ['Full Stack Developer.', 'UI Designer.'];

const Home = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 200], [-30, 30]);
  const rotateX = useTransform(y, [-200, 200], [30, -30]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setText('');
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000); // Wait before switching roles
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  const handleDragEnd = () => {
    animate(x, 0, { type: 'spring', stiffness: 150, damping: 15 });
    animate(y, 0, { type: 'spring', stiffness: 150, damping: 15 });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-white relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:36px_36px] opacity-10 pointer-events-none z-0" />
      <div className="text-center z-10">
        <p className="text-white mt-4 text-3xl md:text-4xl">Hey there, I'm</p>
        <h1 className="text-5xl md:text-7xl lg:text-7xl text-blue-500 mt-6 font-extrabold">
          Arun Vijo Tharakan
        </h1>
        <p className="text-gray-400 mt-5 text-3xl md:text-3xl h-10 animate-pulse">
          {text}<span className="blinking-cursor">|</span>
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center mt-8 px-6 py-3 border border-blue-500 text-white rounded-full hover:bg-blue-500 hover:text-black transition duration-300"
        >
          See my work <span className="ml-2">↗</span>
        </Link>
      </div>
    </section>
  );
};

export default Home;
