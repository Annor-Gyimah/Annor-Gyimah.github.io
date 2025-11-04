import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "MammoAI",
    description:
      "MammoAI is a web application built with Django, designed to assist radiologists in predicting and assessing breast cancer from mammogram images. It utilizes advanced machine learning models to determine whether an image is benign or malignant, and generates a heatmap to highlight the affected areas.",
    tags: ["Python", "TensorFlow", "HTML", "CSS", "Django"],
    github: "https://github.com/Annor-Gyimah/mammoai",
    //demo: "https://demo.com",
  },
  {
    title: "Modelling low-level clouds",
    description:
      "Modelling the spatio-temporal dynamics of low-level clouds using machine learning algorithms involves harnessing the power of computational techniques to analyze and predict the behavior of these clouds over space and time.",
    tags: ["Jupyter Notebook", "Tensor flow", "Python", "Data Analysis"],
    github: "https://github.com/Annor-Gyimah/MODELLING-SPATIO-TEMPORAL-DYNAMICS-OF-LOW-LEVEL-CLOUDS-USING-MACHINE-LEARNING-ALGORITHM",
    // demo: "https://demo.com",
  },
  {
    title: "ConveTransfer",
    description:
      "A file sharing application made with python package ttkbootstrap . Made with ❤.",
    tags: ["Software", "Python", "GUI", "File Transfer"],
    github: "https://github.com/Annor-Gyimah/ConveTransfer",
    // demo: "https://demo.com",
  },
  {
    title: "OmniPull",
    description:
      "A desktop application for downloading youtube videos, static files, torrent files, etc., you just name it.",
    tags: ["PySide6", "yt-dlp", "Ffmpeg", "Aria2c", "Python"],
    github: "https://github.com/Annor-Gyimah/OmniPull",
    demo: "http://omnipull.pythonanywhere.com",
  },
  {
    title: "Country Coord",
    description:
      "Get longitude and latitude coordinates of countries that you can use with xarray.",
    tags: ["Python", "CSV", "Jupyter Notebook"],
    github: "https://github.com/Annor-Gyimah/country_coord",
    // demo: "https://demo.com",
  },
  {
    title: "Spatio-temporal dynamics and drivers of extreme rainfall",
    description:
      "A SYNOPTIC AND ENSO INDICES ASSESSMENT",
    tags: ["Python", "Jupyter Notebook", "Xarray", "Numpy"],
    github: "https://github.com/Annor-Gyimah/SPATIOTEMPORAL-DYNAMICS-AND-CLIMATIC-DRIVERS-OF-EXTREME-PRECIPITATION-EVENTS-IN-GHANA",
    // demo: "https://demo.com",
  },
  {
    title: "Ambient Weather Station",
    description:
      "Dashboard for Ambient weather station data and for accessing data remotely.",
    tags: ["Django", "Html", "Python", "CSS", "Javascript"],
    // github: "https://github.com",
    demo: "http://tidekit.pythonanywhere.com/",
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
