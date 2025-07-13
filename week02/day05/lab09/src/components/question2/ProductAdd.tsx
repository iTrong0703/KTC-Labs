import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { ProductInput } from "../../types/product.types.ts";
import { createProduct, getProducts } from "../../services/productService.ts";

const ProductAdd = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ProductInput>();

  const onSubmit = async (data: ProductInput) => {
    try {
      const existing = await getProducts();
      const isDuplicate = existing.some(
        (p) => p.name.toLowerCase() === data.name.toLowerCase(),
      );

      if (isDuplicate) {
        setError("name", { message: "Tên sản phẩm đã tồn tại" });
        return;
      }

      await createProduct(data);
      alert("Thêm sản phẩm thành công");
      navigate("/question2");
    } catch (err) {
      alert("Lỗi khi thêm sản phẩm. Lỗi: " + err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Thêm sản phẩm</h2>
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
          Add
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

export default ProductAdd;
