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
      <section className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-12 lg:px-16 relative" aria-label="Introduction">
        <div className={`max-w-3xl mx-auto md:mx-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

          {/* Name with semantic heading hierarchy */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Bimal Pandey</span>
          </h1>

          {/* Professional title with animation */}
          <div className="relative mb-8">
            <h2 className={`text-xl sm:text-2xl font-medium text-gray-300 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Full Stack Developer
            </h2>
            <div className={`h-0.5 w-16 bg-gradient-to-r from-purple-500 to-transparent mt-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 w-16' : 'opacity-0 w-0'}`}></div>
          </div>

          {/* Content with improved typography and semantics */}
          <p className={`text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            I build <span className="text-white font-medium">scalable web applications</span> with modern frameworks, solving complex problems and delivering enterprise solutions.
          </p>

          <p className={`text-base sm:text-lg text-gray-300 leading-relaxed mt-5 max-w-2xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Currently, I'm freelancing and contributing to a variety of projects, helping clients create seamless, high-performing digital experiences.
          </p>

          {/* Social links - using already imported icons */}
          <div className={`mt-8 flex items-center gap-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a target="_blank" href="https://github.com/bimal009" aria-label="GitHub Profile" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={22} />
            </a>
            <a target="_blank" href="https://x.com/CodeWithBun?t=2VYit3nsNRTPWs6nKqJpmw&s=09" aria-label="Twitter Profile" className="text-gray-400 hover:text-white transition-colors">
              <PiXLogo size={22} />
            </a>
            <a target="_blank" href="https://instagram.com/bunchoo_graphics11" aria-label="Instagram Profile" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;