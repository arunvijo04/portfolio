import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    school: 'Rajagiri School of Engineering & Technology',
    degree: 'B.Tech in Computer Science',
    year: '2022 – 2026',
    details: 'CGPA: 8.89/10.0 | Hack Club, IEEE, NDLI'
  },
  {
    school: 'St Aloysius HSS, Elthuruth',
    degree: 'Higher Secondary Education',
    year: '2020 – 2022',
    details: 'Percentage: 97%'
  },
  {
    school: 'St Annes HS, Kottapuram',
    degree: 'SSLC',
    year: '2019 – 2020',
    details: 'Percentage: 98% | Little Kites, Bharat Scouts'
  }
];

const Education = () => {
  return (
    <div className="px-6 py-10  min-h-screen">
      <motion.h2
        className="text-4xl font-bold text-blue-300 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="relative border-l-4 border-blue-500 pl-6 space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="absolute left-[-1.1rem] top-6 w-5 h-5 bg-blue-400 rounded-full shadow-lg shadow-blue-400"></div>
            <h3 className="text-2xl font-semibold text-white mb-1">{edu.school}</h3>
            <p className="text-blue-300 text-sm">{edu.degree}</p>
            <p className="text-gray-400 text-sm italic">{edu.year}</p>
            <p className="text-gray-500 text-xs mt-2">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
