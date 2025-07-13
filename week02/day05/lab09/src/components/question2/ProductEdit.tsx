import { useForm } from "react-hook-form";
import type { ProductInput } from "../../types/product.types.ts";
import { useEffect } from "react";
import {
  getProductById,
  updateProduct,
} from "../../services/productService.ts";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductInput>();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const data = await getProductById(id);
        reset({
          name: data.name,
          price: data.price,
          brand: data.brand,
          category: data.category,
        });
      } catch (err) {
        alert("Không thể tải sản phẩm. Lỗi là " + err);
      }
    };
    fetchData();
  }, [id, reset]);

  const onSubmit = async (data: ProductInput) => {
    if (!id) return;
    const confirmed = window.confirm("Bạn có chắc muốn cập nhật sản phẩm?");
    if (!confirmed) return;

    try {
      await updateProduct(id, data);
      alert("Cập nhật thành công");
      navigate("/question2");
    } catch (err) {
      alert("Lỗi khi cập nhật sản phẩm. Lỗi là " + err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chỉnh sửa sản phẩm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register("name", { required: "Name is required" })} />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <label>
          Price:
          <input {...register("price", { required: "Price is required" })} />
        </label>
        {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}

        <label>
          Brand:
          <input {...register("brand", { required: "Brand is required" })} />
        </label>
        {errors.brand && <p style={{ color: "red" }}>{errors.brand.message}</p>}

        <label>
          Category:
          <input
            {...register("category", { required: "Category is required" })}
          />
        </label>
        {errors.category && (
          <p style={{ color: "red" }}>{errors.category.message}</p>
        )}

        <br />
        <button
          type="submit"
          style={{ padding: "5px", marginRight: "10px", marginTop: "10px" }}
        >
          Update
        </button>
        <button
          type="button"
          style={{ padding: "5px" }}
          onClick={() => navigate("/question2")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
