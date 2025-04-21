import React from 'react';
import { FaReact, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiOpencv, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaReact />, name: 'React', desc: 'JavaScript library for building user interfaces' },
  { icon: <SiFlutter />, name: 'Flutter', desc: 'Build natively compiled apps for mobile, web, and desktop' },
  { icon: <SiFirebase />, name: 'Firebase', desc: 'Backend platform for building web and mobile apps' },
  { icon: <SiOpencv />, name: 'OpenCV', desc: 'Computer vision and machine learning software library' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid UI development' },
  { icon: <FaPython />, name: 'Python', desc: 'Versatile language for web, AI, and data science' },
  { icon: <FaNodeJs />, name: 'Node.js', desc: 'JavaScript runtime built on Chrome’s V8 engine' },
  { icon: <FaGitAlt />, name: 'Git', desc: 'Version control system for tracking code changes' },
  { icon: <FaHtml5 />, name: 'HTML', desc: 'Standard markup language for creating web pages' },
  { icon: <FaCss3Alt />, name: 'CSS', desc: 'Style sheet language used for describing HTML presentation' },
];

const loopedSkills = [...skills, ...skills];

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="px-6 py-24 text-center overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-extrabold text-white mb-3">
        Tech <span className="text-blue-500">Stack</span>
      </h2>
      <br></br>

      {/* Row 1 */}
      <motion.div
        className="flex gap-8 mb-16 animate-scroll-x hover:[animation-play-state:paused]"
        style={{ animation: 'scrollX 25s linear infinite' }}
      >
        {loopedSkills.map((skill, index) => (
          <div
            key={`row1-${index}`}
            className="w-[300px] h-[140px] flex-shrink-0 p-5 rounded-2xl bg-white/5 backdrop-blur-sm flex flex-col justify-center shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-4 text-blue-400 text-4xl mb-2">
              {skill.icon}
              <span className="text-lg font-semibold text-white">{skill.name}</span>
            </div>
            <p className="text-sm text-gray-300">{skill.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div
        className="flex gap-8 animate-scroll-x-reverse hover:[animation-play-state:paused]"
        style={{ animation: 'scrollXReverse 28s linear infinite' }}
      >
        {loopedSkills.map((skill, index) => (
          <div
            key={`row2-${index}`}
            className="w-[300px] h-[140px] flex-shrink-0 p-5 rounded-2xl bg-white/5 backdrop-blur-sm flex flex-col justify-center shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-4 text-blue-400 text-4xl mb-2">
              {skill.icon}
              <span className="text-lg font-semibold text-white">{skill.name}</span>
            </div>
            <p className="text-sm text-gray-300">{skill.desc}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
