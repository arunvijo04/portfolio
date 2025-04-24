import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: 'SayChess',
    description: 'Voice-based chess game with hands-free gameplay using Python and Pygame.',
    image: '/assets/chess.jpeg', // Updated path
    live: '',
    code: 'https://github.com/arunvijo04/SayChess',
  },
  {
    title: 'SensEdge',
    description: 'Inclusive virtual classroom with sign language support, TTS/STT.',
    image: '/assets/learn.jpeg', // Updated path
    live: '',
    code: '#',
  },
  {
    title: 'Eventura',
    description: 'Event management platform with QR code check-in and calendar integration.',
    image: '/assets/party.jpeg', // Updated path
    live: 'https://eventura24.vercel.app/',
    code: 'https://github.com/arunvijo04/eventura',
  },
  {
    title: 'Postify',
    description: 'Interactive blogging platform built with React and Firebase.',
    image: '/assets/post.jpeg', // Updated path
    live: 'https://postify24.vercel.app/',
    code: 'https://github.com/arunvijo04/postify',
  },
  {
    title: 'Face Recognition Attendance',
    description: 'Attendance system using OpenCV and database integration.',
    image: '/assets/face.jpeg', // Updated path
    live: '',
    code: 'https://github.com/arunvijo04/face-recognition-attendance',
  },
];


const Projects = () => {
  return (
    <motion.div
      className="px-8 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
        <h2 className="text-4xl font-extrabold text-white text-center mb-18">
       A small selection <span className="text-blue-500">of my Recent Projects</span>
      </h2>
      <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className="w-full max-w-[500px]"
            key={index}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1e293bd0] backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300 border border-blue-400/20"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 object-cover w-full h-52"
                />
              )}
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <p className="text-gray-100 text-sm mb-3 font-semibold">
                <span className="text-white">Status :</span> Ongoing
              </p>
              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-blue-400 text-blue-300 rounded-lg hover:bg-blue-600/20 transition flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-blue-400 text-blue-300 rounded-lg hover:bg-blue-600/20 transition flex items-center gap-2"
                  >
                    <FaCode /> Code
                  </a>
                )}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
