import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Cards from "../components/Cards";

const Products = () => {

const[books,setBooks]= useState(null);
const[filteredBooks,setFilteredBooks]=useState(null);
const inputRef = useRef();

  useEffect(() => {
    axios
    .get(" http://localhost:3030/books")
    .then((res) => {
      setBooks(res.data), 
      setFilteredBooks(res.data);
    })
    .catch((err)=> {err});
  }, []);

  if(books === 0 ) return 'LoAding..'
  
const handleClick = (e) => {
  e.preventDefault();
  const query = inputRef.current.value.toLowerCase();

  //aratilan isimle denk gelen kitaplar

  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(query)
  );
 setFilteredBooks(filtered);
 
  inputRef.current.value=''
}


  return (
    <div>
      <div className="d-flex">
        <h4 className="mx-2 mt-3">{filteredBooks?.length} book founded..</h4>
        <form className="d-flex gap-2 form-control align-items-center justfy-content-center">
          <input
            type="text"
            className="form-control shadow rounded"
            ref={inputRef}
            
          />
          <button className="btn btn-secondary " onClick={handleClick}>
            Search
          </button>
        </form>
      </div>
      <div id="cards-container">
        {filteredBooks?.map((book) => (
          <Cards key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
