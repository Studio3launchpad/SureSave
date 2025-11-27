import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Joining EcoWave was a game changer for my career! The networking opportunities and interview coaching provided by Safehire made all the difference.",
    name: "Maria Lopez",
    job: "Environmental Analyst, EcoWave",
  },
  {
    text: "Safehire helped me gain confidence with mock interviews and mentorship. I landed my dream job within weeks!",
    name: "Daniel Otis",
    job: "Software Engineer, TechCore",
  },
  {
    text: "Amazing platform! The support and expert guidance helped me transition smoothly into my new role.",
    name: "Sarah Adeniyi",
    job: "Product Designer, InnovateX",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center py-9 bg-blue-50">
      <div className="w-full max-w-5xl overflow-hidden">
        {/* Slider container */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full shrink-0 px-4">
              <div className="bg-white rounded-xl shadow p-8 text-center">
                <div className="text-yellow-500 text-2xl mb-3">★★★★★</div>
                <p className="text-gray-600 leading-relaxed">{t.text}</p>

                <h3 className="font-semibold text-lg mt-5">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.job}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6 mb-9">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === i ? "bg-orange-300 scale-125" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
