import { useEffect, useState } from "react";
import type { Product } from "../../types/product.types.ts";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProducts } from "../../services/productService.ts";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  console.log("product list log");

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError("Không thể tải sản phẩm! Lỗi: " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm")) {
      try {
        await deleteProduct(id);
        alert("Xóa sản phẩm thành công");
        await fetchProducts();
      } catch (err) {
        alert("Lỗi khi xóa sản phẩm! Lỗi: " + err);
      }
    }
  };

  return (
    <>
      <h1>Product management </h1>
      <div>
        <h2>Danh sách sản phẩm</h2>
        <button onClick={() => navigate("/products/add")}>Thêm sản phẩm</button>

        {loading ? (
          <div className="loader-wrapper">
            <div className="loader"></div>
          </div>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default ProductList;
