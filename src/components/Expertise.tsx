import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const expertiseAreas = [
  {
    category: "Climate Science",
    skills: [
      "Meteorology",
      "Atmospheric Physics",
      "Climate Modeling",
      "Weather Forecasting",
      "Ocean-Atmosphere Dynamics",
      "Climate Data Analysis",
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "Deep Learning",
      "Computer Vision",
      "Time Series Analysis",
      "Neural Networks",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    category: "Data Science",
    skills: [
      "Python",
      "R",
      "Data Visualization",
      "Statistical Analysis",
      "Big Data Processing",
      "Pandas & NumPy",
    ],
  },
  {
    category: "Web Development",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Cloud Deployment",
    ],
  },
  {
    category: "Scientific Computing",
    skills: [
      "MATLAB",
      "Numerical Methods",
      "Scientific Visualization",
      "GIS Systems",
      "Remote Sensing",
      "Satellite Data",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Jupyter",
      "Linux",
      "CI/CD",
    ],
  },
];

export const Expertise = () => {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-ocean opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Expertise
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            A multidisciplinary skill set combining climate science, machine learning,
            and full-stack development to create innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area) => (
              <Card
                key={area.category}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {area.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted hover:bg-primary/20 text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
