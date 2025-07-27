import { Camera, Instagram, Facebook, Mail } from "lucide-react";
import isolationLogo from "@/assets/isolation-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand section */}
          <div className="flex items-center space-x-3">
            <img
              src="/public/isolation.png"
              alt="ISOlation Logo"
              className="w-8 h-8 object-contain filter brightness-0 invert"
            />
            <div>
              <h3 className="text-lg font-bold">ISOlation</h3>
              <p className="text-xs opacity-80">Artistic Vision | Cinematic Precision</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-sm opacity-80">
              <Mail className="w-4 h-4" />
              <span>isolation@fot.ac.in</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-end space-x-3">
            <a
              href="#"
              className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            >
              <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center">
          <p className="text-xs opacity-60">
            © 2024 ISOlation - Faculty of Technology, University of Delhi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;