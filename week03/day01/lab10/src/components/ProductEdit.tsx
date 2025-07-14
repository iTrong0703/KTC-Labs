import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/useTypes.ts";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../api/productApi.ts";
import type { ProductInput } from "../types/product.types.ts";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  clearMessages,
  setError,
  setSuccessMessage,
} from "../features/product/productSlice.ts";

const ProductEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data: product, isLoading } = useGetProductByIdQuery(id || "", {
    skip: !id,
  });
  const [updateProduct] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductInput>();

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        price: product.price,
        brand: product.brand,
        category: product.category,
      });
    }
  }, [product, reset]);

  const onSubmit = async (data: ProductInput) => {
    if (!id) return;

    const confirmed = window.confirm("Bạn có chắc muốn cập nhật sản phẩm?");
    if (!confirmed) return;

    try {
      dispatch(clearMessages());
      await updateProduct({ id, product: data }).unwrap();
      dispatch(setSuccessMessage("Cập nhật thành công"));
      navigate("/");
    } catch (err) {
      dispatch(setError("Lỗi khi cập nhật sản phẩm. Lỗi là " + err));
    }
  };

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }

  if (!product) {
    return <p>Không thể tải sản phẩm.</p>;
  }

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
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
