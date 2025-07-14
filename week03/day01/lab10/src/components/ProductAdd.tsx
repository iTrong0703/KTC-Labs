import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useTypes.ts";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "../api/productApi.ts";
import { useForm } from "react-hook-form";
import type { ProductInput } from "../types/product.types.ts";
import {
  clearMessages,
  setError,
  setSuccessMessage,
} from "../features/product/productSlice.ts";

const ProductAdd = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: existingProducts } = useGetProductsQuery();
  const [createProduct] = useCreateProductMutation();

  const {
    register,
    handleSubmit,
    setError: setFormError,
    formState: { errors },
  } = useForm<ProductInput>();

  const onSubmit = async (data: ProductInput) => {
    try {
      dispatch(clearMessages());

      // Check for duplicate names
      const isDuplicate = existingProducts?.some(
        (p) => p.name.toLowerCase() === data.name.toLowerCase(),
      );

      if (isDuplicate) {
        setFormError("name", { message: "Tên sản phẩm đã tồn tại" });
        return;
      }

      await createProduct(data).unwrap();
      dispatch(setSuccessMessage("Thêm sản phẩm thành công"));
      navigate("/");
    } catch (err) {
      dispatch(setError("Lỗi khi thêm sản phẩm. Lỗi: " + err));
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
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
