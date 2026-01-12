export const MoviePoster = ({ posterUrl, releaseInfo, platform }) => {
  return (
        <div className="relative h-full">
      <img
        src={posterUrl}
        alt="Movie poster"
        className="w-full h-full object-cover rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      />
      {(releaseInfo || platform) && (
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-3 md:p-4 rounded-b-xl">
          <p className="text-[10px] md:text-xs text-[hsl(240,30%,75%)] uppercase tracking-wider">
            Coming soon
          </p>
          {platform && (
            <p className="text-[10px] md:text-xs mt-1">
              <span className="text-[hsl(240,30%,75%)]">Only on </span>
              <span className="text-[hsl(256,68%,75%)] font-bold">{platform}</span>
              <span className="text-[hsl(240,20%,91%)] font-medium">
                {" "}| {releaseInfo}
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
