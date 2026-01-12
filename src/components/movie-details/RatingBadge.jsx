import { Star, TrendingUp } from "lucide-react";

export const RatingBadge = ({ rating, votes, trending }) => {
  return (
    <div className="flex items-center gap-2 md:gap-3 flex-wrap">
      <div className="rating-badge text-xs md:text-sm">
        <Star className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" />
        <span>
          <span className="text-primary font-semibold">{rating}</span>
          <span className="text-muted-foreground">/10 ({votes})</span>
        </span>
      </div>
      {trending && (
        <div className="rating-badge text-xs md:text-sm">
          <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-accent" />
          <span>{trending}</span>
        </div>
      )}
    </div>
  );
};
