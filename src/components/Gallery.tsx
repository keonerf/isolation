import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Camera, Play } from "lucide-react";

const Gallery = () => {
  const portfolioItems = [
    {
      type: "photography",
      title: "Campus Life",
      description: "Capturing the essence of university life through candid moments and architectural beauty.",
      category: "Documentary"
    },
    {
      type: "videography",
      title: "Cultural Fest 2024",
      description: "A cinematic journey through our annual cultural celebration.",
      category: "Event Coverage"
    },
    {
      type: "photography",
      title: "Portrait Series",
      description: "Character studies that reveal the stories behind the faces.",
      category: "Portraits"
    },
    {
      type: "videography",
      title: "Tech Symposium",
      description: "Professional documentation of academic excellence and innovation.",
      category: "Corporate"
    },
    {
      type: "photography",
      title: "Nature & Architecture",
      description: "Where built environment meets natural beauty on campus.",
      category: "Landscape"
    },
    {
      type: "videography",
      title: "Student Stories",
      description: "Personal narratives that showcase diverse student experiences.",
      category: "Narrative"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <div className="w-50 h-px bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse collection of photography and videography work that showcases
              the talent and creativity of our members.
            </p>
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border border-border hover:shadow-dramatic transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-[4/3] bg-gradient-hero relative overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.type === "photography" ? (
                      <Camera className="w-16 h-16 text-primary-foreground/30" />
                    ) : (
                      <Play className="w-16 h-16 text-primary-foreground/30" />
                    )}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                      <ExternalLink className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* View more button */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              View Complete Gallery
              <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;