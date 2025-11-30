import { useState } from "react";
import logo from "../assets/images/logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  //
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-[#1842B4]">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-[#1842B4]">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-[#1842B4]">
            FAQ
          </a>
        </div>
        <div className="hidden md:flex gap-3">
          <Link to="/Login">
            <button className="px-9 py-2  text-[#1842B4] rounded-xl  border-2 hover:border-[#1842B4] cursor-pointer">
              Login
            </button>
          </Link>
          <Link to="/SignUp">
            <button className="px-5 py-2 bg-[#1842B4] text-white rounded-lg hover:bg-[#1842B4] cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-[#1842B4]">
            Features
          </a>
          <a href="#" className="block text-gray-700 hover:text-[#1842B4]">
            Blog
          </a>
          <a href="#" className="block text-gray-700 hover:text-[#1842B4]">
            FAQ
          </a>
          <div className=" flex gap-3">
            <button className="px-5 py-2  text-[#1842B4] rounded-xl  border-2 border-[#1842B4]">
              Login
            </button>
            <button className="px-5 py-2 bg-[#1842B4] text-white rounded-lg hover:bg-[#1842B4]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
