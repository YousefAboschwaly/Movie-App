import { useParams } from "react-router-dom"
import { RatingBadge } from "../components/movie-details/RatingBadge";
import { MoviePoster } from '../components/movie-details/MoviePoster';
import { TrailerPreview } from '../components/movie-details/TrailerPreview';
import { GenreTags } from "../components/movie-details/GenreTags";
import { InfoRow } from "../components/movie-details/InfoRow";


const movieData = {
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
 <div className="min-h-screen  py-8 md:py-12 px-4 md:px-6">
      <div className="movie-detail-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="movie-title">{movieData.title}</h1>
            <div className="movie-meta mt-2">
              <span>{movieData.year}</span>
              <span>•</span>
              <span>{movieData.rating}</span>
              <span>•</span>
              <span>{movieData.duration}</span>
            </div>
          </div>
          <RatingBadge
            rating={movieData.score}
            votes={movieData.votes}
            trending={movieData.trending}
          />
        </div>

        {/* Media Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8">
          <div className="md:col-span-1">
            <MoviePoster
              posterUrl={`https://image.tmdb.org/t/p/w500${movieData.posterPath}`}
              releaseInfo="NOVEMBER 5"
              platform="20TH CENTURY"
            />
          </div>
          <div className="md:col-span-2">
            <TrailerPreview 
              backdropUrl={`https://image.tmdb.org/t/p/original${movieData.backdropPath}`}
              duration="02:31" 
              tagline={movieData.tagline} 
            />
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 mb-6">
          <span className="info-label">Genres</span>
          <div className="flex flex-wrap items-center gap-3">
            <GenreTags genres={movieData.genres} />
            <a 
              href="#" 
              className="visit-homepage-btn ml-auto hidden sm:flex"
            >
              Visit Homepage
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Info Table */}
        <div className="space-y-4">
          <InfoRow label="Overview" value={movieData.overview} />
          <InfoRow label="Release date" value={movieData.releaseDate} />
          <InfoRow
            label="Countries"
            value={movieData.countries.join(" · ")}
          />
          <InfoRow label="Status" value={movieData.status} />
          <InfoRow
            label="Language"
            value={movieData.languages.join(" · ")}
          />
          <InfoRow label="Budget" value={movieData.budget} />
          <InfoRow label="Revenue" value={movieData.revenue} />
          <InfoRow label="Tagline" value={movieData.tagline} />
          <InfoRow
            label="Production Companies"
            value={movieData.productionCompanies.join(" · ")}
          />
        </div>
      </div>
    </div>  )
}
