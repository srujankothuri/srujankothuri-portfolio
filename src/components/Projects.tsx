import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "./ThemeContext";

interface Project {
  title: string;
  date: string;
  category: string;
  highlight: string;
  description: string;
  techTags: string[];
  github?: string;
  demo?: string;
  gradient: string;
  glowColor: string;
}

const filters = [
  "All",
  "Data Engineering",
  "Distributed Systems",
  "AI/ML",
  "Full Stack",
  "Mobile",
];

const projects: Project[] = [
  {
    title: "TaxiPulse",
    date: "2025",
    category: "Data Engineering",
    highlight: "9.5M+ NYC taxi records · Medallion Architecture",
    description:
      "End-to-end data platform with batch and streaming pipelines. Built Airflow orchestration, Kafka-based streaming, Medallion-style transformations, data-quality checks, anomaly detection, and interactive Streamlit dashboards.",
    techTags: ["Python", "Airflow", "Kafka", "PostgreSQL", "Docker", "Streamlit"],
    github: "https://github.com/srujankothuri/TaxiPulse",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    title: "SentinelFS",
    date: "2025",
    category: "Distributed Systems",
    highlight: "Predictive self-healing · Multi-node replication",
    description:
      "Distributed file system with metadata coordination, chunk storage/replication, and proactive migration based on node-health trend analysis. Built with gRPC/protobuf communication and concurrent file workflows in Go. Dockerized for multi-node execution.",
    techTags: ["Go", "gRPC", "Protocol Buffers", "Docker"],
    github: "https://github.com/srujankothuri/SentinelFS",
    gradient: "from-teal-500 to-green-500",
    glowColor: "rgba(20,184,166,0.12)",
  },
  {
    title: "FraudLens",
    date: "2025",
    category: "AI/ML",
    highlight: "End-to-end ML pipeline · XGBoost + SHAP explainability",
    description:
      "Fraud detection machine learning workflow covering data preprocessing, feature engineering, model training with XGBoost, and metric-driven evaluation. Organized for reproducibility with interpretable analysis using SHAP explainability.",
    techTags: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Pandas"],
    github: "https://github.com/srujankothuri/FraudLens",
    gradient: "from-purple-500 to-blue-500",
    glowColor: "rgba(139,92,246,0.12)",
  },
  {
    title: "SpendWiseAI",
    date: "2025",
    category: "Mobile",
    highlight: "Cross-platform iOS/Android · AI-assisted categorization",
    description:
      "Production-style mobile expense tracker with authentication, secure session persistence, budgeting, analytics dashboards, recurring-expense detection, CSV import/export, and layered AI categorization (rules / fuzzy matching / AI fallback).",
    techTags: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/srujankothuri/SpendWiseAI",
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6,182,212,0.12)",
  },
  {
    title: "ShopFlow",
    date: "2025",
    category: "Full Stack",
    highlight: "E-commerce operations hub · Role-based access + rules engine",
    description:
      "Full-stack operations platform with authentication, role-based access, audit logging, relational data models via Prisma, a rules engine for nested condition evaluation, exportable reports, and workflow automation.",
    techTags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    github: "https://github.com/srujankothuri/ShopFlow",
    gradient: "from-orange-500 to-rose-500",
    glowColor: "rgba(249,115,22,0.12)",
  },
  {
    title: "Legal AI Suite",
    date: "2024 – 2025",
    category: "AI/ML",
    highlight: "73.74% prediction accuracy · Springer published",
    description:
      "End-to-end legal AI system spanning judgment prediction (XLNet + BiGRU on 35K+ cases), document summarization (InLegalBERT, 86.67% accuracy), and a RAG-powered legal chatbot using Mistral-7B, LangChain, and FAISS.",
    techTags: ["XLNet", "BiGRU", "InLegalBERT", "Mistral-7B", "LangChain", "FAISS", "Flask"],
    github: "https://github.com/srujankothuri/Legal-prediction-explanation",
    gradient: "from-rose-500 to-purple-500",
    glowColor: "rgba(244,63,94,0.12)",
  },
  {
    title: "PageMaster",
    date: "2024",
    category: "AI/ML",
    highlight: "PDF summarization & QA · Live deployed",
    description:
      "User-facing application for PDF upload, summarization, and question-answering workflows. Implemented document parsing, prompt-driven response generation, and interactive UI in a production-style Streamlit deployment.",
    techTags: ["Python", "Streamlit", "LLM APIs", "PDF Processing"],
    github: "https://github.com/srujankothuri/PageMaster",
    demo: "https://pagemaster-demo.streamlit.app",
    gradient: "from-blue-500 to-purple-500",
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    title: "Prompt Refinerz",
    date: "2025",
    category: "Full Stack",
    highlight: "Multi-model prompt scoring · FastAPI service",
    description:
      "FastAPI service that refines prompts and returns scored suggestions using multi-model routing and structured response schemas. Designed for AI-enabled applications requiring prompt optimization and programmatic integration.",
    techTags: ["FastAPI", "Python", "JavaScript", "LLM APIs"],
    github: "https://github.com/srujankothuri/prompt-refinerz",
    gradient: "from-teal-500 to-cyan-500",
    glowColor: "rgba(20,184,166,0.12)",
  },
  {
    title: "EventFlow",
    date: "2025",
    category: "Full Stack",
    highlight: "CLI + GUI calendar system · Java + Swing",
    description:
      "Java calendar application with CLI and Swing GUI interfaces. Features recurring events, multi-calendar/multi-timezone management, event editing/copying, exports (.csv/.ics), and interval-based analytics dashboards.",
    techTags: ["Java", "Swing", "Gradle", "JUnit"],
    github: "https://github.com/srujankothuri/EventFlow",
    gradient: "from-green-500 to-teal-500",
    glowColor: "rgba(34,197,94,0.12)",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      className={`relative w-full min-h-screen py-24 px-6 md:px-12 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/3 -left-40 w-[450px] h-[450px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-15" : "opacity-8"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(6,182,212,0.2) 50%, transparent 80%)",
          }}
        />
        <div
          className={`absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
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
            Projects
          </span>
          <h2
            className={`text-4xl md:text-5xl font-extrabold mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            What I've Built
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? theme === "dark"
                    ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/30 shadow-sm shadow-cyan-500/10"
                    : "bg-blue-500/10 text-blue-600 border-blue-500/30 shadow-sm shadow-blue-500/10"
                  : theme === "dark"
                  ? "bg-transparent text-gray-400 border-gray-700/50 hover:text-gray-200 hover:border-gray-600"
                  : "bg-transparent text-gray-500 border-gray-200 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project count */}
        <p
          className={`text-center text-sm mb-8 ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="relative group h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* Gradient border glow */}
                <div
                  className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
                />

                {/* Hover glow shadow */}
                <div
                  className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: project.glowColor }}
                />

                {/* Card */}
                <div
                  className={`relative h-full flex flex-col p-5 rounded-xl border transition-all duration-300 group-hover:-translate-y-1 ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700/50"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {/* Top row — category + date */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        theme === "dark"
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                      }`}
                    >
                      {project.category}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        theme === "dark" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-1.5 transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-white group-hover:text-cyan-400"
                        : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Highlight metric */}
                  <p
                    className={`text-sm font-semibold mb-3 ${
                      theme === "dark" ? "text-cyan-400/80" : "text-blue-600/80"
                    }`}
                  >
                    {project.highlight}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-4 flex-grow ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techTags.map((tag, j) => (
                      <span
                        key={j}
                        className={`px-2 py-1 text-[11px] font-medium rounded-md transition-colors duration-200 ${
                          theme === "dark"
                            ? "bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                            : "bg-gray-100 text-gray-500 hover:text-blue-600 hover:bg-blue-500/10"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t border-dashed ${
                    theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'
                  }">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                          theme === "dark"
                            ? "text-gray-400 hover:text-cyan-400"
                            : "text-gray-500 hover:text-blue-600"
                        }`}
                      >
                        <Github size={15} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                          theme === "dark"
                            ? "text-gray-400 hover:text-cyan-400"
                            : "text-gray-500 hover:text-blue-600"
                        }`}
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;