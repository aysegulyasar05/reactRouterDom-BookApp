import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/ProductDetail";
import Undefined from "./pages/Undefined";
import "./App.css"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Products />} />
        <Route path= "/product/:productId" element={<ProductDetail/>}/>
        <Route path= "*" element={<Undefined/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;