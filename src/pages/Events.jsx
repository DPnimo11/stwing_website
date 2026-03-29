import Card from '../components/Card';
import { Calendar } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Faculty Dinner-Discussion",
      description: "Continuing our premier event series, welcoming esteemed University faculty to KCECH to discuss emerging STEM trends over dinner.",
      image: "/stwing_events.png",
      date: "Upcoming • Next Thursday",
      tag: "Networking"
    },
    {
      title: "STWing Hack Night",
      description: "A purely social, late-night collaborative build session. Break out the soldering irons, deploy a new container, and have fun.",
      image: "/stwing_events.png",
      date: "Upcoming • Friday 10 PM",
      tag: "Social"
    },
    {
      title: "Alumni Mentorship Mixer",
      description: "Providing our members with connections and structures by bringing back former STWingers to share their industry experiences.",
      image: "/stwing_events.png",
      date: "Next Month",
      tag: "Career"
    },
    {
      title: "Penn Guest Lecture Series",
      description: "An engaging talk with interesting non-Penn guests exploring the sciences that permeate our everyday life.",
      image: "/stwing_events.png",
      date: "TBA",
      tag: "Discussion"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
      <div className="text-center mb-16">
        <Calendar className="w-12 h-12 text-secondary mx-auto mb-6 inline-block" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Events & Gatherings
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Balancing intellectual curiosity with purely social fun. Check out what the Continuum has planned for the community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {events.map((event, idx) => (
          <Card key={idx} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
