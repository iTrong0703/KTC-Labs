import { getProductById } from "../../services/productService.ts";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product.types.ts";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (id) {
          const data = await getProductById(id);
          setProduct(data);
        }
      } catch (err) {
        setError("Không thể tải sản phẩm. Lỗi là: " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!product) return <p>Sản phẩm không tồn tại.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chi tiết sản phẩm</h2>
      <ul>
        <li>
          <strong>ID:</strong> {product.id}
        </li>
        <li>
          <strong>Name:</strong> {product.name}
        </li>
        <li>
          <strong>Price:</strong> {product.price}
        </li>
        <li>
          <strong>Brand:</strong> {product.brand}
        </li>
        <li>
          <strong>Category:</strong> {product.category}
        </li>
      </ul>
      <button
        onClick={() => navigate("/question2")}
        style={{
          marginTop: "20px",
          padding: "5px",
          cursor: "pointer",
        }}
      >
        Return
      </button>
    </div>
  );
};

export default ProductDetail;
