
import GradientCursor from "@/components/GradientCursor";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const experiments = [
  {
    id: 1,
    title: "Design System Exploration",
    description: "Experimenting with component-based design systems for consistent UI",
    tags: ["Design", "UI", "Components"]
  },
  {
    id: 2,
    title: "Animation Studies",
    description: "Research on micro-interactions and motion design principles",
    tags: ["Animation", "Motion", "Interaction"]
  },
  {
    id: 3,
    title: "Color Theory Application",
    description: "Applying color theory concepts to create accessible interfaces",
    tags: ["Color", "Accessibility", "Theory"]
  }
];

const Lab = () => {
  return (
    <>
      <GradientCursor />
      <div className="min-h-screen bg-purple-900 overflow-x-hidden cursor-none">
        <div className="max-w-6xl mx-auto">
          <Navbar />

          <div className="px-8 md:px-12 lg:px-16 py-16">
            <div className="glow-effect max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-2">Lab</h1>
              <p className="text-gray-300 mb-12">Experimental projects and design explorations</p>

              <div className="space-y-6">
                {experiments.map((exp) => (
                  <Card key={exp.id} className="p-6 border-0 bg-gradient-to-br from-purple-800/30 to-purple-900/60 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lab;
