"use client";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#FBD2E0] py-20 px-6 md:px-20 overflow-hidden"
    >
      {/* Background Dekoratif */}
      <div className="absolute top-[-80px] -left-20 w-96 h-96 bg-[#AFEEEE] opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-80px] -right-20 w-96 h-96 bg-[#FFFACD] opacity-30 rounded-full blur-3xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <motion.h2
          initial={{ rotate: -1 }}
          animate={{ rotate: [0, 1, -1, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="text-4xl font-bold text-pink-600 mb-4"
        >
          Contact Me
          <span className="block w-16 h-1 bg-[#AFEEEE] mt-2 mx-auto rounded-full rotate-[-2deg]" />
        </motion.h2>

        <p className="text-gray-700 text-sm md:text-base mb-10 max-w-xl mx-auto">
          Feel free to reach out for collaborations, projects, or just to say hi!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {[
            {
              icon: <FiMail className="text-2xl text-pink-600" />,
              text: "amarra.mitha@gmail.com",
              link: "mailto:amarra.mitha@gmail.com",
            },
            {
              icon: <FiLinkedin className="text-2xl text-blue-500" />,
              text: "LinkedIn",
              link: "https://www.linkedin.com/in/amarramitha-poodja-thantawi-98395b2ab/",
            },
            {
              icon: <FiGithub className="text-2xl text-gray-800" />,
              text: "GitHub",
              link: "https://github.com/amarramitha",
            },
            {
              icon: <FiInstagram className="text-2xl text-pink-500" />,
              text: "Instagram",
              link: "https://instagram.com/xx.amarra", 
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-[#FBD2E0]"
            >
              {item.icon}
              <span className="text-sm font-medium text-gray-800 hover:text-pink-500">
                {item.text}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
