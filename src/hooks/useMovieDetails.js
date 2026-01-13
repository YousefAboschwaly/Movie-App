import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../features/movieApis";
import { formatMoney, formatReleaseDate } from "../utils";

export default function useMovieDetails(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
    select: (movie) => ({
      title: movie.title,
      trailer: movie.videos?.results?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  ) || null,
      year: movie.release_date?.split("-")[0] || "N/A",

      duration: movie.runtime
        ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
        : "N/A",

      rating:
        movie.release_dates?.results?.find((r) => r.iso_3166_1 === "US")
          ?.release_dates?.[0]?.certification || "NR",

      score: movie.vote_average ? movie.vote_average.toFixed(1) : "N/A",

      votes: movie.vote_count || "N/A",
      homepage: movie.homepage,
      overview: movie.overview,
      tagline: movie.tagline || "N/A",
      status: movie.status,
      releaseDate: formatReleaseDate(movie.release_date),

      budget: movie.budget ? formatMoney(movie.budget) : "N/A",

      revenue: movie.revenue ? formatMoney(movie.revenue) : "N/A",

      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,

      genres: movie.genres?.map((g) => g.name) ?? [],
      countries: movie.production_countries?.map((c) => c.name) ?? [],
      spoken_languages:
        movie.spoken_languages?.map((l) => l.english_name || l.name) ?? [],
      productionCompanies: movie.production_companies?.map((c) => c.name) ?? [],
    }),
  });

  return { data, isLoading, error };
}
