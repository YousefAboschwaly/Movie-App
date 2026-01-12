import { Play } from "lucide-react";


export const TrailerPreview = ({ backdropUrl, duration, tagline }) => {
  return (
   <div className="relative group cursor-pointer h-full min-h-50 md:min-h-0 rounded-xl overflow-hidden">
      <img
        src={backdropUrl}
        alt="Movie trailer"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0" />
      
      {tagline && (
        <div className="absolute top-3 md:top-4 left-0 right-0 text-center z-10">
          <p className="font-bold text-sm md:text-lg bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">{tagline}</p>
        </div>
      )}
      
      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 z-10">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all bg-white/15 backdrop-blur-[10px] border border-white/20 hover:bg-white/25 text-xs md:text-sm text-white">
          <Play className="w-3 h-3 md:w-4 md:h-4 fill-current" />
          <span>Trailer</span>
          <span className="text-white/60">• {duration}</span>
        </button>
      </div>
    </div>
  );
};
