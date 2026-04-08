export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] py-8 px-6 md:px-20 border-t border-gray-800">
      
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        
        {/* LEFT */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Amarramitha. All rights reserved.
        </p>

        {/* RIGHT */}
        <div className="flex gap-6">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}