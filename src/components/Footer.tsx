import { Camera, Instagram, Facebook, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Brand section */}
          <div className="flex items-center space-x-3">
            <img
              src="/isolation.png"
              alt="ISOlation Logo"
              className="w-8 h-8 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold">ISOlation</h3>
              <p className="text-xs opacity-80">Artistic Vision | Cinematic Precision</p>
            </div>
          </div>

          {/* Contact info and Social links */}
          <div className="flex flex-col md:flex-row items-center md:justify-end space-y-4 md:space-y-0 md:space-x-6">
            {/* Contact info */}
            <div className="flex items-center space-x-2 text-sm opacity-80">
              <Mail className="w-4 h-4" />
              <span>isolation@fot.ac.in</span>
            </div>

            {/* Social links */}
            <div className="flex space-x-3">
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
            </div>
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