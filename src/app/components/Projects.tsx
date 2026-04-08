"use client";
import { motion } from "framer-motion";
import Image from "next/image";

/* ================= TYPE ================= */
type Project = {
  title: string;
  image: string;
  desc: string;
  tech: string;
  testing: string[];
  github: string;
  demo: string;
};

/* ================= DATA ================= */
const projects: Project[] = [
  {
    title: "Expert System (Final Project)",
    image: "/assets/project1.png",
    desc: "Web-based drug recommendation system using Dempster-Shafer method.",
    tech: "Flask, MySQL",
    testing: [
      "Manual testing using blackbox approach",
      "Created test cases for symptom input",
      "Validated recommendation output accuracy",
    ],
    github: "https://github.com/amarramitha/sispak",
    demo: "#",
  },
  {
    title: "Pricing Simulation System",
    image: "/assets/project2.png",
    desc: "Web-based pricing simulation system for sales decision support.",
    tech: "PHP, JavaScript, MySQL",
    testing: [
      "Tested pricing calculation logic",
      "Validated edge cases and user input",
    ],
    github: "https://github.com/amarramitha/skemabisnis",
    demo: "#",
  },
  {
    title: "Dearie Diary",
    image: "/assets/project1.jpg",
    desc: "Mobile diary app with authentication and cloud storage.",
    tech: "Flutter, Firebase",
    testing: [
      "Tested login functionality",
      "Verified data storage and retrieval",
    ],
    github: "https://github.com/amarramitha/deariediary",
    demo: "#",
  },
  {
    title: "KonserKita",
    image: "/assets/project4.png",
    desc: "Concert ticket booking website with category-based pricing.",
    tech: "Laravel, Tailwind",
    testing: [
      "Tested booking flow",
      "Validated ticket selection and payment logic",
    ],
    github: "https://github.com/amarramitha/KonserKita-ProyekPemweb",
    demo: "#",
  },
  {
    title: "E-Pinjam (Internship)",
    image: "/assets/project5.png",
    desc: "Vehicle booking system developed during internship.",
    tech: "CodeIgniter, Bootstrap",
    testing: [
      "Tested booking and approval flow",
      "Validated admin dashboard functionality",
    ],
    github: "#",
    demo: "https://sepak.diskominfo.jatengprov.go.id/sekrup/",
  },
  {
    title: "Pharmacy Stock",
    image: "/assets/project6.png",
    desc: "Inventory system for managing medicine stock.",
    tech: "Laravel, MySQL",
    testing: [
      "Tested CRUD operations",
      "Validated stock and expiration tracking",
    ],
    github: "https://github.com/amarramitha/pharmacy_stock",
    demo: "#",
  },
];

/* ================= COMPONENT ================= */
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-20 bg-[#0f172a]"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">
            Projects
          </h2>
          <div className="w-16 h-1 bg-blue-500 mt-2 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Selected projects showcasing development and testing experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-[#111827] rounded-xl border border-gray-700 hover:border-blue-500 transition p-5 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-400 mb-3">
                {project.desc}
              </p>

              {/* TECH */}
              <p className="text-xs text-gray-500 mb-3">
                <span className="text-gray-400">Tech:</span> {project.tech}
              </p>

              {/* TESTING */}
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-1">Testing:</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {project.testing.slice(0, 2).map((t, idx) => (
                    <li key={idx}>• {t}</li>
                  ))}
                </ul>
              </div>

              {/* BUTTONS */}
              <div className="mt-auto flex gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-xs border border-gray-600 px-3 py-1.5 rounded-md text-gray-300 hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                )}
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}