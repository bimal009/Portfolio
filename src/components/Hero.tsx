import { useRef, useEffect } from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const decoratorRef = useRef<HTMLDivElement>(null);
  const paragraphOneRef = useRef<HTMLParagraphElement>(null);
  const paragraphTwoRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const decorRef1 = useRef<HTMLDivElement>(null);
  const decorRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a timeline for smoother sequence animation
    const tl = gsap.timeline({ 
      defaults: { 
        ease: "power3.out",
        duration: 0.8
      } 
    });
    
    // Animate decorative elements
    tl.fromTo(
      [decorRef1.current, decorRef2.current], 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 1.2, stagger: 0.2 }, 
      0
    );
    
    // Main content animation sequence
    tl.fromTo(
      headingRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1 }
    );
    
    tl.fromTo(
      titleRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1 }, 
      "-=0.6"
    );
      
    tl.fromTo(
      decoratorRef.current, 
      { width: 0, opacity: 0 }, 
      { width: "4rem", opacity: 1, duration: 0.6 }, 
      "-=0.4"
    );
      
    tl.fromTo(
      paragraphOneRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1 }, 
      "-=0.4"
    );
      
    tl.fromTo(
      paragraphTwoRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1 }, 
      "-=0.6"
    );
      
    tl.fromTo(
      socialRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1 }, 
      "-=0.6"
    );
    
    // Clean up
    return () => tl.kill();
  }, []);

  return (
    <>
      <section 
        ref={heroRef} 
        className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-12 lg:px-16 relative" 
        aria-label="Introduction"
      >
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Decorative elements */}
          <div ref={decorRef1} className="absolute -top-6 -left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
          <div ref={decorRef2} className="absolute top-1/2 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

          {/* Name with semantic heading hierarchy */}
          <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Bimal Pandey</span>
          </h1>

          {/* Professional title with animation */}
          <div className="relative mb-8">
            <h2 ref={titleRef} className="text-xl sm:text-2xl font-medium text-gray-300">
              Full Stack Developer
            </h2>
            <div ref={decoratorRef} className="h-0.5 w-0 bg-gradient-to-r from-purple-500 to-transparent mt-3"></div>
          </div>

          {/* Content with improved typography and semantics */}
          <p ref={paragraphOneRef} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
            I build <span className="text-white font-medium">scalable web applications</span> with modern frameworks, solving complex problems and delivering enterprise solutions.
          </p>

          <p ref={paragraphTwoRef} className="text-base sm:text-lg text-gray-300 leading-relaxed mt-5 max-w-2xl">
            Currently, I'm freelancing and contributing to a variety of projects, helping clients create seamless, high-performing digital experiences.
          </p>

          {/* Social links - using already imported icons */}
          <div ref={socialRef} className="mt-8 flex items-center gap-6">
            <a href="https://github.com/bimal009" target="_blank" rel="noreferrer" aria-label="GitHub Profile" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <FaGithub size={22} />
            </a>
            <a href="https://x.com/CodeWithBun?t=2VYit3nsNRTPWs6nKqJpmw&s=09" target="_blank" rel="noreferrer" aria-label="Twitter Profile" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <PiXLogo size={22} />
            </a>
            <a href="https://instagram.com/bunchoo_graphics11" target="_blank" rel="noreferrer" aria-label="Instagram Profile" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;