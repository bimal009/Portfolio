
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import TeamSection from "@/components/TeamSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import Contact from "@/components/Contact";
import GradientCursor from "@/components/GradientCursor";

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Hide the default cursor
    document.body.style.cursor = 'none';

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-purple-900 overflow-x-hidden">
      <GradientCursor />
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Hero />
        {/* <WorkExperience /> */}
        <TeamSection />
        <ProjectShowcase />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
