import { useRef, useEffect } from "react";
import {
  Code2,
  Server,
  Database,
  FileCode,
  Layers,
  PenTool,
  Terminal,
  GitBranch,
  Flame,
  Palette,
  Lightbulb,
  Rocket,
  Boxes,
  Cpu,
  Code,
  TabletSmartphone
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define tech stack with Lucide React icons
const techStack = [
  { name: "JavaScript", icon: <Code2 size={24} className="text-yellow-400" /> },
  { name: "TypeScript", icon: <Code size={24} className="text-blue-400" /> },
  { name: "React", icon: <Boxes size={24} className="text-sky-400" /> },
  { name: "Next.js", icon: <Terminal size={24} className="text-white" /> },
  { name: "Node.js", icon: <Server size={24} className="text-green-500" /> },
  { name: "Express", icon: <Rocket size={24} className="text-gray-300" /> },
  { name: "MongoDB", icon: <Database size={24} className="text-green-400" /> },
  { name: "PostgreSQL", icon: <Database size={24} className="text-blue-500" /> },
  { name: "MySQL", icon: <Database size={24} className="text-orange-400" /> },
  { name: "Mongoose", icon: <Layers size={24} className="text-red-800" /> },
  { name: "Tailwind CSS", icon: <Palette size={24} className="text-cyan-400" /> },
  { name: "HTML5", icon: <FileCode size={24} className="text-orange-500" /> },
  { name: "CSS3", icon: <PenTool size={24} className="text-blue-500" /> },
  { name: "Python", icon: <Code2 size={24} className="text-blue-600" /> },
  { name: "Java", icon: <Cpu size={24} className="text-red-500" /> },
  { name: "C", icon: <Terminal size={24} className="text-blue-300" /> },
  { name: "Redux", icon: <Lightbulb size={24} className="text-purple-400" /> },
  { name: "Git", icon: <GitBranch size={24} className="text-orange-400" /> },
  { name: "Firebase", icon: <Flame size={24} className="text-yellow-500" /> },
  { name: "React Native", icon: <TabletSmartphone size={24} className="text-purple-400" /> },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const techTitleRef = useRef<HTMLHeadingElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animations
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        techTitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none"
          }
        }
      );

      // Tech stack staggered animation
      if (techStackRef.current) {
        const techItems = techStackRef.current.children;
        gsap.fromTo(
          techItems,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: techStackRef.current,
              start: "top 70%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Logo animation
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="team-section" ref={sectionRef} className="mt-24 mb-36 px-4 sm:px-8 md:px-12 lg:px-16 text-center">
      <p ref={headingRef} className="text-white text-xl sm:text-2xl font-semibold mb-2">
        I'm actively seeking opportunities to work with a<span className="text-purple-400"> collaborative</span> and innovative team
      </p>
      <p ref={subheadingRef} className="text-gray-400 mb-12">
        that's focused on building meaningful digital solutions and solving real-world problems through code.
      </p>

      <h3 ref={techTitleRef} className="text-xl text-purple-300 font-medium mb-6">
        My Tech Stack
      </h3>

      <div ref={techStackRef} className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center hover:scale-105 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer transition-all duration-300"
          >
            <div className="mb-1">
              {tech.icon}
            </div>
            <span className="text-xs text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>

      <div ref={logoRef} className="logo-container w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-12">
        <div className="relative w-full h-full">
          {/* Logo image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="./logo.svg"
                alt="Personal Logo"
                className="w-full h-full object-contain z-10 relative"
              />

              {/* Animated circle */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#5B21B6" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#logoGradient)" strokeWidth="2" className="animate-spin-slow" />
              </svg>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="absolute top-4 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 left-5 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;