import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Terjadi kesalahan");
        setIsLoading(false);
        return;
      }

      const data = await response.json();

      console.log("Session:", data.session);
      navigate("/dashboard");
    } catch (err: any) {
      setErrorMessage("Terjadi kesalahan, silakan coba lagi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] px-6 flex flex-col justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-[350px] flex flex-col gap-1 border border-gray-400 py-11 px-7 rounded-xl"
      >
        <h1 className="text-xl lg:text-2xl font-bold text-center mb-7">
          Login
        </h1>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full block border border-grey rounded-sm focus:outline-dark/50 focus:shadow-blueOutline focus:rounded-md transition-all ease-in-out duration-300 px-2 py-1"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full block border border-grey rounded-sm focus:outline-dark/50 focus:shadow-blueOutline focus:rounded-md transition-all ease-in-out duration-300 px-2 py-1"
          />
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-dark text-white py-2 mt-4 rounded-sm"
        >
          {isLoading ? "Logging in..." : "Masuk"}
        </button>
        {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
