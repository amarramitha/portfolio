"use client";
import { motion } from "framer-motion";
import React from "react";

import FlutterIcon from "@/assets/icons/flutter.svg";
import GitIcon from "@/assets/icons/git.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html.svg";
import JsIcon from "@/assets/icons/javascript.svg";
import LaravelIcon from "@/assets/icons/laravel.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import PhpIcon from "@/assets/icons/php.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import BootstrapIcon from "@/assets/icons/bootstrap.svg";
import FirebaaseIcon from "@/assets/icons/firebase.svg";

const allSkills = [
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js", icon: <NextjsIcon /> },
  { name: "JavaScript", icon: <JsIcon /> },
  { name: "HTML", icon: <HtmlIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "Bootstrap", icon: <BootstrapIcon /> },
  { name: "Flutter", icon: <FlutterIcon /> },
  { name: "Laravel", icon: <LaravelIcon /> },
  { name: "PHP", icon: <PhpIcon /> },
  { name: "Git", icon: <GitIcon /> },
  { name: "GitHub", icon: <GitHubIcon /> },
  { name: "Firebase", icon: <FirebaaseIcon /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-16 px-4 sm:px-6 md:px-20 bg-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <div className="text-center mb-10">
          <motion.h2
            initial={{ rotate: -1 }}
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-3xl font-bold text-pink-400 relative inline-block"
          >
            My Skills
            <span className="block w-20 h-1 bg-[#AFEEEE] mt-2 mx-auto rounded-full rotate-[-2deg]" />
          </motion.h2>
          <p className="text-gray-700 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Tools and technologies I use to build responsive, modern, and dynamic websites.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#FBD2E0] hover:bg-[#AFEEEE] transition-all duration-300 rounded-xl shadow-sm h-[140px] flex flex-col items-center justify-center p-4 text-center hover:scale-105 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-10 h-10 mb-2">
                {React.cloneElement(skill.icon, {
                  className: "w-full h-full",
                })}
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
