import { texts } from "../config/texts";
import logo from "../assets/logo.svg";
import { useState } from "react";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 z-20 relative">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center relative z-40 -mt-2">
        <button
          className="text-white hover:text-blue-300 transition-colors duration-200"
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-auto">
        <a
          href="#home"
          className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
        >
          {texts.nav.home}
        </a>
        <a
          href="#skills"
          className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
        >
          {texts.nav.skills}
        </a>
        <a
          href="#home"
          className="flex items-center transition-transform hover:scale-105"
          aria-label="Go to home page"
        >
          <img src={logo} alt="Aslı Şahin Logo" className="h-12 w-auto" />
        </a>
        <a
          href="#projects"
          className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
        >
          {texts.nav.projects}
        </a>
        <a
          href="#contact"
          className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
        >
          {texts.nav.contact}
        </a>
      </div>

      {/* Empty div for balance */}
      <div className="md:hidden w-6"></div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30">
          <div className="fixed top-0 left-0 right-0 bg-gradient-to-b from-[#030637] from-0% via-[#030637] via-85% to-transparent backdrop-blur-sm">
            <div className="pt-16"></div>
            <div className="px-8 pb-16">
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="#home"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-medium text-base py-2"
                  onClick={closeMobileMenu}
                >
                  {texts.nav.home}
                </a>
                <a
                  href="#skills"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-medium text-base py-2"
                  onClick={closeMobileMenu}
                >
                  {texts.nav.skills}
                </a>
                <a
                  href="#projects"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-medium text-base py-2"
                  onClick={closeMobileMenu}
                >
                  {texts.nav.projects}
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-medium text-base py-2"
                  onClick={closeMobileMenu}
                >
                  {texts.nav.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
