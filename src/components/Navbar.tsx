import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`flex justify-between items-center py-4 sm:py-6 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 transition-all duration-300 ${scrolled ? 'bg-purple-900/70 backdrop-blur-sm' : ''} sticky top-0`}>
      <div className="flex items-center">
        <div className="logo-container animate-float flex items-center">
          <Link to="/" className="cursor-none">
            <img
              src="./logo.svg"
              alt="Bimal Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain mr-2"
            />

          </Link>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white p-1 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-white hover:text-purple-300 transition-colors hover:translate-y-[-2px] inline-block cursor-none">Home</Link>
        <Link to="/about" className="text-white hover:text-purple-300 transition-colors hover:translate-y-[-2px] inline-block cursor-none">About</Link>
        {/* <Link to="/lab" className="text-white hover:text-purple-300 transition-colors hover:translate-y-[-2px] inline-block cursor-none">Lab</Link> */}
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-purple-900/90 backdrop-blur-md py-4 px-4 md:hidden">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-white hover:text-purple-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-purple-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            {/* <Link
              to="/lab"
              className="text-white hover:text-purple-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Lab
            </Link> */}

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;