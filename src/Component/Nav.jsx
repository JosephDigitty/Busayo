import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { name: "About Me", href: "about" },
    { name: "Book", href: "book" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
    { name: "gallery", href: "gallery" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black  backdrop-blur-lg border-b border-red-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a href="/" className="text-white md:text-2xl text-2xl font-semibold tracking-wide">
          Busayo <span className="text-red-500">Davies</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex ml-[620px] space-x-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-300 hover:text-red-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-white md:opacity-0 focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className={`md:hidden bg-black border-t border-red-900 backdrop-blur-sm transform transition-all duration-500 ease-in-out origin-top ${
          open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"
        } overflow-hidden`}
      >
          <ul className="flex flex-col items-center py-4 space-y-4 ">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
