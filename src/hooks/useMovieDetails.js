import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../features/movieApis";

export default function useMovieDetails(id) {
 const {data,isLoading,error} = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => getMovieDetails(id),
 })
  return {data,isLoading,error};
}
