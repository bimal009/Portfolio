
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

const projectData = [
  {
    id: 1,
    title: "Citi on the Mobile",
    subtitle: "A web app for visualizing personalized banking data",
    color: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
    icon: "🅰️",
    iconBg: "bg-purple-700"
  },
  {
    id: 2,
    title: "Citi on the Mobile",
    subtitle: "A web app for visualizing personalized banking data",
    color: "bg-gradient-to-br from-orange-600/20 to-yellow-600/20",
    icon: "🍑",
    iconBg: "bg-orange-500"
  },
  {
    id: 3,
    title: "Citi on the Mobile",
    subtitle: "A web app for visualizing personalized banking data",
    color: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
    icon: "🌀",
    iconBg: "bg-indigo-700"
  },
  {
    id: 4,
    title: "Citi on the Mobile",
    subtitle: "A web app for visualizing personalized banking data",
    color: "bg-gradient-to-br from-purple-600/20 to-blue-800/20",
    icon: "💠",
    iconBg: "bg-blue-700"
  },
];

const WorkExperience = () => {
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
    <div ref={sectionRef} className="mt-36 mb-24 px-8 md:px-12 lg:px-16">
      <h2 
        className={`text-3xl font-bold mb-8 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
      >
        Work Experience
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <Card 
            key={project.id} 
            className={`p-6 border-0 ${project.color} backdrop-blur-sm transform transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start">
              <div className={`${project.iconBg} w-10 h-10 flex items-center justify-center rounded-lg text-xl animate-pulse`}>
                {project.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.subtitle}</p>
                <button className="mt-3 text-xs text-white border border-white/20 px-3 py-1 rounded-full hover:bg-white/10 transition-all hover:scale-105 hover:border-purple-400/50">
                  Learn more
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
