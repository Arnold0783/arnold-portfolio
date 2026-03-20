import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg1 from "./assets/Arnold.png";
import heroImg2 from "./assets/Arnold2.png";
import heroImg3 from "./assets/Arnold3.png";
import heroImg4 from "./assets/Arnold4.png";
import heroImg5 from "./assets/Arnold5.png";
import heroImg6 from "./assets/Arnold6.png";
import diplomaCert from "./assets/diploma_certificate.png";
import diplomaTranscript from "./assets/diploma_transcript.png";
import cvFile from "./assets/Arnold_CV.pdf";

import { Folder, Code, Brain, User, Mail, FileText } from "lucide-react";
import { FaReact, FaNodeJs, FaPhp, FaPython, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaClock, FaUsers, FaComments, FaUserCheck, FaLightbulb, FaChalkboardTeacher } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { FaUserGraduate, FaBirthdayCake, FaGlobe, FaMale, FaBook, FaBriefcase } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaCertificate, FaJava } from "react-icons/fa6";
import { FaBrain, FaLaptopCode, FaServer, FaNetworkWired, FaMobileAlt } from "react-icons/fa";
/* ================= NAV ================= */
const navItems = [
  { name: "About", icon: <User size={24} /> },
  { name: "Skills", icon: <Code size={24} /> },
  { name: "Projects", icon: <Folder size={24} /> },
  { name: "Certificates", icon: <FaCertificate size={24} /> },
  { name: "Contact", icon: <Mail size={24} /> },
  { name: "CV", icon: <FileText size={24} /> },
];

