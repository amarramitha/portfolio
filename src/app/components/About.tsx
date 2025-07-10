"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="relative py-20 px-6 md:px-20 bg-white overflow-hidden"
      id="about"
    >
     

    
    
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
     
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ rotate: 1, scale: 1.03 }}
        className="relative w-full h-auto"
>
        <Image
          src="/portfolio/assets/amarra.jpg"
          alt="About Me"
          width={600}
          height={400}
          className="rounded-xl shadow-xl"
        />
        
        <div className="absolute top-[-20px] left-[-20px] w-full h-full border-4 border-[#AFEEEE] z-[-1] rounded-xl" />
       
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-yellow-200 rounded-full opacity-20 z-[-2]" />

        <svg
          className="absolute bottom-[-10px] left-[-10px] w-20 h-20 z-[-2]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10,80 Q30,60 60,70 Q90,80 100,60"
            stroke="#FFD54F"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
        </motion.div>


     
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700"
        >
        
          <div className="text-center mb-12">
          <motion.h2
            initial={{ rotate: -1 }}
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-4xl font-bold text-pink-400 relative inline-block"
          >
            About Me
            <span className="block w-20 h-1 bg-[#AFEEEE] mt-2 mx-auto rounded-full rotate-[-2deg]" />
          </motion.h2>
          
        </div>

          <p className="text-base leading-relaxed mb-4">
            Hi! I'm{" "}
            <span className="font-semibold text-gray-900 hover:text-pastelBlue transition duration-200">
              Amarra
            </span>
            , an Informatics student passionate about creating responsive and user-friendly websites. My focus is on front-end development with an eye for design and detail.
          </p>
          <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2">
          <li>💻 Skilled in HTML, CSS, JavaScript, Laravel, and Tailwind CSS</li>
          <li>⚙️ Comfortable working on both front-end and back-end tasks</li>
          <li>🚀 Always eager to learn and improve as a developer</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
