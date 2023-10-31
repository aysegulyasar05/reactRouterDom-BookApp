import { Link } from "react-router-dom"


const Cards = ({book}) => {
  return (
    <div className="card rounded shadow p-1">
      <img src={book.image}  />
      <div className="card-body">
        <h4>{book.title}</h4>
        <p>{book.author}</p>
      </div>
      <Link className="btn btn-secondary" to={`/product/${book.id}`}>Details</Link>
    </div>
  )
}

export default Cards
