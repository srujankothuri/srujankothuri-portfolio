import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, BrainCircuit, Database, Cloud, Server } from "lucide-react";
import { useTheme } from "./ThemeContext";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  gradient: string;
  glowColor: string;
}

const categories: SkillCategory[] = [
  {
    icon: <Code2 size={22} />,
    title: "Languages",
    skills: ["Python", "Java", "Go", "C++", "JavaScript", "TypeScript", "SQL", "Bash", "HTML", "CSS"],
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    icon: <Layout size={22} />,
    title: "Frontend & Mobile",
    skills: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Swing GUI"],
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6,182,212,0.12)",
  },
  {
    icon: <Server size={22} />,
    title: "Backend & APIs",
    skills: ["FastAPI", "Flask", "REST APIs", "gRPC", "Protocol Buffers", "SQLAlchemy", "WebSockets", "Node.js"],
    gradient: "from-teal-500 to-green-500",
    glowColor: "rgba(20,184,166,0.12)",
  },
  {
    icon: <BrainCircuit size={22} />,
    title: "AI/ML & Data Science",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "SHAP", "Transformers", "BERT", "XLNet", "LangChain", "FAISS", "RAG", "Pandas", "NumPy", "Streamlit"],
    gradient: "from-purple-500 to-blue-500",
    glowColor: "rgba(139,92,246,0.12)",
  },
  {
    icon: <Database size={22} />,
    title: "Data Engineering",
    skills: ["Apache Kafka", "Apache Airflow", "ETL/ELT Pipelines", "Batch Processing", "Streaming Pipelines", "Data Modeling", "Data Validation"],
    gradient: "from-orange-500 to-rose-500",
    glowColor: "rgba(249,115,22,0.12)",
  },
  {
    icon: <Cloud size={22} />,
    title: "Databases & DevOps",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Docker", "Git/GitHub", "GitHub Actions", "CI/CD", "Linux/Unix", "Vercel", "Postman"],
    gradient: "from-rose-500 to-purple-500",
    glowColor: "rgba(244,63,94,0.12)",
  },
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative w-full min-h-screen py-24 px-6 md:px-12 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-900"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 -right-40 w-[450px] h-[450px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-15" : "opacity-8"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.2) 50%, transparent 80%)",
          }}
        />
        <div
          className={`absolute bottom-1/4 -left-40 w-[400px] h-[400px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={`text-sm font-semibold uppercase tracking-widest ${
              theme === "dark" ? "text-cyan-400" : "text-blue-500"
            }`}
          >
            Tech Stack
          </span>
          <h2
            className={`text-4xl md:text-5xl font-extrabold mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Technologies I Work With
          </h2>
        </motion.div>

        {/* Skills Grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="relative group h-full"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Gradient border glow */}
              <div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
              />

              {/* Hover glow shadow */}
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: cat.glowColor }}
              />

              {/* Card */}
              <div
                className={`relative h-full p-5 rounded-xl border transition-all duration-300 group-hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700/50"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Header — icon + title */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-2.5 rounded-lg ${
                      theme === "dark"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-blue-500/10 text-blue-500"
                    }`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                  >
                    {cat.icon}
                  </motion.div>
                  <h3
                    className={`text-lg font-bold transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-white group-hover:text-cyan-400"
                        : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                        theme === "dark"
                          ? "bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-500/40 hover:text-blue-600 hover:bg-blue-500/5"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;