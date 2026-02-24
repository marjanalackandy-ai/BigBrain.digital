import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-[#0B0F1A]/90 backdrop-blur-md border-white/5 py-4 shadow-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src="/logo.png"
            className="h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            alt="BigBrain.Digital"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "text-sm font-medium transition-colors hover:text-[#00FFA3]",
                  isActive ? "text-[#00FFA3]" : "text-gray-300"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#4A6CF7] rounded-full hover:bg-[#3251d4] transition-all shadow-[0_0_20px_-5px_rgba(74,108,247,0.5)] hover:shadow-[0_0_25px_-5px_rgba(74,108,247,0.8)] hover:scale-105 active:scale-95"
          >
            Get Free Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B0F1A] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      "text-lg font-medium transition-colors hover:text-[#00FFA3]",
                      isActive ? "text-[#00FFA3]" : "text-gray-300"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center px-5 py-3 text-base font-semibold text-white bg-[#4A6CF7] rounded-xl hover:bg-[#3251d4] transition-colors"
              >
                Get Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}