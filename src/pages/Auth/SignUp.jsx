import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../../assets/images/4.png";
import Logo from "../../assets/images/logo-1.png";

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
          src={SignupImage}
          alt="Sign Up"
          className="w-full h-full object-cover"
        />

        {/* Logo at the top */}
        <div className="absolute top-15 left-20 ">
          <img src={Logo} alt="Logo" className="w-40 h-auto " />
        </div>

        {/* Overlay message */}
        <div className="absolute inset-0 flex items-center bottom-50 left-20 ">
          <h2 className="text-white text-7xl font-bold p-4 rounded ">
            Hit your Saving Goal
          </h2>
        </div>
      </div>

      {/* Left side - form */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 text-[#3A3A3A]">
         <div className="justify-right">
          {/* Back to Home button */}
          <button
            onClick={() => navigate("/")}
            className="underline mt-4 cursor-pointer"
          >
            Back to Home
          </button>
         </div>

        <div className="py-10 px-10 md:px-6 bg-white rounded-lg mt-10 shadow-lg">
         <div className="mt-6 mb-6">
           <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
          <p className="text-[1rem]">Enter email and password to login</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* <div className="flex flex-col md:flex-row gap-4"> */}
              <input
                type="text"
                placeholder="First Name"
                className=" border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-[#AFAFAF] p-3 h-11 outline-none rounded-md"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            {/* </div> */}

            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="border border-[#AFAFAF] h-11 p-3  outline-nonerounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-[#1842B4] h-11 text-white p-3 rounded-md hover:bg-[#1842B4]"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1842B4]">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
