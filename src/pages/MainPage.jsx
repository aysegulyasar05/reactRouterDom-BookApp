import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" container mt-4">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item d-flex">
              <img
                src="https://cdn.vectorstock.com/i/1000x1000/38/56/design-advertising-poster-for-book-fair-vector-36333856.webp"
                className="d-block w-100"
                alt="photo"
              />
              <img
                src="https://images.ctfassets.net/pwv49hug9jad/2g5s9flIuE4MoCsicKwAaW/2ef4c38ab9759a91a2f273f59422e50e/book_talking_tips_to_fire_passion_for_reading_664_18015.jpg?fm=webp"
                className="d-block w-100"
                alt="photo"
              />
              <img
                src="https://assets.penguinrandomhouse.com/wp-content/uploads/2021/08/27115647/Obamas-Book-Picks-1200x628-1-512x268.jpg"
                className="d-block w-100"
                alt="photo"
              />
            </div>
         
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p className="lead text-center mt-5">
        You can see all new products in{" "}
        <span
          onClick={() => {
            navigate("/products");
          }}
          className="text-danger"
        >
          {" "}
          Products Page...
        </span>
      </p>
    </div>
  );
};

export default MainPage;
