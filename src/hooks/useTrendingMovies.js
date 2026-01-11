import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../features/appwrite";

export default function useTrendingMovies() {
  const {data , isLoading , error} = useQuery({
    queryKey: ["trending-movies"],
    queryFn: getTrendingMovies,
  })
  return {data , isLoading , error};
}
