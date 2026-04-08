"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 md:px-20 bg-[#0f172a]"
    >
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Skills & Tools
          </h2>
          <div className="w-16 h-1 bg-blue-500 mt-2 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Technologies and tools I use for development and software testing.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD TEMPLATE */}
          {[
            {
              title: "Development",
              items: [
                "JavaScript, PHP",
                "React, Next.js, Laravel",
                "HTML, CSS, Tailwind",
              ],
            },
            {
              title: "Database & Tools",
              items: [
                "MySQL, Firebase",
                "Git, GitHub",
              ],
            },
            {
              title: "Testing",
              items: [
                "Manual Testing",
                "Blackbox Testing",
                "API Testing (Postman)",
              ],
             
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl transition text-center bg-[#111827] border border-gray-700 hover:border-blue-500 hover:-translate-y-1">
              {/* TITLE */}
              <h3 className="font-semibold text-white mb-4">
                {section.title}
              </h3>

              {/* divider */}
              <div className="w-10 h-[1px] bg-gray-700 mx-auto mb-4" />

              {/* ITEMS */}
              <ul className="space-y-2 text-sm text-gray-400">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    {item.includes("Postman") ? (
                      <>
                        API Testing{" "}
                        <span className="text-blue-400">(Postman)</span>
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}