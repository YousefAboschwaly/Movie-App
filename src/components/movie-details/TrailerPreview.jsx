
export const TrailerPreview = ({ backdropUrl, trailerKey }) => {
  return (
    <div className="relative group cursor-pointer h-full min-h-50 md:min-h-0 rounded-xl overflow-hidden">
      {trailerKey ? (
        <iframe
          className="w-full h-full "
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0&controls=1&modestbranding=1&rel=0`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <img
          src={backdropUrl}
          alt="Movie trailer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
};
