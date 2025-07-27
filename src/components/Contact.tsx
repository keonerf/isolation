import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Facebook, Camera, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join <span className="text-primary">ISOlation</span>
            </h2>
            <div className="w-24 h-px bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to capture your vision? Connect with us and become part of a community 
              that celebrates artistic expression and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="p-8 bg-card border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input 
                      placeholder="Enter your first name" 
                      className="border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input 
                      placeholder="Enter your last name" 
                      className="border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Interest Area</label>
                  <Input 
                    placeholder="Photography, Videography, Both" 
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your experience and what you hope to achieve with ISOlation..."
                    rows={4}
                    className="border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button variant="hero" className="w-full">
                  <Camera className="mr-2 w-5 h-5" />
                  Submit Application
                </Button>
              </form>
            </Card>

            {/* Contact info and social */}
            <div className="space-y-8">
              {/* Contact details */}
              <Card className="p-8 bg-gradient-subtle border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Faculty of Technology</p>
                      <p className="text-muted-foreground">University of Delhi, Delhi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">isolation@fot.ac.in</p>
                      <p className="text-muted-foreground">Official Email</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">+91 98765 43210</p>
                      <p className="text-muted-foreground">Student Coordinator</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social media */}
              <Card className="p-8 bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Follow Our Journey</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="group h-12">
                    <Instagram className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Instagram
                  </Button>
                  
                  <Button variant="outline" className="group h-12">
                    <Facebook className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Facebook
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Stay updated with our latest work, events, and opportunities. 
                    Follow us for daily inspiration and behind-the-scenes content.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;