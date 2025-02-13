import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const skills = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org/" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org/" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://www.java.com/" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org/" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com/" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com/" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev/" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org/" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org/" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com/" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://www.tensorflow.org/" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", url: "https://pytorch.org/" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", url: "https://opencv.org/" },
  { name: "Hadoop", icon: "https://vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg", url: "https://hadoop.apache.org/" },
  { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", url: "https://aws.amazon.com/" },
  { name: "scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", url: "https://scikit-learn.org/" },
  { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", url: "https://keras.io/" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://www.docker.com/" },
  { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg", url: "https://streamlit.io/" },
  { name: "GPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", url: "https://openai.com/gpt" },
  { name: "Transformers", icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg", url: "https://huggingface.co/docs/transformers/index" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/" }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.5 }, // First appears at 1.3s, others every 0.75s
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <motion.h1
        className={`text-4xl md:text-5xl font-bold mb-8 text-center ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h1>
      <motion.p
        className={`text-lg mb-8 text-center ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My proficiency lies in the following skills, tools, and technologies:
      </motion.p>

      {/* Animated Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 group"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="h-12 w-12 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2 }} // Enlarge the icon on hover
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-full bg-teal-500 opacity-0 group-hover:opacity-70 group-hover:blur-md transition-all duration-300"></div>
            </div>
            <span className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} mt-2 font-medium transition-colors duration-300 hover:text-blue-500`}>
              {skill.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;