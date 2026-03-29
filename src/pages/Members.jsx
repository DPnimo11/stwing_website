import { Users, ShieldCheck } from 'lucide-react';

const Members = () => {
  const leadership = [
    { role: "President", desc: "Oversees the Continuum and acts as the liaison with KCECH House staff." },
    { role: "Director of Technology", desc: "Maintains the STWing timeshare servers and technical resources." },
    { role: "Director of Events", desc: "Plans our dinner-discussions and purely social events." },
    { role: "Alumni Chair", desc: "Coordinates our network of over 200 past members and professors." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
      <div className="text-center mb-16">
        <Users className="w-12 h-12 text-primary mx-auto mb-6 inline-block" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Continuum</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          The program is entirely student-run by our governance board, actively collaborating with faculty and KCECH house staff.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {leadership.map((member, idx) => (
          <div key={idx} className="glass p-8 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-primary/30 transition-colors">
            <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{member.role}</h3>
              <p className="text-muted leading-relaxed text-sm">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-10 border border-primary/20 text-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Our Broad Network</h2>
        <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed relative z-10">
          The STWing network includes over two hundred undergraduates, graduate students, professors, and alumni. 
          When you join STWing, you gain access to our custom resources, financial backing for projects, and a personalized 
          mentoring experience unlike any other at the University of Pennsylvania.
        </p>
        
        <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-background transition-all cursor-pointer shadow-[0_0_15px_rgba(0,210,255,0.2)]">
          Join the Directory
        </div>
      </div>
    </div>
  );
};

export default Members;
