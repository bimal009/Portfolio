import { Card } from "@/components/ui/card";
import { useRef, useEffect, useState } from "react";
import { MoveRight } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  imagePath,
  isReversed = false,
  delay = 0
}: {
  title: string;
  description: string;
  imagePath: string;
  isReversed?: boolean;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-32`}
    >
      <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : isReversed ? 'opacity-0 translate-x-12' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: `${delay}ms` }}>
        <div className="text-sm text-gray-400 mb-1">Featured Project</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <Card className="p-5 bg-gradient-to-br from-purple-800/30 to-purple-900/60 border-0 backdrop-blur-sm shadow-lg mb-4 hover:shadow-purple-500/20 hover:shadow-lg transition-all duration-300">
          <p className="text-gray-300">{description} <a className="text-purple-300 hover:underline transition-all" target="_blank" href="https://next-gen-it-eight.vercel.app/">Visit Site</a></p>
        </Card>
        <div className="flex space-x-2">
        </div>
      </div>
      <div className={`w-full md:w-1/2 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${delay + 300}ms` }}>
        <Card className="w-full border border-white/10 overflow-hidden bg-transparent hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="relative w-full aspect-video">
            <a target="_blank" href="https://next-gen-it-eight.vercel.app/">
              <img
                src={imagePath || "/api/placeholder/600/400"}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </a>
          </div>
        </Card>
      </div>
    </div >
  );
};

const ProjectShowcase = () => {
  return (
    <div className="px-8 md:px-12 lg:px-16 my-24">
      <ProjectCard
        title="NextGen Club Admin & Public Portal"
        description="A fully responsive and scalable web app built for the NextGen Innovator Club to streamline operations and boost student engagement. It features a secure admin panel for managing events and members, along with a public-facing site that showcases club info and announcements in a clean, mobile-friendly layout."
        imagePath="./Project1.jpg"
        delay={0}
      />

      {/* <ProjectCard
        title="Example Project"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        imagePath="./logo.png"
        isReversed
        delay={300}
      /> */}
    </div>
  );
};

export default ProjectShowcase;