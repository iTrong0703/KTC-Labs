import { yupResolver } from "@hookform/resolvers/yup";
import type { LoginFormValues } from "../../types/loginForm.types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema } from "../../schema/login.schema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log("Login Data:", data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl font-bold text-center mb-4">Sign In</h2>
      <div className="mb-4 ">
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
      </div>

      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full  px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
