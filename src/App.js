
import {Routes,Route} from "react-router-dom";
import About from "./pages/About/About";
import CheckOut from "./pages/CheckOut/CheckOut";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Footer from "./pages/Shared/Footer";
import Header from "./pages/Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductDetail></ProductDetail>} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
