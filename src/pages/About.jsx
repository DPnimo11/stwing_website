import { Cpu, Globe, Rocket, Terminal } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">STWing</span>
        </h1>
        <p className="text-xl text-muted">The Science and Technology Wing.</p>
      </div>

      <div className="glass rounded-3xl p-8 md:p-12 mb-16 border border-white/5 relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 space-y-8 text-muted leading-relaxed text-lg">
          <p>
            Extending beyond Kings Court English House, the Science and Technology Wing (STWing) is a network of over two hundred undergraduates, graduate students, professors, and alumni from the University of Pennsylvania whose members share a strong interest in the science and technologies that permeate everyday life.
          </p>
          
          <p>
            While its reach is campus-wide, STWing's simultaneous status as a residential program helps maintain a flourishing intellectual and social community foundation both for the College House and the larger society. A great synergetic learning community, STWingers are always getting together to build something – from blimps to space cameras – relying on their collective knowledge of physics, engineering, computer science, as well as art and sense of humor to do so.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 border-y border-white/10 py-10">
            <div className="flex gap-4 items-start">
              <Terminal className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold mb-2">Technical Leadership</h4>
                <p className="text-sm text-gray-400">Pioneering residents of STWing have for years owned and maintained their own timesharing servers.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Globe className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold mb-2">Research & Publication</h4>
                <p className="text-sm text-gray-400">Raised money to fund a research fellowship, and helped produce a science journal of undergraduate research.</p>
              </div>
            </div>
          </div>

          <p>
            Throughout the year the program hosts a dinner-discussion series to which University faculty, staff, and interesting non-Penn guests are invited, as well as purely social events planned by students. The program is entirely student run by its Continuum (Student Governance), though students often work closely with faculty on their projects and with House staff in planning their social activities.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6 text-white">Our Goals</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed glass p-8 rounded-2xl border border-white/5">
          STWing sets out to provide its members with the connections, structure, and resources (financial and otherwise) necessary to pursue projects of their own interests. The network of faculty and alumni associated with the program provides a personalized mentoring experience within this community context. <strong className="text-white font-semibold">The program teaches students to dare, but also to have fun and be collaborative in the process.</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
