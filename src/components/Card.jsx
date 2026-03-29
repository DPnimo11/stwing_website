import { ExternalLink } from 'lucide-react';

const Card = ({ title, description, image, date, tag, link }) => {
  return (
    <div className="glass rounded-xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,210,255,0.15)] flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 transition-opacity group-hover:opacity-75"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {tag && (
          <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/50 rounded-full text-xs font-semibold text-primary">
            {tag}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col relative z-20">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
          {link && (
            <a href={link} className="text-muted hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        {date && <p className="text-sm font-medium text-secondary mb-3">{date}</p>}
        <p className="text-muted text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
