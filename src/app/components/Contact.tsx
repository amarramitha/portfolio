"use client";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-20 bg-[#0f172a]"
    >
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-white mb-3">
          Let’s Connect
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full" />

        {/* DESC */}
        <p className="text-gray-400 text-sm md:text-base mb-10 max-w-xl mx-auto">
          Open for QA Engineer & Web Developer opportunities. Feel free to reach out.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:amarra.mitha@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-500 transition"
          >
            <FiMail />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/amarramitha-poodja-thantawi-98395b2ab/"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-500 transition"
          >
            <FiLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/amarramitha"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-500 transition"
          >
            <FiGithub />
            GitHub
          </a>

        </div>
      </motion.div>
    </section>
  );
}