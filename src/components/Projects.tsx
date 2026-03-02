import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Monitor } from "lucide-react";
import { useTheme } from "./ThemeContext";
import taxipulseImg from "../assets/images/taxipulse.jpeg";
import sentinelfsImg from "../assets/images/sentinelfs.jpeg";
import legalaiImg from "../assets/images/legalai.jpeg";
import spendwiseaiImg from "../assets/images/spendwiseai.jpeg";

interface Project {
  title: string;
  date: string;
  category: string;
  highlight: string;
  description: string;
  techTags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string;
}

const filters = [
  "All",
  "AI/ML",
  "Data Engineering",
  "Full Stack",
  "Distributed Systems",
  "Mobile",
];

const projects: Project[] = [
  {
    title: "TaxiPulse",
    date: "2025",
    category: "Data Engineering",
    highlight: "9.5M+ NYC taxi records · Medallion Architecture · Live Dashboard",
    description:
      "End-to-end data platform with batch and streaming pipelines. Built Airflow orchestration, Kafka-based streaming, Medallion-style transformations, data-quality checks, anomaly detection, and interactive Streamlit dashboards.",
    techTags: ["Python", "Airflow", "Kafka", "PostgreSQL", "Docker", "Streamlit"],
    github: "https://github.com/srujankothuri/TaxiPulse",
    demo: "https://taxipulse-srujankothuri.streamlit.app/",
    featured: true,
    image: taxipulseImg,
  },
  {
    title: "SentinelFS",
    date: "2025",
    category: "Distributed Systems",
    highlight: "Predictive self-healing · 5-node cluster · Live monitoring",
    description:
      "Distributed file system with metadata coordination, chunk storage/replication, and proactive migration based on node-health trend analysis. Built with gRPC/protobuf communication and concurrent file workflows in Go.",
    techTags: ["Go", "gRPC", "Protocol Buffers", "Docker"],
    github: "https://github.com/srujankothuri/SentinelFS",
    featured: true,
    image: sentinelfsImg,
  },
  {
    title: "Legal AI Suite",
    date: "2024 – 2025",
    category: "AI/ML",
    highlight: "73.74% prediction accuracy · Published at Springer (ICDSA 2025)",
    description:
      "End-to-end legal AI system spanning judgment prediction (XLNet + BiGRU on 35K+ cases), document summarization (InLegalBERT, 86.67% accuracy), and a RAG-powered legal chatbot using Mistral-7B, LangChain, and FAISS.",
    techTags: ["XLNet", "BiGRU", "InLegalBERT", "Mistral-7B", "LangChain", "FAISS", "Flask"],
    github: "https://github.com/srujankothuri/Legal-prediction-explanation",
    featured: true,
    image: legalaiImg,
  },
  {
    title: "SpendWiseAI",
    date: "2025",
    category: "Mobile",
    highlight: "Cross-platform iOS/Android · AI-assisted categorization",
    description:
      "Production-style mobile expense tracker with authentication, secure session persistence, budgeting, analytics dashboards, recurring-expense detection, CSV import/export, and layered AI categorization.",
    techTags: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/srujankothuri/SpendWiseAI",
    featured: true,
    image: spendwiseaiImg,
  },
  {
    title: "FraudLens",
    date: "2025",
    category: "AI/ML",
    highlight: "End-to-end ML pipeline · XGBoost + SHAP explainability",
    description:
      "Fraud detection ML workflow with data preprocessing, feature engineering, XGBoost training, and interpretable analysis using SHAP explainability.",
    techTags: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Pandas"],
    github: "https://github.com/srujankothuri/FraudLens",
    demo: "https://fraudlens-srujankothuri.streamlit.app/",
  },
  {
    title: "ShopFlow",
    date: "2025",
    category: "Full Stack",
    highlight: "E-commerce ops hub · Role-based access + rules engine",
    description:
      "Full-stack operations platform with auth, role-based access, audit logging, Prisma data models, rules engine, and exportable reports.",
    techTags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    github: "https://github.com/srujankothuri/ShopFlow",
    demo: "https://shopflow-srujan-kothuris-projects.vercel.app/dashboard",
  },
  {
    title: "PageMaster",
    date: "2024",
    category: "AI/ML",
    highlight: "PDF summarization & QA · Live deployed",
    description:
      "PDF upload, summarization, and question-answering app with document parsing and prompt-driven response generation.",
    techTags: ["Python", "Streamlit", "LLM APIs", "PDF Processing"],
    github: "https://github.com/srujankothuri/PageMaster",
    demo: "https://pagemaster-demo.streamlit.app",
  },
  {
    title: "Prompt Refinerz",
    date: "2025",
    category: "Full Stack",
    highlight: "Multi-model prompt scoring · FastAPI service",
    description:
      "FastAPI service that refines prompts and returns scored suggestions using multi-model routing and structured response schemas.",
    techTags: ["FastAPI", "Python", "JavaScript", "LLM APIs"],
    github: "https://github.com/srujankothuri/prompt-refinerz",
  },
  {
    title: "EventFlow",
    date: "2025",
    category: "Full Stack",
    highlight: "CLI + GUI calendar system · Java + Swing",
    description:
      "Java calendar app with CLI and Swing GUI, recurring events, multi-timezone support, exports (.csv/.ics), and analytics dashboards.",
    techTags: ["Java", "Swing", "Gradle", "JUnit"],
    github: "https://github.com/srujankothuri/EventFlow",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      className={`relative w-full py-24 px-6 md:px-12 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 -left-40 w-[450px] h-[450px] rounded-full blur-[130px] ${
            theme === "dark" ? "opacity-12" : "opacity-6"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(6,182,212,0.15) 50%, transparent 80%)",
          }}
        />
        <div
          className={`absolute bottom-1/3 -right-40 w-[400px] h-[400px] rounded-full blur-[130px] ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
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
          <p
            className={`mt-3 text-base max-w-xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            A selection of projects across data engineering, distributed systems,
            AI/ML, and full-stack development.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-14"
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
                    ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/30"
                    : "bg-blue-500/10 text-blue-600 border-blue-500/30"
                  : theme === "dark"
                  ? "bg-transparent text-gray-500 border-gray-700/50 hover:text-gray-300 hover:border-gray-600"
                  : "bg-transparent text-gray-400 border-gray-200 hover:text-gray-600 hover:border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured Projects — full width, 1 per row */}
            {featuredProjects.length > 0 && (
              <div className="space-y-8 mb-12">
                {featuredProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="group"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                  >
                    <div
                      className={`rounded-2xl border overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                        theme === "dark"
                          ? "bg-gray-800/30 border-gray-700/40 hover:border-cyan-500/20 hover:shadow-cyan-500/5"
                          : "bg-white border-gray-200 hover:border-blue-500/20 hover:shadow-blue-500/5"
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row">
                        {/* Image side — browser mockup frame */}
                        {project.image && (
                          <div className="lg:w-1/2 p-4 lg:p-6">
                            <div
                              className={`rounded-xl overflow-hidden border shadow-lg transition-all duration-500 group-hover:shadow-xl ${
                                theme === "dark"
                                  ? "border-gray-700/50 shadow-black/20 group-hover:shadow-cyan-500/10"
                                  : "border-gray-200 shadow-gray-200/50 group-hover:shadow-blue-500/10"
                              }`}
                            >
                              {/* Browser bar */}
                              <div
                                className={`flex items-center gap-2 px-4 py-2.5 ${
                                  theme === "dark"
                                    ? "bg-gray-800 border-b border-gray-700/50"
                                    : "bg-gray-100 border-b border-gray-200"
                                }`}
                              >
                                <div className="flex gap-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                </div>
                                <div
                                  className={`flex-1 mx-4 h-5 rounded-md flex items-center px-2 ${
                                    theme === "dark"
                                      ? "bg-gray-700/50"
                                      : "bg-gray-200/70"
                                  }`}
                                >
                                  <Monitor
                                    size={10}
                                    className={
                                      theme === "dark"
                                        ? "text-gray-500"
                                        : "text-gray-400"
                                    }
                                  />
                                  <span
                                    className={`text-[9px] ml-1.5 font-mono ${
                                      theme === "dark"
                                        ? "text-gray-500"
                                        : "text-gray-400"
                                    }`}
                                  >
                                    {project.title.toLowerCase()}.app
                                  </span>
                                </div>
                              </div>
                              {/* Screenshot */}
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                style={{ maxHeight: "320px" }}
                              />
                            </div>
                          </div>
                        )}

                        {/* Content side */}
                        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                          {/* Badges */}
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span
                              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                theme === "dark"
                                  ? "bg-cyan-500/10 text-cyan-400"
                                  : "bg-blue-500/8 text-blue-600"
                              }`}
                            >
                              {project.category}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                                theme === "dark"
                                  ? "bg-amber-500/10 text-amber-400"
                                  : "bg-amber-500/10 text-amber-600"
                              }`}
                            >
                              <Star size={10} className="fill-current" />
                              Featured
                            </span>
                            <span
                              className={`text-xs ml-auto ${
                                theme === "dark"
                                  ? "text-gray-500"
                                  : "text-gray-400"
                              }`}
                            >
                              {project.date}
                            </span>
                          </div>

                          {/* Title */}
                          <h3
                            className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                              theme === "dark"
                                ? "text-white group-hover:text-cyan-400"
                                : "text-gray-900 group-hover:text-blue-600"
                            }`}
                          >
                            {project.title}
                          </h3>

                          {/* Highlight */}
                          <p
                            className={`text-sm font-semibold mb-4 ${
                              theme === "dark"
                                ? "text-cyan-400/80"
                                : "text-blue-600/80"
                            }`}
                          >
                            {project.highlight}
                          </p>

                          {/* Description */}
                          <p
                            className={`text-sm leading-relaxed mb-6 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            {project.description}
                          </p>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.techTags.map((tag, j) => (
                              <span
                                key={j}
                                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                                  theme === "dark"
                                    ? "bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                                    : "bg-gray-100 text-gray-500 hover:text-blue-600 hover:bg-blue-500/8"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Action buttons */}
                          <div className="flex items-center gap-3">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all duration-200 ${
                                  theme === "dark"
                                    ? "border-gray-600 text-gray-300 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5"
                                    : "border-gray-300 text-gray-600 hover:border-blue-500/40 hover:text-blue-600 hover:bg-blue-500/5"
                                }`}
                              >
                                <Github size={16} />
                                Source Code
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                                  theme === "dark"
                                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
                                    : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
                                }`}
                              >
                                <ExternalLink size={16} />
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Divider */}
            {featuredProjects.length > 0 && regularProjects.length > 0 && (
              <div
                className={`flex items-center gap-4 mb-8 ${
                  theme === "dark" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                <div
                  className={`flex-grow h-px ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                  }`}
                />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  More Projects
                </span>
                <div
                  className={`flex-grow h-px ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                  }`}
                />
              </div>
            )}

            {/* Regular Projects — compact grid */}
            {regularProjects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {regularProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="group h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <div
                      className={`h-full flex flex-col rounded-xl border overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${
                        theme === "dark"
                          ? "bg-gray-800/30 border-gray-700/40 group-hover:border-cyan-500/20 group-hover:shadow-cyan-500/5"
                          : "bg-white border-gray-200 group-hover:border-blue-500/20 group-hover:shadow-blue-500/5"
                      }`}
                    >
                      {/* Accent line */}
                      <div
                        className={`h-0.5 w-full ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-cyan-500/50 to-blue-500/50"
                            : "bg-gradient-to-r from-blue-500/50 to-cyan-500/50"
                        }`}
                      />

                      <div className="flex flex-col flex-grow p-5">
                        {/* Category + date */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                              theme === "dark"
                                ? "bg-cyan-500/10 text-cyan-400"
                                : "bg-blue-500/8 text-blue-600"
                            }`}
                          >
                            {project.category}
                          </span>
                          <span
                            className={`text-[11px] ${
                              theme === "dark"
                                ? "text-gray-500"
                                : "text-gray-400"
                            }`}
                          >
                            {project.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-base font-bold mb-1 transition-colors duration-300 ${
                            theme === "dark"
                              ? "text-white group-hover:text-cyan-400"
                              : "text-gray-900 group-hover:text-blue-600"
                          }`}
                        >
                          {project.title}
                        </h3>

                        {/* Highlight */}
                        <p
                          className={`text-xs font-medium mb-3 ${
                            theme === "dark"
                              ? "text-cyan-400/70"
                              : "text-blue-600/70"
                          }`}
                        >
                          {project.highlight}
                        </p>

                        {/* Description */}
                        <p
                          className={`text-xs leading-relaxed mb-4 flex-grow ${
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-gray-500"
                          }`}
                        >
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.techTags.map((tag, j) => (
                            <span
                              key={j}
                              className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                                theme === "dark"
                                  ? "bg-gray-800 text-gray-500"
                                  : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div
                          className={`flex items-center gap-3 pt-3 mt-auto border-t ${
                            theme === "dark"
                              ? "border-gray-700/40"
                              : "border-gray-100"
                          }`}
                        >
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ${
                                theme === "dark"
                                  ? "text-gray-500 hover:text-cyan-400"
                                  : "text-gray-400 hover:text-blue-600"
                              }`}
                            >
                              <Github size={13} />
                              Code
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ${
                                theme === "dark"
                                  ? "text-gray-500 hover:text-cyan-400"
                                  : "text-gray-400 hover:text-blue-600"
                              }`}
                            >
                              <ExternalLink size={13} />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;