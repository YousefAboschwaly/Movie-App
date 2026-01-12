import { useParams } from "react-router-dom"
import { RatingBadge } from "../components/movie-details/RatingBadge";
import { MoviePoster } from '../components/movie-details/MoviePoster';
import { TrailerPreview } from '../components/movie-details/TrailerPreview';
import { GenreTags } from "../components/movie-details/GenreTags";
import { InfoRow } from "../components/movie-details/InfoRow";
import { ArrowRight } from "lucide-react";


const movie = {
  title: "Predator: Badlands",
  year: 2025,
  rating: "R",
  duration: "1h 47m",
  score: 7.8,
  votes: "1.3K",
  trending: 1,
  genres: ["Action", "Science Fiction", "Adventure"],
  overview:
    "Cast out from his clan, a young Predator finds an unlikely ally in a damaged android and embarks on a treacherous journey in search of the ultimate adversary.",
  releaseDate: "November 5, 2025 (Worldwide)",
  countries: ["United States"],
  status: "Released",
  languages: ["English"],
  budget: "$105 million",
  revenue: "$184.5 million",
  tagline: "First hunt. Last chance.",
  productionCompanies: [
    "20th Century Studios",
    "Lawrence Gordon Productions",
    "Davis Entertainment",
    "Toberoff Productions",
    "TSG Entertainment",
  ],
  posterPath: "/pHpq9yNUIo6aDoCXEBzjSolywgz.jpg",
  backdropPath: "/ebyxeBh56QNXxSJgTnmz7fXAlwk.jpg",
};

export default function MovieDetails() {
  const {id} = useParams()
  console.log(id)
  return (
<div className="bg-[hsl(256,33%,10%)] rounded-3xl overflow-hidden  w-full shadow-[0px_12px_32px_0px_#CECEFB05_inset,0px_0px_100px_0px_#AB8BFF4D]">
      <div className="p-8 md:p-10 lg:py-15 lg:px-30 space-y-6 md:space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[hsl(240,20%,91%)] tracking-tight mb-2">
              {movie.title}
            </h1>
            <div className="flex items-center gap-2 text-[hsl(240,30%,75%)]">
              <span>{movie.year}</span>
              <span className="w-1 h-1 rounded-full bg-[hsl(240,30%,75%)]" />
              <span>{movie.rating}</span>
              <span className="w-1 h-1 rounded-full bg-[hsl(240,30%,75%)]" />
              <span>{movie.duration}</span>
            </div>
          </div>
          <RatingBadge
            rating={movie.score}
            votes={movie.votes}
            trending={movie.trending}
          />
        </div>

        {/* Media Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8">
          <div className="md:col-span-1">
            <MoviePoster
              posterUrl={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              releaseInfo="NOVEMBER 5"
              platform="20TH CENTURY"
            />
          </div>
          <div className="md:col-span-2">
            <TrailerPreview
              backdropUrl={`https://image.tmdb.org/t/p/w500${movie.backdropPath}`}
              duration="02:31"
              tagline={movie.tagline}
            />
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 mb-6">
          <span className="text-[hsl(256,68%,75%)] text-sm min-w-">Genres</span>
          <div className="flex flex-wrap items-center gap-3 flex-1">
            <GenreTags genres={movie.genres} />
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all bg-transparent border border-[hsl(252,32%,25%)] text-[hsl(240,20%,91%)] hover:bg-[hsl(252,32%,18%)] hover:border-[hsl(256,68%,75%,0.5)] ml-auto  sm:flex">
              <span>Visit Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Info Table */}
        <div className="space-y-0 divide-y divide-[hsl(252,32%,25%,0.5)]">
          <InfoRow label="Overview" value={movie.overview} />
          <InfoRow label="Release date" value={movie.releaseDate} />
          <InfoRow label="Countries" value={movie.countries.join(" · ")} />
          <InfoRow label="Status">
            <span className="text-green-400">{movie.status}</span>
          </InfoRow>
          <InfoRow label="Language" value={movie.languages.join(" · ")} />
          <InfoRow label="Budget" value={movie.budget} />
          <InfoRow label="Revenue" value={movie.revenue} />
          <InfoRow label="Tagline">
            <span className="italic bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">{movie.tagline}</span>
          </InfoRow>
          <InfoRow label="Production Companies" value={movie.productionCompanies.join(" · ")} />
        </div>
      </div>
    </div>  )
}
