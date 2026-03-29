import Card from '../components/Card';
import { Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Blimp Navigation",
      description: "An AI-powered indoor blimp conceptualized and built entirely by STWing members relying on collective knowledge in physics, engineering, and CS.",
      image: "/stwing_projects.png",
      tag: "Robotics"
    },
    {
      title: "Space Camera Array",
      description: "High-altitude weather balloon setup equipped with custom firmware to capture curvature of the earth and measure atmospheric data points.",
      image: "/stwing_projects.png",
      tag: "Engineering"
    },
    {
      title: "STWing Timesharing Servers",
      description: "Pioneering community-run multi-user remote server architecture maintained completely by our undergraduate residents since 1998.",
      image: "/stwing_projects.png",
      tag: "Computer Science"
    },
    {
      title: "Dorm Automation IoT",
      description: "Custom circuit boards and ESP32 integrations to automate RGB lighting and environmental controls within the College House.",
      image: "/stwing_projects.png",
      tag: "Hardware"
    },
    {
      title: "Undergraduate Science Journal",
      description: "A student-run publication platform detailing the findings from our STWing Research Fellows and independent builders.",
      image: "/stwing_projects.png",
      tag: "Research"
    },
    {
      title: "Cyber Security Hackathon",
      description: "Our annual in-house capture the flag challenges designed to test our collective server defenses and cryptographic skills.",
      image: "/stwing_projects.png",
      tag: "Cybersecurity"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
      <div className="text-center mb-16">
        <Rocket className="w-12 h-12 text-primary mx-auto mb-6 inline-block" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          From hardware prototypes to cloud infrastructure, STWingers are always getting together to build something.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Card key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
