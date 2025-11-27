import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/4.png";
import logo from "../assets/images/logo (1).png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
  };

  return (
    <div className="flex min-h-screen bg-indigo-100">
      {/* Right side image for md+ screens */}
      <div className="hidden md:flex flex-1 relative">
        {/* Background Image */}
        <img
          src={loginImage}
          alt="Login"
          className="w-full h-full object-cover"
        />

        {/* Logo at the top */}
        <div className="absolute top-15 left-20 ">
          <img src={logo} alt="Logo" className="w-40 h-auto " />
        </div>

        {/* Overlay message */}
        <div className="absolute inset-0 flex items-center bottom-50 left-20 ">
          <h2 className="text-white text-7xl font-bold p-4 rounded ">
            Hit your Saving Goal
          </h2>
        </div>
      </div>

      {/* Left side - form */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20">
        <div className="py-20 px-10 md:px-5 bg-white rounded-lg mt-10 shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-indigo-800 text-white p-3 rounded-md hover:bg-indigo-700"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm">
            Forgot your password?{" "}
            <Link to="/reset-password" className="text-indigo-600">
              Reset
            </Link>
          </p>

          <p className="mt-2 text-sm">
            New here?{" "}
            <Link to="/signup" className="text-indigo-600">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Back to home button */}
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 underline mt-4 cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
