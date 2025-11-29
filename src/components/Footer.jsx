import { Link } from "react-router-dom";
import image from "../assets/images/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-gray-700 py-12 px-20">
      {/* MAIN FOOTER CONTENT */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start">
        {/* LEFT SIDE — LOGO + TEXT + SOCIAL ICONS */}
        <div className="md:w-55">
          <a href="">
            <img src={image} alt="logo" className="w-32" />
          </a>

          <p className="mt-3 text-gray-400">
            Empowering Nigerian artisans to save smart and grow bold.
          </p>

          <div className="flex gap-4 mt-5">
            <a href="#" className="p-2 rounded-full hover:bg-gray-700">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-700">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-700">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-700">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — COMPANY + SUPPORT (PUSHED FULL RIGHT) */}
        <div className="flex gap-20 ml-2 mt-10 md:mt-0">
          {/* COMPANY */}
          <div>
            <h3 className="text-xl font-semibold text-gray-500">Company</h3>
            <ul className="mt-4 space-y-2">
              <li className="hover:text-indigo-400 cursor-pointer">About Us</li>
              <li className="hover:text-indigo-400 cursor-pointer">Blog</li>
              <li className="hover:text-indigo-400 cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-xl font-semibold text-gray-500">Support</h3>
            <ul className="mt-4 space-y-2">
              <li className="hover:text-indigo-400 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-indigo-400 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-indigo-400 cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT LINE */}
      <div className="border-t mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Suresave. All rights reserved.
      </div>
    </footer>
  );
}
