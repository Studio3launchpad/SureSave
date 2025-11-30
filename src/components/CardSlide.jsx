import { useState, useEffect } from "react";
import Img1 from "../assets/images/1.png";
import Img2 from "../assets/images/post-landscape-3.jpg";
import Img3 from "../assets/images/post-landscape-5.jpg";

export default function CardSlide() {
  const images = [Img1, Img2, Img3]; // Add your images here
  const [index, setIndex] = useState(0);

  // Automatic slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full md:w-full rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative h-75 md:h-100">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
