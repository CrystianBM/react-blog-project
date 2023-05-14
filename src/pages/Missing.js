import { Link } from "react-router-dom"

export function Missing(){
  return (
    <main className="Missing">
        <h2> Post Not Found</h2>
        <p> Well, that's strange, but ok.</p>
        <p>
          <Link to="/"> Visit Our Homepage</Link>
        </p>
    </main>
  )
}