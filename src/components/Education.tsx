import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = [
  {
    degree: "Ph.D. in Atmospheric & Ocean Science",
    institution: "University of Colorado, Boulder",
    year: "2026 - 2030",
    description: "Dissertation on machine learning applications in climate modeling and weather prediction systems.",
  },
  {
    degree: "M.S. in Meteorology & Climate Science",
    institution: "Kwame Nkrumah University of Science and Technology",
    year: "2024 - 2025",
    description: "Specialized in ocean-atmosphere interactions and their impact on global climate patterns.",
  },
  {
    degree: "B.S. in Meteorology & Climate Science",
    institution: "Kwame Nkrumah University of Science and Technology",
    year: "2018 - 2022",
    description: "Double major focusing on computational methods in weather analysis and forecasting.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>

          <div className="space-y-6">
            {education.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {item.degree}
                      </h3>
                      <span className="text-sm font-medium text-accent">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-lg text-primary mb-2">{item.institution}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
