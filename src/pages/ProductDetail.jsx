import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"



const ProductDetail = () => {
const {productId}= useParams();
const [detail,setDetail]= useState(null)

useEffect(()=>{
    axios
    .get(`http://localhost:3030/books/${productId}`)
    .then((res)=>setDetail(res.data))
    .catch((err)=>{err})
},[])

if(!detail){
    return 'Loading...'
}
  return (
    <div
      className="container row justify-content-center align-items-center mt-2"
      style={{ height: "85vh" }}
    >
      <div className="col-md-6">
        <img className="detail-img img-fluid rounded shadow mx-5" src={detail.image} />
      </div>
      <div className="col-md-6">
        <h1 className="mt-1">{detail.title}</h1>
        <p>
          <span className="badge bg-secondary me-2">Author :</span>
          {detail.author}
        </p>
        <p>
          <span className="badge bg-secondary me-2">Page :</span>
          {detail.page}
        </p>
        <p>
          <span className="badge bg-secondary me-2">Year :</span>
          {detail.year}
        </p>
        <p>
          <span className="badge bg-secondary me-2">Desc :</span>
         
          {detail.description}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail
