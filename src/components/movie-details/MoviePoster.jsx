export const MoviePoster = ({ posterUrl}) => {
  return (
        <div className="relative h-full">
      <img
        src={posterUrl}
        alt="Movie poster"
        className="w-full h-full  rounded-[10px] "
      />

    </div>
  );
};
