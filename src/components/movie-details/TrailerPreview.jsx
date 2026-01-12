import { Play } from "lucide-react";


export const TrailerPreview = ({ backdropUrl, duration, tagline }) => {
  return (
    <div className="trailer-card relative group cursor-pointer h-full min-h-50 md:min-h-0">
      <img
        src={backdropUrl}
        alt="Movie trailer"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="trailer-overlay" />
      
      {tagline && (
        <div className="absolute top-3 md:top-4 left-0 right-0 text-center">
          <p className="text-primary font-bold text-sm md:text-lg">{tagline}</p>
        </div>
      )}
      
      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
        <button className="play-button text-xs md:text-sm">
          <Play className="w-3 h-3 md:w-4 md:h-4 fill-current" />
          <span>Trailer</span>
          <span className="text-muted-foreground">• {duration}</span>
        </button>
      </div>
    </div>
  );
};
