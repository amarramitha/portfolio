export default function Footer() {
    return (
      <footer className="bg-pastelPink text-gray-700 text-sm py-6 px-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Amarramitha. All rights reserved.
          </p>
  
          <div className="flex gap-4 text-pastelBlue font-medium">
            <a href="#about" className="hover:underline transition">
              About
            </a>
            <a href="#skills" className="hover:underline transition">
              Skills
            </a>
            <a href="#projects" className="hover:underline transition">
              Projects
            </a>
            <a href="#contact" className="hover:underline transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    );
  }
  