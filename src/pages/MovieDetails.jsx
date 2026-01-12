import { useParams } from "react-router-dom"

export default function MovieDetails() {
  const {id} = useParams()
  console.log(id)
  return (
    <div>MovieDetails</div>
  )
}
