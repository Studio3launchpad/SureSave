import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-4">
      
      {/* Reset card */}
      <div className="w-full max-w-md p-8 border rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>

        <form onSubmit={handleReset} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-3 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-indigo-800 text-white p-3 rounded-md hover:bg-indigo-700 cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Remember your password?{" "}
          <Link to="/login" className="text-indigo-600 cursor-pointer">
            Login
          </Link>
        </p>
      </div>

      {/* Back to home button */}
      <button
        onClick={() => navigate("/")}
        className="text-blue-600 underline mt-6 cursor-pointer"
      >
        Back to Home
      </button>

    </div>
  );
}
