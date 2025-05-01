import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  projectUrl: string;
  isReversed?: boolean;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  imagePath,
  projectUrl = "https://next-gen-it-eight.vercel.app/",
  isReversed = false
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: isReversed ? 40 : -40
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => ctx.revert();
  }, [isReversed]);

  // Preload the image
  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete) {
        setImageLoaded(true);
      } else {
        imgRef.current.onload = () => setImageLoaded(true);
      }
    }
  }, [imagePath]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-32`}
    >
      <div ref={contentRef} className="w-full md:w-1/2">
        <div className="text-sm text-gray-400 mb-1">Featured Project</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <Card className="p-5 bg-gradient-to-br from-purple-800/30 to-purple-900/60 border-0 backdrop-blur-sm shadow-lg mb-4 hover:shadow-purple-500/20 hover:shadow-lg transition-all duration-300">
          <p className="text-gray-300">
            {description}{" "}
            <a
              className="text-purple-300 hover:underline transition-all"
              target="_blank"
              rel="noreferrer"
              href={projectUrl}
            >
              Visit Site
            </a>
          </p>
        </Card>
      </div>
      <div ref={imageRef} className="w-full md:w-1/2 flex items-center justify-center">
        <Card className="w-full border border-white/10 overflow-hidden bg-transparent hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="relative w-full aspect-video">
            <a
              target="_blank"
              rel="noreferrer"
              href={projectUrl}
              className="block w-full h-full"
            >
              {/* Loading skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 w-full h-full bg-purple-900/30 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-purple-500/50 border-t-purple-300 rounded-full animate-spin"></div>
                </div>
              )}

              {/* Progressive image loading */}
              <img
                ref={imgRef}
                src={imagePath || "/api/placeholder/600/400"}
                alt={title}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 hover:scale-105' : 'opacity-0'
                  }`}
                style={{
                  willChange: 'transform, opacity'
                }}
                onLoad={() => setImageLoaded(true)}
              />
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <div className="px-8 md:px-12 lg:px-16 my-24">
      <ProjectCard
        title="NextGen Club Admin & Public Portal"
        description="A fully responsive and scalable web app built for the NextGen Innovator Club to streamline operations and boost student engagement. It features a secure admin panel for managing events and members, along with a public-facing site that showcases club info and announcements in a clean, mobile-friendly layout."
        imagePath="./Project1.jpg"
        projectUrl="https://next-gen-it-eight.vercel.app/"
      />

      <ProjectCard
        title="UrbanAura – Modern E-commerce UI with React"
        description="UrbanAura is a sleek, responsive e-commerce frontend built using React, powered by the FakeStore API. It leverages TanStack Query for efficient data fetching, Zustand for lightweight state management, and is styled with Tailwind CSS and shadcn/ui components. The project features dynamic product listings, category-based filtering, a smooth cart experience, and an elegant modern UI."
        imagePath="./project2.png"
        projectUrl="https://urbanauranp.vercel.app/"
      />
    </div>
  );
};

export default ProjectShowcase;