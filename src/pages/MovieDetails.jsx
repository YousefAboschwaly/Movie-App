import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { RatingBadge } from "../components/movie-details/RatingBadge";
import { MoviePoster } from "../components/movie-details/MoviePoster";
import { TrailerPreview } from "../components/movie-details/TrailerPreview";
import { GenreTags } from "../components/movie-details/GenreTags";
import { InfoRow } from "../components/movie-details/InfoRow";
import Spinner from "../components/Spinner";

import useMovieDetails from "../hooks/useMovieDetails";

export default function MovieDetails() {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useMovieDetails(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500">
        {error?.message || error?.toString() || "An error occurred"}
      </p>
    );
  }

  // ✅ Destructuring movie data
  const {
    title,
    year,
    rating,
    homepage,
    duration,
    score,
    votes,
    trending,
    poster_path,
    backdrop_path,
    tagline,
    genres,
    overview,
    releaseDate,
    countries,
    status,
    spoken_languages,
    budget,
    revenue,
    productionCompanies,
  } = movie;
console.log(movie)
  console.log(movie);
  return (
    <section className="movie-modal">
      <div className="content">
        {/* Header */}
        <div className="flex flex-col items-start sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {title}
            </h1>

            <div className="flex items-center gap-2 text-light-200">
              <span>{year}</span>
              <span>•</span>
              <span>{rating}</span>
              <span>•</span>
              <span>{duration}</span>
            </div>
          </div>

          <RatingBadge rating={score} votes={votes} trending={trending} />
        </div>

        {/* Media Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8">
          <div className="md:col-span-1">
            <MoviePoster
              posterUrl={`https://image.tmdb.org/t/p/w500${poster_path}`}
            />
          </div>

          <div className="md:col-span-2">
            <TrailerPreview
              backdropUrl={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
              duration="02:31"
              tagline={tagline}
            />
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 mb-6">
          <span className="text-[hsl(256,68%,75%)] text-sm">Genres</span>

          <div className="flex flex-wrap items-center gap-3 flex-1">
            <GenreTags genres={genres} />
           
            <Link
              to={homepage}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all bg-transparent border border-[hsl(252,32%,25%)] text-[hsl(240,20%,91%)] hover:bg-[hsl(252,32%,18%)] hover:border-[hsl(256,68%,75%,0.5)] ml-auto sm:flex"
            >
              <span>Visit Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Info Table */}
        <div className="space-y-0 divide-y divide-[hsl(252,32%,25%,0.5)]">
          <InfoRow label="Overview" value={overview} />
          <InfoRow label="Release date" value={releaseDate} />
          <InfoRow label="Countries" value={countries?.join(" · ")} />
          <InfoRow label="Status">
            <span className="text-green-400">{status}</span>
          </InfoRow>
          <InfoRow
            label="Language"
            value={spoken_languages?.join(" · ")}
          />
          <InfoRow label="Budget" value={budget} />
          <InfoRow label="Revenue" value={revenue} />
          <InfoRow label="Tagline">
            <span className="italic bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">
              {tagline}
            </span>
          </InfoRow>
          <InfoRow
            label="Production Companies"
            value={productionCompanies?.join(" · ")}
          />
        </div>
      </div>
    </section>
  );
}
