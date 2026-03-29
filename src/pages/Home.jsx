import { Rocket, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/stwing_hero_bg.png" 
            alt="Futuristic Tech Background" 
            className="w-full h-full object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            KCECH College House
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-textMain drop-shadow-lg">Science and</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-xl animate-glow">
              Technology Wing
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl text-xl text-muted mx-auto leading-relaxed">
            A flourishing synergetic learning community getting together to build the future – from blimps to space cameras. 
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="group rounded-md bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 text-lg font-bold transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-textMain px-8 py-3 text-lg font-bold transition-all flex items-center justify-center backdrop-blur-sm">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links / Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group cursor-pointer group-hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Innovation Projects</h3>
            <p className="text-muted leading-relaxed">
              Applying collective knowledge in physics, engineering, and CS to build incredible things.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl border border-white/5 hover:border-secondary/50 transition-colors group cursor-pointer group-hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Community</h3>
            <p className="text-muted leading-relaxed">
              A diverse network of undergraduates, graduate students, professors, and alumni.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group cursor-pointer group-hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Mentorship</h3>
            <p className="text-muted leading-relaxed">
              Faculty and alumni network providing a personalized mentoring experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
