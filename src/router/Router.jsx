import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "../components/layouts/NavLayout";
import HomeLayout from "../components/layouts/HomeLayout";
import Products from "../pages/products/Products";
import ProductDetail from "../pages/products/ProductDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<HomeLayout />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
