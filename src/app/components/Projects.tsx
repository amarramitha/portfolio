"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Dearie Diary",
    image: "/portfolio/assets/project1.jpg",
    desc: "A mobile diary app that allows users to write, edit, and manage personal journal entries securely. Built using Flutter for Android.",
    link: "https://github.com/amarramitha/deariediary",
  },
  {
    title: "KonserKita",
    image: "/portfolio/assets/project3.jpg",
    desc: "A website for purchasing concert tickets online with category-based ticket options (e.g., VIP, Regular) and integrated online payment. Built using Laravel and Tailwind",
    link: "https://github.com/amarramitha/KonserKita-ProyekPemweb",
  },
  {
    title: "E-Pinjam - Intership",
    image: "/portfolio/assets/project2.jpg",
    desc: "A vehicle booking website developed during my internship at a local government office. I was responsible for developing the admin section of the booking module using CodeIgniter 3 and Bootstrap.",
    link: "https://sepak.diskominfo.jatengprov.go.id/sekrup/",
  },
  {
    title: "Pharmacy Stock",
    image: "/portfolio/assets/project4.jpg",
    desc: "A CRUD-based inventory system built with Laravel to help pharmacists manage medicine stock efficiently, including expiration tracking and stock monitoring.",
    link: "https://github.com/amarramitha/pharmacy_stock",
  },
  {
    title: "Personal Portfolio Website",
    image: "/portfolio/assets/project5.jpg",
    desc: "A personal portfolio website built with Next.js and Tailwind CSS, featuring animations and responsive sections to showcase my projects, skills, and documentation.",
    link: "https://amarramitha.github.io/portfolio/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-white py-20 px-6 md:px-20 overflow-hidden"
    >
  

      

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Judul Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ rotate: -1 }}
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-4xl font-bold text-pink-400 relative inline-block"
          >
            My Projects
            <span className="block w-20 h-1 bg-[#AFEEEE] mt-2 mx-auto rounded-full rotate-[-2deg]" />
          </motion.h2>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto text-sm md:text-base">
            A showcase of works I've built.
          </p>
        </div>

        {/* Kartu Project */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col border border-[#AFEEEE] hover:border-[#FBD2E0]"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-[#AFEEEE] font-medium hover:underline hover:text-pink-400 transition"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
