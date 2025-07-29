import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Film, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Camera,
      title: "Photography Excellence",
      description: "Master the art of capturing moments that tell powerful stories through our comprehensive photography workshops and hands-on training."
    },
    {
      icon: Film,
      title: "Cinematic Storytelling",
      description: "Learn the craft of videography and filmmaking with professional equipment and guidance from industry experts."
    },
    {
      icon: Users,
      title: "Creative Community",
      description: "Connect with like-minded individuals who share your passion for visual arts and collaborative creativity."
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Participate in competitions, exhibitions, and real-world projects that build your portfolio and expertise."
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">ISOlation</span>
            </h2>
            <div className="w-50 h-px bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to nurture creative minds, ISOlation stands as the premier photography
              and videography society at Faculty of Technology, University of Delhi. We believe in the power
              of visual storytelling to inspire, educate, and connect communities.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-card border border-border hover:shadow-soft transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Mission statement */}
          <div className="bg-muted rounded-2xl p-8 md:p-12 text-center border border-border shadow-soft">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              To create a platform where aspiring photographers and videographers can explore their creativity,
              develop technical skills, and contribute to the rich cultural tapestry of our institution.
              We strive to document moments, preserve memories, and tell stories that matter.
            </p>
            <Button variant="cinematic" size="lg">
              Join Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;