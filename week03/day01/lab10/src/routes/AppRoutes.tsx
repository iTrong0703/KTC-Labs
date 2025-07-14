import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductList.tsx";
import ProductAdd from "../components/ProductAdd.tsx";
import ProductDetail from "../components/ProductDetail.tsx";
import ProductEdit from "../components/ProductEdit.tsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div
        className="app__container"
        style={{ padding: "20px", width: "100%" }}
      >
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/edit" element={<ProductEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
