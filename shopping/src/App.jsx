import {Routes, Route} from "react-router-dom";
import { Fragment } from "react";
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails";
import CartListPage from "./pages/cartList";


function App() {
  
  return <Fragment>
    <Routes>
    <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
    </Routes>
    </Fragment>

}

export default App;
