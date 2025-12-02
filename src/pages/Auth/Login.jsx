import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/4.png";
import logo from "../../assets/images/logo-1.png";

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://suresave.pythonanywhere.com/dj-rest-auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_or_phone: emailOrPhone,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Handle backend errors
        const errorMsg =
          data?.non_field_errors?.[0] ||
          data?.detail ||
          data?.message ||
          "Login failed. Check your credentials.";

        setError(errorMsg);
        return;
      }

      // Save token if returned
      if (data?.key || data?.access_token) {
        localStorage.setItem("accessToken", data.key || data.access_token);
      }

      setSuccess("");
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      console.error("Login error:", err);
      setError("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen bg-indigo-100">
      {/* Right side image */}
      <div className="hidden md:flex flex-1 relative">
        <img
          src={loginImage}
          alt="Login"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-15 left-20">
          <img src={logo} alt="Logo" className="w-40 h-auto" />
        </div>
        <div className="absolute inset-0 flex items-center bottom-50 left-20">
          <h2 className="text-white text-7xl font-bold p-4 rounded">
            Hit your Saving Goal
          </h2>
        </div>
      </div>

      {/* Left side - form */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 text-[#3A3A3A]">
        <div className="text-right">
          <button
            onClick={() => navigate("/")}
            className="underline mt-4 cursor-pointer"
          >
            Back to Home
          </button>
        </div>

        <div className="py-10 px-10 md:px-6 bg-white rounded-lg mt-10 shadow-lg">
          <div className="mt-6 mb-6">
            <h1 className="text-4xl font-bold mb-2">Login</h1>
            <p className="text-[1rem]">Enter your credentials to login</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <div className="flex flex-col w-full">
              <label className="mb-1 font-semibold">Email or Phone</label>
              <input
                type="text"
                className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-1 font-semibold">Password</label>
              <input
                type="password"
                className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="mb-4 text-sm">
              Forgot your password?{" "}
              <Link to="/reset-password" className="text-[#1842B4]">
                Reset
              </Link>
            </p>

            <button
              type="submit"
              className="bg-[#1842B4] h-11 text-white p-3 rounded-md hover:bg-[#163a9a]"
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
      </div>
    </div>
  );
}
