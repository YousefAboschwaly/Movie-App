import { Star, TrendingUp } from "lucide-react";

export const RatingBadge = ({ rating, votes, trending }) => {
  return (
    <div className="flex items-center gap-2 md:gap-3 flex-wrap">
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-[hsl(252,32%,18%)] border border-[hsl(252,32%,25%)] text-xs md:text-sm">
        <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
        <span>
          <span className="text-[hsl(240,20%,91%)] font-semibold">{rating}</span>
          <span className="text-[hsl(240,30%,75%)]">/10 ({votes})</span>
        </span>
      </div>
      {trending && (
        <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-[hsl(252,32%,18%)] border border-[hsl(252,32%,25%)]  md:text-sm">
          <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-[hsl(256,68%,75%)]" />
          <span className="text-[hsl(240,20%,91%)]">{trending}</span>
        </div>
      )}
    </div>
  );
};
