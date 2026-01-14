import { Star, TrendingUp } from "lucide-react";

export const RatingBadge = ({ rating, votes, trending }) => {
  if(rating==='N/A' && votes==='N/A' ) return null;
  return (
    <div className="flex items-center gap-2.5 md:gap-3 flex-wrap text-light-200">
      <div className="flex items-center gap-2.5 px-4 py-2 rounded-md font-semibold bg-secondary text-xs md:text-[16px] ">
        <Star className="w-3 h-3 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
        <span>
          <span className="text-white font-semibold">{rating}</span>
          <span>/10 ({votes})</span>
        </span>
      </div>
      {trending && (
        <div className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold bg-secondary  md:text-[16px]">
          <TrendingUp className="w-3 h-3 md:w-4 md:h-4 " />
          <span >{trending}</span>
        </div>
      )}
    </div>
  );
};
