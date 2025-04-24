import { useRef, useLayoutEffect } from "react";
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

  // Using useLayoutEffect instead of useEffect for immediate execution before browser paint
  useLayoutEffect(() => {
    // Pre-hide all elements to avoid flash of unstyled content
    if (decorRef1.current) decorRef1.current.style.opacity = "0";
    if (decorRef2.current) decorRef2.current.style.opacity = "0";
    if (headingRef.current) headingRef.current.style.opacity = "0";
    if (titleRef.current) titleRef.current.style.opacity = "0";
    if (decoratorRef.current) {
      decoratorRef.current.style.opacity = "0";
      decoratorRef.current.style.width = "0";
    }
    if (paragraphOneRef.current) paragraphOneRef.current.style.opacity = "0";
    if (paragraphTwoRef.current) paragraphTwoRef.current.style.opacity = "0";
    if (socialRef.current) socialRef.current.style.opacity = "0";

    // Immediate animation start
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.5 // Faster animations
        }
      });

      // Animate decorative elements
      tl.to(
        [decorRef1.current, decorRef2.current],
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
        0
      );

      // Main content animation sequence - faster with more overlap
      tl.to(
        headingRef.current,
        { y: 0, opacity: 1 },
        0.1 // Start almost immediately
      );

      tl.to(
        titleRef.current,
        { y: 0, opacity: 1 },
        0.2 // Faster follow-up
      );

      tl.to(
        decoratorRef.current,
        { width: "4rem", opacity: 1, duration: 0.4 },
        0.3
      );

      tl.to(
        paragraphOneRef.current,
        { y: 0, opacity: 1 },
        0.4
      );

      tl.to(
        paragraphTwoRef.current,
        { y: 0, opacity: 1 },
        0.5
      );

      tl.to(
        socialRef.current,
        { y: 0, opacity: 1 },
        0.6
      );
    });

    // Clean up
    return () => ctx.revert();
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
          <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 translate-y-5">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Bimal Pandey</span>
          </h1>

          {/* Professional title with animation */}
          <div className="relative mb-8">
            <h2 ref={titleRef} className="text-xl sm:text-2xl font-medium text-gray-300 translate-y-5">
              Full Stack Developer
            </h2>
            <div ref={decoratorRef} className="h-0.5 w-0 bg-gradient-to-r from-purple-500 to-transparent mt-3"></div>
          </div>

          {/* Content with improved typography and semantics */}
          <p ref={paragraphOneRef} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl translate-y-5">
            I build <span className="text-white font-medium">scalable web applications</span> with modern frameworks, solving complex problems and delivering enterprise solutions.
          </p>

          <p ref={paragraphTwoRef} className="text-base sm:text-lg text-gray-300 leading-relaxed mt-5 max-w-2xl translate-y-5">
            Currently, I'm freelancing and contributing to a variety of projects, helping clients create seamless, high-performing digital experiences.
          </p>

          {/* Social links - using already imported icons */}
          <div ref={socialRef} className="mt-8 flex items-center gap-6 translate-y-5">
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