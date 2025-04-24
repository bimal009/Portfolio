
import { useRef, useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="px-8 md:px-12 lg:px-16 pb-24 text-center">
      <h2 className={`text-3xl font-bold mb-6 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Contact
      </h2>

      <p className={`text-gray-300 mb-8 max-w-lg mx-auto transition-all duration-700 delay-[200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Have a question or need assistance with a project? Feel free to contact me! Whether you're looking for web development, app solutions, or anything in between, I'm here to help bring your ideas to life. Let's connect!
      </p>

      <p className={`text-purple-400 mb-8 transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
        pandeybimal616@gmail.com
      </p>

      <div className={`flex justify-center space-x-6 transition-all duration-700 delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <a
          target="_blank"

          href="https://www.instagram.com/bunchoo_graphics11"
          className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110 hover:border-purple-400 hover:-translate-y-1"
        >
          <span className="sr-only ">Instagram</span>
          <span className="text-sm "><FaInstagram /></span>
        </a>
        <a
          target="_blank"
          href="https://x.com/CodeWithBun?t=2VYit3nsNRTPWs6nKqJpmw&s=09"
          className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110 hover:border-purple-400 hover:-translate-y-1"
        >
          <span className="sr-only">x</span>
          <span><PiXLogo /></span>
        </a>
        <a
          target="_blank"

          href="https://github.com/bimal009"
          className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110 hover:border-purple-400 hover:-translate-y-1"
        >
          <span className="sr-only">GitHub</span>
          <span><FaGithub /></span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