/* Animated welcome messages */
const whatIDo = [
  { icon: <FaLaptopCode className="text-blue-400 w-5 h-5" />, text: "Full-Stack Development" },
  { icon: <FaBrain className="text-purple-400 w-5 h-5" />, text: "AI Systems" },
  { icon: <FaServer className="text-green-400 w-5 h-5" />, text: "IT Support" },
  { icon: <FaNetworkWired className="text-indigo-400 w-5 h-5" />, text: "Web Applications" },
  { icon: <FaMobileAlt className="text-teal-400 w-5 h-5" />, text: "Mobile Applications" },
];

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6];

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
  const interval = setInterval(() => setMessageIndex(prev => (prev + 1) % whatIDo.length), 4000);
  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setImageIndex((prev) => (prev + 1) % heroImages.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
  return (
    <div
  onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
  onTouchMove={(e) => {
    const touch = e.touches[0];
    setCursor({ x: touch.clientX, y: touch.clientY });
  }}
  className="relative bg-black text-white min-h-screen overflow-x-hidden font-sans px-4 md:px-0"
>
      {/* Background Glows */}
      <div className="absolute inset-0 animate-gradientBG opacity-50" />
      <motion.div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"
        animate={{ x: [0, 60, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"
        animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
       {/* Custom Glowing Cursor */}
<motion.div 
  className="fixed w-36 h-36 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-50"
  animate={{ x: cursor.x - 72, y: cursor.y - 72 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
/>

<div className="relative z-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-12 pt-10 gap-10">
      {/* Left Section: Name + Bio + Buttons */}
      <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4x1 md:text-6xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,0,255,0.5)] whitespace-nowrap text-center md:text-left"
        >
          ARNOLD NDLOVU
        </motion.h1>

        {/* Bio centered under name */}
        <div className="w-full max-w-md text-center">
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
    className="text-gray-400 text-lg md:text-xl leading-relaxed"
  >
    Passionate Software Engineer/Developer & IT enthusiast specializing in AI, full-stack web development, and digital solutions.
    Committed to building modern, efficient, and secure applications.
  </motion.p>
</div>

        {/* Buttons grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 justify-items-center">
          {navItems.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveSection(item.name)}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-1 w-24 sm:w-28 md:w-32 h-16 sm:h-20 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-sm font-bold uppercase text-white transition-all shadow-lg"
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right Section: Hero + Welcome Card */}
  <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-1/2 mt-20">
        {/* Hero Image */}
       <AnimatePresence mode="wait">
  <motion.div
  key={imageIndex}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={(e, info) => {
    if (info.offset.x < -50) {
      setImageIndex((prev) => (prev + 1) % heroImages.length);
    }
    if (info.offset.x > 50) {
      setImageIndex((prev) =>
        prev === 0 ? heroImages.length - 1 : prev - 1
      );
    }
  }}
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -40 }}
    transition={{ duration: 0.6 }}
    className="w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 flex items-center justify-center rounded-2xl border border-white/20 overflow-hidden bg-white/5 backdrop-blur-xl"
  >
    <img
      src={heroImages[imageIndex]}
      alt="Arnold"
      className="max-w-full max-h-full object-contain"
    />
  </motion.div>
</AnimatePresence>

        {/* Welcome Card */}
       <motion.div
  className="w-48 sm:w-56 md:w-72 p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20"
  whileHover={{ scale: 1.03 }}
>
  <h2 className="text-lg font-bold mb-2 uppercase text-center">What I Do</h2>
  <AnimatePresence mode="wait">
    <motion.div
      key={messageIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-gray-400 text-sm flex flex-col items-center gap-2"
    >
      <span className="mb-1">{whatIDo[messageIndex].icon}</span>
      <span>{whatIDo[messageIndex].text}</span>
    </motion.div>
  </AnimatePresence>
</motion.div>
      </div>
</div>
      {/* Slide Panel */}
      <AnimatePresence>
  {activeSection && (
    <motion.div
      className="fixed inset-0 z-40 flex justify-end bg-black/20 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full md:w-[60%] h-full p-6 rounded-l-3xl bg-black/60 backdrop-blur-xl border-l border-white/20 overflow-y-auto"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold uppercase text-white">{activeSection}</h2>
          <button
            onClick={() => setActiveSection(null)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
          >
            Close
          </button>
        </div>

        <div className="space-y-6">
          {activeSection === "Projects" && <ProjectsSection />}
          {activeSection === "Skills" && <SkillsSection />}
          {activeSection === "Certificates" && <AISection />}
          {activeSection === "About" && <AboutSection />}
          {activeSection === "Contact" && <ContactSection />}
          {activeSection === "CV" && <CVSection />}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
<footer className="w-full py-4 text-center text-gray-300 text-[10px] sticky bottom-0">
  Developed By Arnold Ndlovu ©2025
</footer>

    </div>
  );
}

/* ===== Sections ===== */
function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard title="Telemedicine Platform" description="Full-stack React & Node.js AI healthcare system" />
      <ProjectCard title="Portfolio Website" description="Modern React + Framer Motion portfolio site" />
      <ProjectCard title="Finance Dashboard" description="React + Tailwind + Chart.js dashboard project" />
      <ProjectCard title="E-commerce Store" description="Next.js + Stripe e-commerce system" />
    </div>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{description}</p>
    </div>
  );
}

function SkillsSection() {
  const skillsTop = [
    { icon: <FaReact size={28} className="text-blue-400" />, name: "React" },
    { icon: <FaNodeJs size={28} className="text-green-500" />, name: "Node.js" },
    { icon: <FaPhp size={28} className="text-indigo-400" />, name: "PHP" },
    { icon: <FaPython size={28} className="text-yellow-400" />, name: "Python" },
    { icon: <FaDocker size={28} className="text-blue-600" />, name: "Docker" },
    { icon: <FaJava size={28} className="text-red-400" />, name: "Java" },
    { icon: <SiJavascript size={28} className="text-yellow-300" />, name: "JavaScript" },
    { icon: <SiTypescript size={28} className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiTailwindcss size={28} className="text-teal-400" />, name: "TailwindCSS" },
    { icon: <SiNextdotjs size={28} className="text-white" />, name: "Next.js" },
  ];

  const skillsBottom = [
    { icon: <SiMysql size={28} className="text-blue-600" />, name: "MySQL" },
    { icon: <FaGitAlt size={28} className="text-orange-400" />, name: "Git" },
    { icon: <FaHtml5 size={28} className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt size={28} className="text-blue-500" />, name: "CSS3" },
    { icon: <FaClock size={28} className="text-green-400" />, name: "Time Management" },
    { icon: <FaUserCheck size={28} className="text-purple-400" />, name: "Punctuality" },
    { icon: <FaComments size={28} className="text-red-400" />, name: "Communication" },
    { icon: <FaUsers size={28} className="text-pink-400" />, name: "Teamwork" },
    { icon: <FaLightbulb size={28} className="text-yellow-400" />, name: "Problem Solving" },
    { icon: <FaChalkboardTeacher size={28} className="text-indigo-400" />, name: "Leadership" },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {skillsTop.map((skill, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20">
            {skill.icon}
            <span className="mt-2 text-white text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {skillsBottom.map((skill, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20">
            {skill.icon}
            <span className="mt-2 text-white text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AISection() {
  const certificates = [
    {
      title: "Diploma in Software Engineering",
      img: diplomaCert, // imported image
      description: "Official diploma certificate from TelOne Centre for Learning.",
    },
    {
      title: "Diploma Transcript",
      img: diplomaTranscript, // imported image
      description: "Official transcript showing academic modules and grades.",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-2 text-white">Certificates & Academic Documents</h3>
      <p className="text-gray-400 text-sm">
        My academic achievements in Software Engineering, including diploma certificate and transcript.
      </p>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {certificates.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.img}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-48 object-contain rounded-lg mb-2 border border-white/10 shadow-lg"
            />
            <h4 className="text-white font-semibold text-center">{cert.title}</h4>
            <p className="text-gray-400 text-xs text-center mt-1">{cert.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="space-y-6">

{/* Personal Info */}
      <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <FaBirthdayCake className="text-red-400 w-5 h-5" />
          <span className="text-white text-sm">Date of Birth: 13/05/2003</span>
        </div>
        <div className="flex items-center gap-3">
          <FaUserCheck className="text-green-400 w-5 h-5" />
          <span className="text-white text-sm">Marital Status: Single</span>
        </div>
        <div className="flex items-center gap-3">
          <FaGlobe className="text-blue-400 w-5 h-5" />
          <span className="text-white text-sm">Nationality: Zimbabwean</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMale className="text-yellow-400 w-5 h-5" />
          <span className="text-white text-sm">Gender: Male</span>
        </div>
      </div>

      {/* Summary */}
      <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20">
        <div className="flex items-center gap-2 mb-2">
          <FaUserGraduate className="text-green-400 w-5 h-5" />
          <h3 className="text-lg font-bold text-white">Summary</h3>
        </div>
        <p className="text-gray-400 text-sm">
          Motivated Software Engineer holding a Diploma in Software Engineering from TelOne Centre for Learning.
          I have a strong foundation in programming, databases, operating systems, cybersecurity, and enterprise application development.
          Passionate about IT and software development, I enjoy creating innovative solutions, learning new technologies,
          and contributing to impactful digital projects, particularly in web and AI systems.
        </p>
      </div>

      {/* Education */}
      <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20">
        <div className="flex items-center gap-2 mb-2">
          <FaBook className="text-yellow-400 w-5 h-5" />
          <h3 className="text-lg font-bold text-white">Education</h3>
        </div>
        <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
          <li>
            <strong>TelOne Centre For Learning</strong> – Diploma in Software Engineering (July 2022 - November 2025)
          </li>
          <li>
            <strong>St Columba's High School Bulawayo</strong> – Ordinary Level & National Foundation Certificate in Computer Operations and Packages (2019)
          </li>
        </ul>
        <p className="text-gray-400 text-sm mt-2">
          <strong>Key Modules:</strong> Programming (C, Java, C#), Software Engineering, Data Structures & Algorithms, Database Concepts, Operating Systems, Cyber Security, Enterprise Application Development, Project Management, Software Quality Management, Research Methods, Software Development Project.
        </p>
      </div>

      {/* Experience */}
      <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20">
        <div className="flex items-center gap-2 mb-2">
          <FaBriefcase className="text-purple-400 w-5 h-5" />
          <h3 className="text-lg font-bold text-white">Experience</h3>
        </div>
        <ul className="text-gray-400 text-sm list-disc list-inside space-y-2">
          <li>
            <strong>Prime Seasons T/A Golden Delights – IT Support Intern (Feb 2025 - Nov 2025)</strong>
            <ul className="list-disc list-inside ml-5 text-gray-400 text-sm space-y-1">
              <li>Captured, verified, and updated business data accurately into digital systems and spreadsheets.</li>
              <li>Provided IT support, including troubleshooting computer, printer, and software issues.</li>
              <li>Maintained electronic records while ensuring data confidentiality and accuracy.</li>
              <li>Assisted staff with system usage, data retrieval, and routine technical queries.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="space-y-4">
      {/* Email */}
      <a 
        href="mailto:arnoldndlovy@gmail.com" 
        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-colors"
      >
        <FaEnvelope className="text-red-400 w-5 h-5" />
        <span className="text-white text-sm">arnoldndlovy@gmail.com</span>
      </a>

      {/* Phone */}
      <a 
        href="tel:+263781690278" 
        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-colors"
      >
        <FaPhone className="text-green-400 w-5 h-5" />
        <span className="text-white text-sm">+263 78 169 0278</span>
      </a>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/263781690278" 
        target="_blank" 
        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-colors"
      >
        <FaWhatsapp className="text-green-500 w-5 h-5" />
        <span className="text-white text-sm">Chat on WhatsApp</span>
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/arnold-ndlovu-6b36103a6" 
        target="_blank" 
        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-colors"
      >
        <FaLinkedin className="text-blue-400 w-5 h-5" />
        <span className="text-white text-sm">LinkedIn Profile</span>
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/Arnold0783" 
        target="_blank" 
        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-colors"
      >
        <FaGithub className="text-gray-400 w-5 h-5" />
        <span className="text-white text-sm">GitHub Profile</span>
      </a>
    </div>
  );
}

function CVSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-gray-400 text-sm text-center">
        Click the button below to open or download my CV.
      </p>
      <a
        href={cvFile}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold text-sm shadow-lg transition-all"
      >
        Open CV
      </a>
    </div>
  );
}