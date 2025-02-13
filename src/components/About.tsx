import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Database, Server, Bot, Network } from "lucide-react";
import { useTheme } from "./ThemeContext";

export const About = () => {
  const { theme } = useTheme();

  const skills = [
    { icon: Brain, title: "Machine Learning", desc: "Worked on cutting-edge ML models like BERT, XLNet,ViT and Stable Diffusion along with ML libraries such as TensorFlow, Keras, and PyTorch. My experience includes developing and optimizing models for NLP, AI-driven automation, and deep learning applications" },
    { icon: Database, title: "Data Science", desc: "Worked on time series forecasting, developed a distributed file system like HDFS for big data processing, and built predictive models such as house price prediction using advanced machine learning techniques to extract meaningful insights from data. " },
    { icon: Bot, title: "AI Development", desc: "Designed and built intelligent chatbots and autonomous AI agents, leveraging NLP techniques for sentiment analysis and text summarization. Focused on developing AI-driven solutions that enhance automation,decision-making and streamline communicaion." },
    { icon: Server, title: "MLOps", desc: "Built and deployed ML models trained on well-structured datasets, integrating MLOps practices like CI/CD, automated retraining, and performance monitoring. Using tools like Docker, Kubernetes, and MLflow, I ensured scalable and efficient model deployment." },
    { icon: Code, title: "Full Stack Development", desc: "Built dynamic full-stack applications using Next.js, Flask, and Node.js, creating responsive UIs and efficient APIs. With MongoDB as the database, I ensured seamless data management and integration for robust web applications." },
    { icon: Network, title: "Cloud Computing", desc: "Deployed scalable applications on cloud platforms, leveraging AWS and GCP for hosting, storage, and computing. With containerization using Docker and orchestration with Kubernetes, I ensured efficient deployment and management of services." },
  ];

  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 1, delayChildren: 0.75}, // First card appears at 1.3s, others at 0.75s intervals
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className={`w-full min-h-screen py-20 px-4 ${
        theme === "dark" ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-white to-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold mb-16 text-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className={`text-xl font-light ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            As an AI/ML intern at Zenshastra and a final-year student at PES University, I'm passionate about developing 
            intelligent systems that solve real-world problems. My focus lies in machine learning,artificial intelligence,data science and Full Stack.
          </p>
        </motion.div>

        {/* Animated Grid Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((item, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-xl backdrop-blur-md shadow-lg transition-all duration-100 relative border border-gray-300/20 ${
                theme === "dark" ? "bg-gray-800/50 hover:shadow-blue-500/50" : "bg-white/50 hover:shadow-blue-400/50"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }}
            >
              {/* Icon Section */}
              <motion.div
                className="mb-6 inline-block p-4 bg-blue-600 text-white rounded-xl shadow-md"
                whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.2, ease: "easeInOut" } }}
              >
                <item.icon size={36} />
              </motion.div>
              <h3
                className={`text-xl font-semibold mb-4 tracking-wide ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>
              <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
