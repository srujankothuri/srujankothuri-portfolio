import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  
  const textSections = [
  "Hi, I'm Srujan",
  "MS in Computer Science @ Northeastern University",
  "Boston, Massachusetts",
  "Former AI/ML Intern @ Zenshastra • B.Tech CSE @ PES University"
];



  const [typedText, setTypedText] = useState<string[]>(["", "", "", ""]);
  const [showImage, setShowImage] = useState(false);
  const [showExplore, setShowExplore] = useState(false);

  useEffect(() => {
    let sectionIndex = 0;
    let letterIndex = 0;

    const typeLetter = () => {
      if (sectionIndex < textSections.length) {
        if (letterIndex < textSections[sectionIndex].length) {
          setTypedText((prev) => {
            const newTypedText = [...prev];
            newTypedText[sectionIndex] += textSections[sectionIndex][letterIndex];
            return newTypedText;
          });
          letterIndex++;
          setTimeout(typeLetter, 40); // Typing speed
        } else {
          letterIndex = 0;
          sectionIndex++;
          setTimeout(typeLetter, 150); // Delay before the next line
        }
      } else {
        setTimeout(() => setShowImage(true), 800);  // Show image after text
        setTimeout(() => setShowExplore(true), 1500); // Show "Explore More" after image
      }
    };

    typeLetter();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-4rem)] text-center md:text-left px-8 md:px-20">
      
      {/* Left Section - Text */}
      <div className="md:w-1/2 space-y-5">
        {/* Typing Effect for Each Line */}
        <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          {typedText[0].split(" ").map((word, index) => (
            <span key={index} className={word === "Srujan" ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500" : ""}>
              {word}{" "}
            </span>
          ))}
        </h1>

        {typedText.slice(1).map((text, index) => (
          <p key={index} className="text-xl md:text-2xl text-slate-600 font-medium">
            {text}
          </p>
        ))}

        {/* Explore More - Blinking Text with Arrow */}
        {showExplore && (
          <div className="mt-40 flex items-center justify-center md:justify-start space-x-2">
            <p className="text-2xl font-semibold text-blue-500 dark:text-blue-400 animate-bounce">
              Explore More
            </p>
            <span className="text-blue-500 dark:text-blue-400 text-2xl animate-bounce">↓</span>
          </div>
        )}
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div
          className={`relative group transition-transform duration-1000 ease-out ${
            showImage ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <img 
            src="https://github.com/srujankothuri/srujankothuri-portfolio/blob/main/src/components/srujan.jpg?raw=true"  // Replace with actual image path
            alt="Srujan Kothuri"
            className="w-[450px] md:w-[500px] h-[400px] md:h-[450px] object-cover rounded-2xl shadow-lg transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3"
          />
          {/* Glowing Effect on Hover */}
          <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
        </div>
      </div>

    </div>
  );
};

export default Home;
