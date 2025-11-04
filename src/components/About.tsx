import { Cloud, Waves, Code, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Cloud,
    title: "Atmospheric Science",
    description: "Expert in meteorology and climate modeling",
  },
  {
    icon: Waves,
    title: "Ocean Science",
    description: "Understanding ocean-atmosphere interactions",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web applications",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "AI-powered climate data analysis",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-atmosphere opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              I'm a climate scientist and software engineer passionate about leveraging technology 
              to solve environmental challenges. My work sits at the intersection of atmospheric 
              science, oceanography, and cutting-edge software development.
            </p>
            <p>
              With expertise in meteorology and atmospheric physics, I build intelligent systems 
              that analyze climate data, predict weather patterns, and help communities prepare 
              for environmental changes. I believe in creating solutions that don't just process 
              data, but provide actionable insights for a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <item.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
