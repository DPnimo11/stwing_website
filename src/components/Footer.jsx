import { Rocket, Code, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass border-t border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold glow-text text-primary mb-4">
              <Rocket className="w-6 h-6 text-secondary" />
              STWing
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              A flourishing intellectual and social community foundation at the University of Pennsylvania, pushing the boundaries of technology and science.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-textMain tracking-wider uppercase mb-4 text-secondary">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/members" className="text-muted hover:text-primary transition-colors text-sm">Members & Continuum</Link></li>
              <li><Link to="/projects" className="text-muted hover:text-primary transition-colors text-sm">Our Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-textMain tracking-wider uppercase mb-4 text-secondary">Connect</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-muted hover:text-primary hover:glow-text transition-all">
                <span className="sr-only">GitHub</span>
                <Code className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted hover:text-primary hover:glow-text transition-all">
                <span className="sr-only">Community Chat</span>
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="mailto:contact@stwing.upenn.edu" className="text-muted hover:text-primary hover:glow-text transition-all">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex items-center justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Science and Technology Wing. All rights reserved.
          </p>
          <p className="text-xs text-muted">KCECH College House</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
