import type { FormValues, TodoFormProps } from "../../types/todo.types.ts";
import { useForm } from "react-hook-form";

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    onAdd(data.title);
    reset(); // xóa nội dung input sau khi submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", { required: "This field is required" })}
        placeholder="Enter a todo"
        style={{
          padding: "5px",
          width: "300px",
        }}
      />
      <br />
      {errors.title && (
        <span style={{ color: "red" }}>{errors.title.message}</span>
      )}
      <br />
      <button
        type="submit"
        style={{ marginTop: "10px", padding: "5px", marginBottom: "20px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
