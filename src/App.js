
import { Routes, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut/CheckOut";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductDetails2 from "./pages/ProductDetail/ProductDetails2";
import Footer from "./pages/Shared/Footer";
import Header from "./pages/Shared/Header";
import Shop from "./pages/Shop/Shop";
import ProductDetails3 from "./pages/ProductDetail/ProductDetails3";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/product/:productId" element={


          <RequireAuth>

            <ProductDetail></ProductDetail>

          </RequireAuth>

        } />


        <Route path="/modernProduct/:modernProductId" element={


          <RequireAuth>

            <ProductDetails2></ProductDetails2>

          </RequireAuth>

        } />



        <Route path="/specialProduct/:specialProductId" element={


          <RequireAuth>

            <ProductDetails3></ProductDetails3>

          </RequireAuth>

        } />



        <Route path="/checkout" element={

          <RequireAuth>

            <CheckOut />

          </RequireAuth>

        } />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />


      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
