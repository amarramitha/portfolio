"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-20 bg-[#0f172a] overflow-hidden"
    >
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* glow */}
      <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-blue-500 opacity-20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT (TITLE + SHORT DESC) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white leading-tight">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-500 mt-4 rounded-full" />

          <p className="mt-6 text-gray-300 leading-relaxed max-w-md">
            Hi, I'm{" "}
            <span className="text-white font-semibold">
              Amarramitha
            </span>, an Informatics graduate focused on building reliable systems 
            and ensuring quality through structured testing.
          </p>
        </motion.div>

        {/* RIGHT (DETAIL + LIST) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-300"
        >
          <p className="leading-relaxed mb-6">
            Experienced in manual testing, blackbox testing, and API testing 
            using Postman, alongside developing modern web applications.
          </p>

          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <span>✔️</span>
              <p>Web development (CodeIgniter3, Laravel, Flask)</p>
            </div>

            <div className="flex items-start gap-3">
              <span>✔️</span>
              <p>Software testing (manual testing & API testing)</p>
            </div>

            <div className="flex items-start gap-3">
              <span>✔️</span>
              <p>Test scenario creation & system validation</p>
            </div>

            <div className="flex items-start gap-3">
              <span>✔️</span>
              <p>Detail-oriented and problem-solving mindset</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}