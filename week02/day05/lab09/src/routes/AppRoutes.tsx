import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductList from "../components/question2/ProductList.tsx";
import ProductAdd from "../components/question2/ProductAdd.tsx";
import ProductDetail from "../components/question2/ProductDetail.tsx";
import ProductEdit from "../components/question2/ProductEdit.tsx";
import Question1Component from "../components/Question1Component.tsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div
        className="app__container"
        style={{ padding: "20px", width: "100%" }}
      >
        <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <Link to="/question1">
            <button>Câu 1 - Todo List</button>
          </Link>
          <Link to="/question2">
            <button>Câu 2 - Product App</button>
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div style={{ textAlign: "center" }}>
                <h2>Chọn câu hỏi muốn làm</h2>
                <p>Nhấn vào nút ở trên để xem từng ứng dụng</p>
              </div>
            }
          />
          <Route path="/question1" element={<Question1Component />} />
          <Route path="/question2" element={<ProductList />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/edit" element={<ProductEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
