import Navbar from "../../components/Navbar";
import CardSlide from "../../components/CardSlide";
import Image from "../../assets/images/frame-1.png";
import Image1 from "../../assets/images/frame-2.png";
import Image2 from "../../assets/images/frame-3.png";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import TestimonialSlider from "../../components/Testimonial";

function HomePage() {
  return (
    <div className="h-full">
      <Navbar />

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row pt-20 md:pt-38 px-20">
        {/* LEFT COLUMN */}
        <div className="flex-1 pt-10">
          <p className="text-pink-400 border-2 rounded-full inline-block px-3 py-1 bg-pink-200">
            Finance Solutions for You
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mt-4">
            Save Smart. Grow Bold
          </h1>

          <p className="mt-3 text-gray-600 max-w-md">
            Suresave helps artisans, fashion designers and small business owners
            save effortlessly, track profit and share success.
          </p>

          <div className="flex gap-3 pt-5">
            <Link to="/signup">
              <button className="px-5 py-2 h-11 bg-[#1842B4] text-white rounded-lg hover:bg-[#1842B4] cursor-pointer">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="px-5 py-2 h-11 text-[#1842B4] rounded-xl border-2 hover:border-[#1842B4] cursor-pointer">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex justify-center items-center pt-10 md:pt-0">
          <CardSlide />
        </div>
      </div>

      {/* WHY CHOOSE SECTION */}
      <div className="pt-20 pb-20 px-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-5xl font-bold text-gray-800 mt-4">
            Why choose <span className="text-[#1842B4]">Suresave</span>
          </h1>
          <p className="pt-5">
            Why choose <span className="text-[#1842B4]">Suresave</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row pt-9 justify-center items-center gap-4">
          <div className="w-full h-80 md:w-110 px-8">
            <img src={Image} alt="" className="w-140 md:w-110 cursor-pointer" />
            <h1 className="text-xl font-bold mt-4">Autosave</h1>
            <p className="mt-2 text-gray-600">
              Save fast. Save smart. Auto-Save helps you stay consistent by
              moving a portion of every job straight into your savings easily.
            </p>
          </div>
          <div className="w-full h-80 md:w-110 px-8">
            <img src={Image1} alt="" className="w-140 md:w-110 cursor-pointer" />
            <h1 className="text-xl font-bold mt-4">Target Saving</h1>
            <p className="mt-2 text-gray-600">
              Create a savings target and watch your progress grow. We keep you
              motivated with reminders and milestones.
            </p>
          </div>
          <div className="w-full h-80 md:w-110 px-8">
            <img src={Image2} alt="" className="w-140 md:w-110 cursor-pointer" />
            <h1 className="text-xl font-bold mt-4">Group Saving</h1>
            <p className="mt-2 text-gray-600">
              Team up with friends or fellow tailors. Everyone saves at their
              own pace, and everyone controls their own money.
            </p>
          </div>
        </div>

        <div className="text-center text-[#1842B4] mt-6">
          <button className="underline mt-6 cursor-pointer">see more</button>
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="pb-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-5xl font-bold text-gray-800 mt-4">
            How <span className="text-[#1842B4]">Suresave</span> Works
          </h1>
          <p className="pt-5">
            Why choose <span className="text-[#1842B4]">Suresave</span>
          </p>
        </div>
        <Dropdown />
      </div>

      {/* TESTIMONIALS & CTA SECTION */}
      <div className="bg-blue-50 pb-20">
        <h1 className="text-5xl md:text-4xl font-bold text-gray-800 mt-4 text-center py-10">
          What our users are saying
        </h1>
        <TestimonialSlider />

        <div className="bg-[#1842B4] mt-20 pb-20">
          <div className="text-center pt-10">
            <h1 className="text-5xl md:text-4xl font-bold mt-4 text-white py-5">
              Join Thousand of artisans saving smarter today!
            </h1>
            <p className="text-lg text-white">
              Start your journey to financial freedom and growth
            </p>
            <div className="flex justify-center pt-10">
              <a href="">
                <button className="rounded bg-white px-12 py-2 cursor-pointer">
                  Start Saving
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default HomePage;
