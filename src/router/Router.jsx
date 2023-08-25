import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "../components/layouts/NavLayout";
import HomeLayout from "../components/layouts/HomeLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<HomeLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
