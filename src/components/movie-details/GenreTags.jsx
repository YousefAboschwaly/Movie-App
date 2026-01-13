export const GenreTags = ({ genres }) => {
  return (
      <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <span 
          key={genre} 
          className="px-4.5 py-2 rounded-md  font-semibold transition-colors bg-secondary text-white hover:bg-[#ab94eb33] "
        >
          {genre}
        </span>
      ))}
    </div>
  );
};
