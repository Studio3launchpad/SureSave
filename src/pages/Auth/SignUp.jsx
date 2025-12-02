import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../../assets/images/4.png";
import Logo from "../../assets/images/logo-1.png";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password1 !== password2) {
      setError("Passwords do not match.");
      return;
    }

    const payload = {
      email,
      password1,
      password2,
      first_name: firstName,
      last_name: lastName,
      phone_number: phone_number,
    };

    console.log("Sending payload:", payload); // Debugging

    try {
      const response = await fetch(
        "https://suresave.pythonanywhere.com/dj-rest-auth/registration/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log("Response from server:", data); // Debugging

      if (!response.ok) {
        // Display all errors returned by DRF
        let errorMessages = [];
        for (const key in data) {
          if (Array.isArray(data[key])) {
            errorMessages.push(`${key}: ${data[key].join(" ")}`);
          } else {
            errorMessages.push(`${key}: ${data[key]}`);
          }
        }
        setError(errorMessages.join(" | "));
        return;
      }

      setSuccess("Signup successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-indigo-100">
      {/* Right side image for md+ screens */}
      <div className="hidden md:flex flex-1 relative">
        <img
          src={SignupImage}
          alt="Sign Up"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-15 left-20">
          <img src={Logo} alt="Logo" className="w-40 h-auto" />
        </div>
        <div className="absolute inset-0 flex items-center bottom-50 left-20">
          <h2 className="text-white text-7xl font-bold p-4 rounded">
            Hit your Saving Goal
          </h2>
        </div>
      </div>

      {/* Left side - form */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 text-[#3A3A3A]">
        <div className="justify-right">
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
            <p className="text-[1rem]">Create a new account</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="mb-1 font-semibold">First Name</label>
                <input
                  type="text"
                  className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="mb-1 font-semibold">Last Name</label>
                <input
                  type="text"
                  className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-1 font-semibold">Phone Number</label>
              <input
                type="tel"
                className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
                value={phone_number}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-1 font-semibold">Email Address</label>
              <input
                type="email"
                className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-1 font-semibold">Password</label>
              <input
                type="password"
                className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-1 font-semibold">Confirm Password</label>
              <input
                type="password"
                className="border border-[#AFAFAF] h-11 p-3 outline-none rounded-md"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#1842B4] h-11 text-white p-3 rounded-md hover:bg-[#163a9a] cursor-pointer"
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
