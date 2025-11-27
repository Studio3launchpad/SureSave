import { useState } from "react";
import exampleImage from "../assets/images/accordion (1).png";

export default function SubTopicSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const subTopics = [
    {
      title: "Step 1: Create Profile",
      content:
        "Suresave helps artisans, fashion designers, and small business owners save effortlessly, track profit, and share success.",
    },
    {
      title: "Step 2: How does Auto-Save work?",
      content:
        "Auto-Save moves a portion of your earnings automatically into your savings.",
    },
    {
      title: "Step 3: What is Target Saving?",
      content:
        "Target Saving lets you create a savings goal and track your progress.",
    },
    {
      title: "Step 4: Group Saving",
      content:
        "Team up with friends or fellow tailors. Everyone saves at their own pace, and everyone controls their own money.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-10">
      {/* ROW WITH LEFT + RIGHT */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* LEFT COLUMN */}
        <div className="flex-1 space-y-4">
          {subTopics.map((topic, index) => (
            <div
              key={index}
              className="rounded-lg p-3 border border-gray-200 shadow-sm"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full text-left font-semibold hover:text-indigo-600 flex justify-between items-center"
              >
                {topic.title}

                {/* Arrow */}
                <span className="ml-2 text-indigo-600">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* DROPDOWN CONTENT */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{topic.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={exampleImage}
            alt="Illustration"
            className=" rounded-lg shadow-lg cursor-pointer"
          />
        </div>
      </div>

      {/* SEE MORE UNDER BOTH COLUMNS */}
      <div className="text-center mt-10">
        <button className="underline text-indigo-600 cursor-pointer">
          See more
        </button>
      </div>
    </div>
  );
}
