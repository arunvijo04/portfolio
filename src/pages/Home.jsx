// === Home.jsx ===
import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';

const Home = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 200], [-30, 30]);
  const rotateX = useTransform(y, [-200, 200], [30, -30]);

  const handleDragEnd = () => {
    animate(x, 0, { type: 'spring', stiffness: 150, damping: 15 });
    animate(y, 0, { type: 'spring', stiffness: 150, damping: 15 });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:36px_36px] opacity-10 pointer-events-none z-0" />

      <div className="text-center z-10">
      <p className="text-white mt-4 text-4xl">Hey there, I'm<br></br></p>
        <h1 className="text-8xl text-blue-500 mt-3 md:text-6xl font-extrabold"> Arun Vijo Tharakan
        </h1>
        <p className="text-gray-400 mt-5 text-3xl">Full Stack Developer.</p>
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