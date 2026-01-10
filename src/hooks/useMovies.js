
import { useQuery } from '@tanstack/react-query';
import { getAllMovies } from '../features/movieApis';
export default function useMovies() {
  const {data , isLoading , error} = useQuery({
    queryKey:["getAllMovies"],
    queryFn: getAllMovies
  })
  return {data , isLoading , error}
}
