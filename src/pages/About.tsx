import GradientCursor from "@/components/GradientCursor";
import Navbar from "@/components/Navbar";
import { Grab } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('team-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight - 150;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <GradientCursor />
      <div className="min-h-screen bg-purple-900 overflow-x-hidden cursor-none">
        <div className="max-w-6xl mx-auto">
          <Navbar />

          <div className="px-8 md:px-12 lg:px-16 py-16">
            <div className="glow-effect max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
              <p className="text-gray-300 mb-4">
                I'm Bimal Pandey a self-taught full-stack developer and design enthusiast, currently a student with a strong passion for building clean, functional, and engaging digital experiences.
              </p>
              <p className="text-gray-300 mb-4">
                While I’m still early in my journey, I’ve taken on several freelance projects that helped me sharpen my skills in both frontend and backend development. I love bringing ideas to life through code and thoughtful UI/UX design.
              </p>
              <p className="text-gray-300">
                I'm constantly learning and experimenting with new technologies, aiming to become a developer who not only builds but innovates. I'm open to collaborations, internships, and any opportunity to grow alongside creative and driven teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
