import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { FaFilePdf, FaFileWord, FaDownload } from "react-icons/fa";

const Resume = () => {
  const { theme } = useTheme();
  const [selectedFormat, setSelectedFormat] = useState("pdf");

  const resumeFiles = {
    pdf: "https://github.com/srujankothuri/srujan_portfolio/blob/main/Kothuri_Venkata_Srujan_Resume.pdf?raw=true",
    docx: "https://github.com/srujankothuri/srujan_portfolio/blob/main/Kothuri_Venkata_Srujan_Resume.docx?raw=true",
  };

  const getIcon = (format) => {
    return format === "pdf" ? (
      <FaFilePdf className="text-red-500 text-2xl" />
    ) : (
      <FaFileWord className="text-blue-500 text-2xl" />
    );
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden transition-all duration-500 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Highlights Header */}
      <h2 className="text-5xl font-bold text-center mb-6 tracking-wide hover:scale-105 transition-all duration-500">
        Highlights
      </h2>

      {/* Achievements Section */}
      <div className="text-lg leading-relaxed max-w-3xl space-y-6 text-center relative z-10">
        {[ 
          "🎓 Secured MRD Scholarship for five consecutive semesters, earning a 40% fee waiver for being in the top 20% of the university.",
          "🚀 Hands-on experience with cutting-edge AI technologies, including LLMs, Transformers, and Generative AI.",
          "💡 Designed and deployed AI-powered solutions for real-world automation and natural language processing.",
          "🛠️ Expertise in TensorFlow, PyTorch, LangChain, OpenAI APIs, and FastAPI for AI model development and deployment."
        ].map((text, index) => (
          <motion.p 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.5 }} 
            className="text-xl font-medium transition-all duration-300 hover:text-blue-400"
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Download Resume Section */}
      <div className="text-center mt-12 relative z-10">
        <h3 className="text-3xl font-semibold transition-all duration-500 hover:scale-105">
          Download my resume to know more...
        </h3>

        {/* Centered PDF Dropdown and Download Button */}
        <div className="flex justify-center items-center gap-4 mt-6">
          {/* Custom Select Box */}
          <div className="relative w-48">
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className={`w-full p-4 border rounded-xl font-semibold cursor-pointer transition-all duration-300 shadow-inner outline-none focus:ring-2 focus:ring-blue-500 ${theme === "dark" ? "bg-[#2a415b] text-white border-gray-600 hover:bg-[#354d69]" : "bg-white text-gray-900 border-gray-400 hover:bg-gray-200"}`}
            >
              <option value="pdf">PDF</option>
              <option value="docx">DOCX</option>
            </select>
            <div className="absolute top-3 right-4">{getIcon(selectedFormat)}</div>
          </div>

          {/* Download Button */}
          <a
            href={resumeFiles[selectedFormat]}
            download={`Srujan_Kothuri_Resume.${selectedFormat}`}
            className="relative flex items-center gap-3 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:bg-blue-500 hover:text-white"
          >
            <FaDownload className="text-xl animate-bounce" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
