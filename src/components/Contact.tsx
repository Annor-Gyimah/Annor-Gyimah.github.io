import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "eannor707@gmail.com",
    link: "mailto:eannor707@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Annor-Gyimah",
    link: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/annor-gyimah",
    link: "www.linkedin.com/in/annor-gyimah",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available for remote collaboration",
    link: null,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Interested in collaboration, have a project in mind, or just want to discuss
            climate science and technology? I'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => (
              <Card
                key={method.label}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                {method.link ? (
                  <a
                    href={method.link}
                    target={method.link.startsWith("mailto:") ? undefined : "_blank"}
                    rel={method.link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground text-sm break-all">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {method.value}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow"
              asChild
            >
              <a href="mailto:contact@climatescience.dev">
                <Mail className="w-5 h-5 mr-2" />
                Send me a message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
