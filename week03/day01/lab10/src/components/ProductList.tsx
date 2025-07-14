import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../api/productApi.ts";
import { useAppDispatch, useAppSelector } from "../hooks/useTypes.ts";
import {
  clearMessages,
  setError,
  setSuccessMessage,
} from "../features/product/productSlice.ts";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, successMessage } = useAppSelector((state) => state.ui);

  const {
    data: products,
    isLoading,
    error: queryError,
  } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  useEffect(() => {
    if (queryError) {
      dispatch(setError("Không thể tải sản phẩm! Lỗi: " + queryError));
    }
  }, [queryError, dispatch]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm")) {
      try {
        dispatch(clearMessages());
        await deleteProduct(id).unwrap();
        dispatch(setSuccessMessage("Xóa sản phẩm thành công"));
      } catch (err) {
        dispatch(setError("Lỗi khi xóa sản phẩm! Lỗi: " + err));
      }
    }
  };

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <h1>Product management </h1>
      <div>
        <h2>Danh sách sản phẩm</h2>
        <button onClick={() => navigate("/products/add")}>Thêm sản phẩm</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <table border={1} cellPadding={8} style={{ marginTop: 16 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Tools</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.brand}</td>
                <td>{prod.category}</td>
                <td>
                  <button
                    onClick={() => navigate(`/products/${prod.id}`)}
                    style={{
                      backgroundColor: "#3498db",
                      color: "#fff",
                      marginRight: 8,
                    }}
                  >
                    Xem
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/products/${prod.id}/edit`);
                    }}
                    style={{
                      backgroundColor: "#f1c40f",
                      color: "#000",
                      marginRight: 8,
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(prod.id)}
                    style={{ backgroundColor: "#e74c3c", color: "#fff" }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
