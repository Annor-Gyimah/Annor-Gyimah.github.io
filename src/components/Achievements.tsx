import { Award, Trophy, BookOpen, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    title: "Outstanding Research Award",
    organization: "International Climate Science Association",
    year: "2023",
    description: "Recognized for innovative ML applications in climate prediction",
  },
  {
    icon: Trophy,
    title: "Best Climate Tech Hackathon Winner",
    organization: "Global Climate Innovation Summit",
    year: "2022",
    description: "Developed real-time weather alert system in 48 hours",
  },
  {
    icon: BookOpen,
    title: "Published Research Papers",
    organization: "Nature Climate Change & Journal of Atmospheric Sciences",
    year: "2021-2024",
    description: "12 peer-reviewed publications on climate modeling and AI",
  },
  {
    icon: Users,
    title: "Open Source Contributor",
    organization: "Climate Data Analysis Libraries",
    year: "2020-Present",
    description: "Active contributor to major climate science Python packages",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-atmosphere opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Recognition and contributions to the climate science and technology communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <Card
                key={achievement.title}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="w-9 h-9 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-medium text-accent whitespace-nowrap">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-primary mb-2">{achievement.organization}</p>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
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
