import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImage from "../assets/images/4.png";
import logo from "../assets/images/logo (1).png";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up:", firstName, lastName, phone, email, password);
  };

  return (
    <div className="flex min-h-screen bg-indigo-100">
      {/* Right side image for md+ screens */}
      <div className="hidden md:flex flex-1 relative">
        {/* Background Image */}
        <img
          src={signupImage}
          alt="Sign Up"
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
          <h1 className="text-4xl font-bold mb-6">Sign Up</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded-md flex-1"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded-md flex-1"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-3 rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
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
              Create Account
            </button>
          </form>

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600">
              Login
            </Link>
          </p>

          {/* Back to Home button */}
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 underline mt-4 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
