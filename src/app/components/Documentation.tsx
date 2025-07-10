"use client";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";
import Image from "next/image";

const docs = [
  {
    title: "Internship Certificate",
    date: "July 2024",
    image: "/portfolio/assets/magang.jpg",
  },
  {
    title: "Independence Day Event – Internship Experience",
    date: "August 2024",
    image: "/assets/event.jpg",
  },
  {
    title: "Rector Cup PKM Competition",
    date: "September 2024",
    image: "/assets/pkm.jpg",
  },
  {
    title: "Sharing & Learning with HIMA ILKOM UNNES",
    date: "August 2023",
    image: "/assets/stuban.jpg",
  },
  {
    title: "Festival Teknologi Jawa Tengah – HIMA Delegation",
    date: "September 2023",
    image: "/assets/permi.jpg",
  },
  {
    title: "Event Committee – Informatics Championship",
    date: "Oktober 2023",
    image: "/assets/ic.jpg",
  }
  
];

export default function Documentation() {
  return (
    <section
      id="documentation"
      className="relative bg-white py-16 px-4 sm:px-6 md:px-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Title */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ rotate: -1 }}
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-3xl font-bold text-pink-400 relative inline-block"
          >
            My Documentation
            <span className="block w-20 h-1 bg-[#AFEEEE] mt-2 mx-auto rounded-full rotate-[-2deg]" />
          </motion.h2>
          <p className="text-gray-700 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Internship, organization, and event highlights.
          </p>
        </div>

        {/* Grid Foto Interaktif */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {docs.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
              className="bg-white rounded-lg border border-[#AFEEEE] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-44 sm:h-48 md:h-56">
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold text-gray-800">{doc.title}</h3>
                <p className="text-xs text-gray-500">{doc.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
