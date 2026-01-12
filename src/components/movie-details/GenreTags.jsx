export const GenreTags = ({ genres }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <span key={genre} className="genre-tag">
          {genre}
        </span>
      ))}
    </div>
  );
};
