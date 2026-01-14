import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { getMovies } from "../features/movieApis";



export default function useMovies({ query = "", page = 1 }) {
  const queryClient = useQueryClient();

  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["movies", query, page],
    queryFn: () => getMovies(query, page),
    staleTime: 5 * 60 * 1000, // 5 minutes
    placeholderData: (previousData) => previousData,
  });

  // Prefetch next page
  useEffect(() => {
    if (data && page < data.total_pages) {
      queryClient.prefetchQuery({
        queryKey: ["movies", query, page + 1],
        queryFn: () => getMovies(query, page + 1),
        staleTime: 5 * 60 * 1000,
      });
    }
  }, [data, page, query, queryClient]);

  return {
    movies: data?.results || [],
    totalPages: data?.total_pages || 0,
    totalResults: data?.total_results || 0,
    currentPage: data?.page || 1,
    isLoading,
    isFetching,
    error,
  };
}
