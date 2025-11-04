import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Climate Prediction Platform",
    description:
      "AI-powered platform for regional climate forecasting using ensemble learning and satellite data. Provides actionable insights for agricultural planning and disaster preparedness.",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Ocean Current Visualizer",
    description:
      "Interactive 3D visualization tool for ocean currents and temperature patterns. Processes real-time data from buoys and satellite measurements.",
    tags: ["Three.js", "WebGL", "Python", "Data Analysis"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Alert System",
    description:
      "Real-time weather monitoring and alert system using ML to predict severe weather events. Integrates multiple data sources for accurate forecasting.",
    tags: ["Node.js", "Machine Learning", "APIs", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Atmospheric Data Dashboard",
    description:
      "Comprehensive dashboard for analyzing atmospheric composition, temperature profiles, and climate indicators with advanced visualization tools.",
    tags: ["React", "D3.js", "Python", "Cloud Computing"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Carbon Footprint Tracker",
    description:
      "Web application helping individuals and organizations track, analyze, and reduce their carbon emissions with personalized recommendations.",
    tags: ["React", "Node.js", "MongoDB", "Data Viz"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Satellite Image Classifier",
    description:
      "Deep learning model for classifying cloud types and weather patterns from satellite imagery. Achieves 95% accuracy using custom CNN architecture.",
    tags: ["PyTorch", "Computer Vision", "Python", "GIS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Building innovative solutions at the intersection of climate science and technology.
            Each project addresses real-world environmental challenges with cutting-edge tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted text-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
