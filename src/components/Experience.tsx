import React from "react";
import { motion } from "framer-motion";
import { Briefcase, BookOpen, ExternalLink } from "lucide-react";
import { useTheme } from "./ThemeContext";

interface ExperienceItem {
  type: "work" | "research";
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string[];
  techTags: string[];
  link?: { url: string; label: string };
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "AI/ML Intern",
    organization: "Zenshastra Software Services Pvt. Ltd.",
    location: "Bangalore, India",
    date: "Jan 2025 – Jun 2025",
    description: [
      "Developed backend services and REST endpoints in Python (Flask/FastAPI) with SQLAlchemy for document-centric workflows and application integrations.",
      "Engineered AI workflow services for document processing, summarization, and retrieval-assisted applications using modular pipeline design.",
      "Integrated FAISS-based retrieval and embeddings pipelines into application services, enabling retrieval-augmented functionality while maintaining endpoint stability.",
      "Built reusable service modules for PDF parsing, summarization requests, and workflow orchestration with input validation, logging, and robust error handling.",
      "Improved service maintainability and iterative feature delivery by organizing processing logic into modular components with predictable request/response behaviors.",
    ],
    techTags: [
      "Python",
      "Flask",
      "FastAPI",
      "SQLAlchemy",
      "FAISS",
      "Embeddings",
      "RAG",
      "REST APIs",
    ],
  },
  {
    type: "research",
    title: "Automating Court Judgement Prediction and Explanation for Indian Legal Cases",
    organization: "Springer — ICDSA 2025",
    location: "PES University, Bangalore",
    date: "2024 – 2025",
    description: [
      "Built an end-to-end legal AI system spanning judgment prediction & explanation, legal case summarization, and a legal QA chatbot.",
      "Trained hierarchical XLNet + BiGRU pipelines on 35,000+ Indian legal cases from the ILDC dataset, achieving 73.74% prediction accuracy.",
      "Implemented InLegalBERT-based summarization achieving 86.67% accuracy and ROUGE-L F1 of 0.5184 on legal document condensation.",
      "Built a RAG-powered legal chatbot using Mistral-7B, LangChain, and FAISS for retrieval-augmented legal question answering.",
      "Designed the system for both naive users and legal professionals, covering prediction, explainability, summarization, and legal Q&A.",
    ],
    techTags: [
      "XLNet",
      "BiGRU",
      "InLegalBERT",
      "Mistral-7B",
      "LangChain",
      "FAISS",
      "PyTorch",
      "Flask",
    ],
    link: {
      url: "https://github.com/srujankothuri/Legal-prediction-explanation",
      label: "View Repository",
    },
  },
];

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative w-full min-h-screen py-24 px-6 md:px-12 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-15" : "opacity-8"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(59,130,246,0.2) 50%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
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
            Experience
          </span>
          <h2
            className={`text-4xl md:text-5xl font-extrabold mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Where I've Worked & Researched
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[2px] ${
              theme === "dark"
                ? "bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent"
                : "bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent"
            }`}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1 w-[38px] h-[38px] md:w-[46px] md:h-[46px] rounded-full flex items-center justify-center border-2 ${
                    theme === "dark"
                      ? "bg-gray-900 border-cyan-500/50"
                      : "bg-white border-blue-500/50"
                  }`}
                >
                  {exp.type === "work" ? (
                    <Briefcase
                      size={18}
                      className={
                        theme === "dark" ? "text-cyan-400" : "text-blue-500"
                      }
                    />
                  ) : (
                    <BookOpen
                      size={18}
                      className={
                        theme === "dark" ? "text-cyan-400" : "text-blue-500"
                      }
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`relative group p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                    theme === "dark"
                      ? "bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
                      : "bg-white border-gray-200 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
                  }`}
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className={`text-xl font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className={`text-sm font-medium mt-1 ${
                          theme === "dark" ? "text-cyan-400" : "text-blue-600"
                        }`}
                      >
                        {exp.organization}
                      </p>
                      <p
                        className={`text-sm mt-0.5 ${
                          theme === "dark" ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        {exp.location}
                      </p>
                    </div>
                    <span
                      className={`text-sm font-medium whitespace-nowrap px-3 py-1 rounded-full ${
                        theme === "dark"
                          ? "bg-gray-700/50 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {exp.date}
                    </span>
                  </div>

                  {/* Description bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((bullet, j) => (
                      <li
                        key={j}
                        className={`flex gap-3 text-sm leading-relaxed ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <span
                          className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                            theme === "dark"
                              ? "bg-cyan-500/60"
                              : "bg-blue-500/60"
                          }`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techTags.map((tag, k) => (
                      <span
                        key={k}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-200 ${
                          theme === "dark"
                            ? "bg-gray-700/50 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                            : "bg-gray-100 text-gray-600 hover:bg-blue-500/10 hover:text-blue-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link (for research) */}
                  {exp.link && (
                    <a
                      href={exp.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 mt-4 text-sm font-medium transition-colors duration-200 ${
                        theme === "dark"
                          ? "text-cyan-400 hover:text-cyan-300"
                          : "text-blue-600 hover:text-blue-700"
                      }`}
                    >
                      {exp.link.label}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;