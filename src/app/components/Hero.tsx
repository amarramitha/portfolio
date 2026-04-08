"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0f172a] flex items-center justify-center px-6 lg:px-20 overflow-hidden">
      
      {/* subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* glow accent */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-14">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-sm text-blue-400 mb-2 tracking-wider">
            HELLO WORLD 👋
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Amarramitha Poodja Thantawi
          </h1>

          {/* <h3 className="text-lg text-blue-400 font-semibold mb-6">
            QA Engineer • Web Developer
          </h3> */}

          <p className="text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build and test web applications with a focus on reliability and user experience. 
            Experienced in manual testing, API validation using Postman, and modern web development.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/Amarramitha_cv.pdf"
              download
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-60 sm:w-72 md:w-80 aspect-[3/4]"
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-700 shadow-lg">
            <Image
              src="/assets/amarra.png"
              alt="Amarra"
              fill
              className="object-cover"
            />
          </div>

          {/* subtle glow */}
          <div className="absolute inset-0 rounded-xl border border-blue-500 opacity-20 blur-sm" />
        </motion.div>

      </div>
    </section>
  );
}