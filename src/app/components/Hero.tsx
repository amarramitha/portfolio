"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-20 overflow-hidden">
 
  <div className="absolute top-0 -left-32 w-64 h-64 sm:w-80 sm:h-80 bg-[#FDE68A] opacity-20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 -right-32 w-64 h-64 sm:w-80 sm:h-80 bg-[#AFEEEE] opacity-20 rounded-full blur-3xl" />


  <div className="relative z-10 w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
 
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 text-center lg:text-left"
    >
      <h2 className="text-base sm:text-lg text-gray-700 font-medium mb-2 tracking-wide">
        Hello, I'm
      </h2>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        Amarramitha Poodja Thantawi
      </h1>
      <h3 className="text-sm sm:text-base md:text-xl text-[#AFEEEE] font-semibold mb-6">
        Web Developer Enthusiast
      </h3>

      <p className="text-gray-600 mb-8 max-w-md sm:max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
        Informatics student passionate about web development. Skilled in Laravel, JavaScript,
        and Tailwind CSS. Focused on building responsive and user-friendly web solutions.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <a
          href="/portfolio/Amarramitha_cv.pdf"
          download
          className="bg-[#FBD2E0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-400 transition-all shadow-md text-center w-full sm:w-auto"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:shadow-md transition-all w-full sm:w-auto"
        >
          Contact Me
        </a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, rotate: 1 }}
      className="relative w-52 sm:w-64 md:w-72 lg:w-[350px] aspect-[3/4] mx-auto lg:mx-0 z-10"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/assets/amarra.jpg"
          alt="Amarra Mitha"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

 
      <div className="absolute top-4 left-4 w-full h-full border-4 border-[#AFEEEE] rounded-2xl z-[-1] rotate-1 pointer-events-none" />
    </motion.div>
  </div>

 
  <div className="hidden lg:block absolute top-0 right-0 h-full w-64 bg-[#FBD2E0] opacity-90 z-0" />
</section>

  );
}
