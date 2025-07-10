import { useState } from "react";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./form/RegisterForm";

type AuthMode = "login" | "register";

function Auth() {
  const [mode, setMode] = useState<AuthMode>("login");
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <div className="flex mb-6">
        <button
          onClick={() => setMode("login")}
          id="showLogin"
          className={`w-1/2 py-2 font-semibold ${
            mode === "login"
              ? "text-white bg-blue-500"
              : "text-gray-600 bg-gray-200"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setMode("register")}
          id="showRegister"
          className={`w-1/2 py-2 font-semibold ${
            mode === "register"
              ? "text-white bg-blue-500"
              : "text-gray-600 bg-gray-200"
          }`}
        >
          Sign Up
        </button>
      </div>
      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}

export default Auth;
