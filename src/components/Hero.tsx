import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Film, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary to-transparent rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-primary to-transparent rounded-xl rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-tr from-primary to-transparent rounded-lg -rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-bl from-primary to-transparent rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
            ISO<span className="text-primary">lation</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Artistic Vision | Optical Precision
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Where photography meets storytelling. Join the premier photography and videography society
            of Faculty of Technology, University of Delhi.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="group">
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" size="lg" className="group">
              <Camera className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Gallery
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Camera className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">50+</h3>
              <p className="text-muted-foreground">Active Members</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Film className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">25+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">5+</h3>
              <p className="text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;