
import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../features/movieApis';
export default function useMovies({ query }) {
  const {data , isLoading , error} = useQuery({
    queryKey:["getMovies", query],
    queryFn: () => getMovies(query)
  })
  return {data , isLoading , error}
}
