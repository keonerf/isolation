import { Button } from "@/components/ui/button";
import { Camera, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side - Society and Institute info */}
        <div className="flex items-center space-x-4">
          <img
            src="/isolation.png"
            alt="ISOlation Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-foreground">ISOlation</h1>
            <p className="text-sm text-muted-foreground">Faculty of Technology, University of Delhi</p>
          </div>
        </div>

        {/* Right side - Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            About
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Gallery
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Events
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Team
          </Button>
          <Button variant="cinematic" className="ml-4">
            Join Us
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-dramatic">
          <nav className="container mx-auto px-6 py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start text-foreground">
              About
            </Button>
            <Button variant="ghost" className="w-full justify-start text-foreground">
              Gallery
            </Button>
            <Button variant="ghost" className="w-full justify-start text-foreground">
              Events
            </Button>
            <Button variant="ghost" className="w-full justify-start text-foreground">
              Team
            </Button>
            <Button variant="cinematic" className="w-full mt-4">
              Join Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;