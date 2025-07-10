import { yupResolver } from "@hookform/resolvers/yup";
import type { RegisterFormValues } from "../../types/registerForm.types";
import { registerSchema } from "../../schema/register.schema";
import { useForm, type SubmitHandler } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log("Register Data:", data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl font-bold text-center mb-4">Sign Up</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full  px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full  px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
      </div>
      <div className="mb-4">
        <input
          type="tel"
          placeholder="Phone"
          {...register("phone")}
          className="w-full  px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full  px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
      </div>

      <div className="mb-4">
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          className="w-full  px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm mt-1">
          {errors.confirmPassword?.message}
        </p>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
