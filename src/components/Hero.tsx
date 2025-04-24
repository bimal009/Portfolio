import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-12 lg:px-16 relative">
        <div className={`max-w-3xl mx-auto md:mx-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

          {/* Name highlight with better styling */}

          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Bimal Pandey</span>
          </h1>

          {/* Professional title with animation */}
          <div className="relative mb-6">
            <h2 className={`text-xl sm:text-2xl font-medium text-gray-300 transition-all duration-700 delay-[200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Full Stack Developer <span className="text-gray-400">from Butwal, Nepal</span>
            </h2>
            <div className={`h-0.5 w-16 bg-gradient-to-r from-purple-500 to-transparent mt-3 transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 w-16' : 'opacity-0 w-0'}`}></div>
          </div>

          {/* Content with better spacing and typography */}
          <p className={`text-base sm:text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            I build <span className="text-white font-medium">scalable web applications</span> with modern frameworks, solving complex problems and delivering enterprise solutions.
          </p>

          <p className={`text-base sm:text-lg text-gray-300 leading-relaxed mt-4 transition-all duration-700 delay-[800ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Currently, I’m freelancing and contributing to a variety of projects, helping clients create seamless, high-performing digital experiences
          </p>

          {/* CTA buttons */}

        </div>
      </div>
    </>
  );
};

export default Hero;