export const GenreTags = ({ genres }) => {
  return (
      <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <span 
          key={genre} 
          className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-[hsl(252,32%,18%)] text-[hsl(240,20%,91%)] border border-[hsl(252,32%,25%)] hover:bg-[hsl(256,68%,75%,0.2)] hover:border-[hsl(256,68%,75%,0.5)]"
        >
          {genre}
        </span>
      ))}
    </div>
  );
};
