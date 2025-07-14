import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../api/productApi.ts";
import { useAppDispatch } from "../hooks/useTypes.ts";
import { useEffect } from "react";
import { setError } from "../features/product/productSlice.ts";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(id || "", {
    skip: !id,
  });

  useEffect(() => {
    if (error) {
      dispatch(setError("Không thể tải sản phẩm. Lỗi là: " + error));
    }
  }, [error, dispatch]);

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <p style={{ color: "red" }}>
        Không thể tải sản phẩm. Lỗi là: {String(error)}
      </p>
    );
  }

  if (!product) {
    return <p>Sản phẩm không tồn tại.</p>;
  }

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
        onClick={() => navigate("/")}
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
