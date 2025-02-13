import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const projects = [
  {
    title: "Automated Legal Case Judgement Predictor",
    category: "Machine Learning, Natural Language Processing",
    image: "https://github.com/srujankothuri/srujan_portfolio/blob/main/legal_auto.jpg?raw=true",
    description: "An Automated system that predicts the judgement of legal cases and also provides corresponding explanation for the same.",
    techStack: ["Transformers", "Scikit-learn", "TensorFlow", "NLP", "ML"],
    githubLink: "https://github.com/srujankothuri/Legal-prediction-explanation",
  },
  {
    title: "LegalSmart Chatbot",
    category: "Natural Language Processing, Conversational AI",
    image: "https://raw.githubusercontent.com/srujankothuri/srujan_portfolio/refs/heads/main/legal-bot.webp",
    description: "An AI chatbot that answers common legal questions for both naive users and legal professionals.",
    techStack: ["Mistral", "RAG", "Langchain", "AI", "NLP", "LLM"],
    githubLink: "https://github.com/srujankothuri/LegalSmart-Chatbot",
  },
  {
    title: "HIVE - An All-in-One Hub for Productivity & Communication",
    category: "Full Stack Development",
    image: "https://github.com/srujankothuri/srujan_portfolio/blob/main/fullstac.jpg?raw=true",
    description: "A fullstack app that enables users to add personal notes, upload files visible to all logged-in users, and chat with others.",
    techStack: ["Flask", "SqlAlchemy", "Pandas", "Python", "Socket.io"],
    githubLink: "https://github.com/srujankothuri/HIVE_Hub-of_productivity-communication",
  },
  {
    title: "FaceDetectCV",
    category: "Computer Vision",
    image: "https://github.com/srujankothuri/srujan_portfolio/blob/main/comp-vison.png?raw=true",
    description: "An interactive app that identifies all faces in an image using computer vision's object detection concept, even marking faces in live video feeds.",
    techStack: ["OpenCV", "Python", "scikit-learn", "Deep Learning", "TensorFlow"],
    githubLink: "https://github.com/srujankothuri/FaceDetectCV",
  },
];

export const Projects = () => {
  const { theme } = useTheme();

  return (
    <section className={`w-full min-h-screen py-20 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Title with emoji */}
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My Projects 
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative group rounded-xl overflow-hidden border border-transparent hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 1 }} // 1-second delay between each card
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px 5px rgba(59, 130, 246, 0.5)", // Same glow color for both themes
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  theme === "dark" ? "from-black" : "from-transparent"
                } to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8`}
              >
                <div>
                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-white"}`}>
                    {project.title}
                  </h3>
                  {/* Category */}
                  <p className={`${theme === "dark" ? "text-blue-400" : "text-lime-500"} mb-2`}>
                    {project.category}
                  </p>
                  {/* Description */}
                  <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-300"} mb-2`}>
                    {project.description}
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          theme === "dark" ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Know More Text Link */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-block text-sm font-semibold transition-all duration-300 ${
                      theme === "dark"
                        ? "text-blue-400 hover:text-white"
                        : "text-white hover:text-blue-700"
                    }`}
                  >
                    Know More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;