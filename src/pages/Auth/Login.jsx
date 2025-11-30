import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/4.png";
import logo from "../../assets/images/logo-1.png";

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
        <div className="py-10 px-10 md:px-5 bg-white rounded-lg mt-10 shadow-lg">
          <div className="mt-6 mb-6">
           <h1 className="text-4xl font-bold mb-2">Login</h1>
          <p className="text-[1rem]">Enter email and password to login</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="mb-4 text-sm">
            Forgot your password?{" "}
            <Link to="/reset-password" className="text-[#1842B4]">
              Reset
            </Link>
          </p>


            <button
              type="submit"
              className="bg-[#1842B4] text-white p-3 rounded-md hover:bg-[#1842B4]"
            >
              Login
            </button>
          </form>

          <p className="mt-2 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#1842B4]">
              Create Account
            </Link>
          </p>
        </div>

        {/* Back to home button */}
        <button
          onClick={() => navigate("/")}
          className="text-[#1842B4] underline mt-4 cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
