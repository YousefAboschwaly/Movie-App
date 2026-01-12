export const MoviePoster = ({ posterUrl, releaseInfo, platform }) => {
  return (
    <div className="poster-card relative h-full">
      <img
        src={posterUrl}
        alt="Movie poster"
        className="w-full h-full object-cover"
      />
      {(releaseInfo || platform) && (
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-3 md:p-4">
          <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
            Coming soon
          </p>
          {platform && (
            <p className="text-[10px] md:text-xs mt-1">
              <span className="text-muted-foreground">Only on </span>
              <span className="text-primary font-bold">{platform}</span>
              <span className="text-foreground font-medium">
                {" "}
                | {releaseInfo}
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
