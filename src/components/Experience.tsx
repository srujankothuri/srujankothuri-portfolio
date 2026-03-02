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
  highlight: string;
  summary: string;
  description: string[];
  techTags: string[];
  gradient: string;
  glowColor: string;
  link?: { url: string; label: string };
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "AI/ML Intern",
    organization: "Zenshastra Software Services Pvt. Ltd.",
    location: "Bangalore, India",
    date: "Jan 2025 – Jun 2025",
    highlight: "6 Months · Full-time",
    summary:
      "Built backend AI services for document processing, retrieval, and workflow automation.",
    description: [
      "Developed <b>backend services and REST endpoints</b> in Python (Flask/FastAPI) with SQLAlchemy for document-centric workflows and application integrations.",
      "Engineered <b>AI workflow services</b> for document processing, summarization, and retrieval-assisted applications using <b>modular pipeline design</b>.",
      "Integrated <b>FAISS-based retrieval and embeddings pipelines</b> into application services, enabling retrieval-augmented functionality while maintaining endpoint stability.",
      "Built <b>reusable service modules</b> for PDF parsing, summarization requests, and workflow orchestration with input validation, logging, and robust error handling.",
      "Improved <b>service maintainability</b> and iterative feature delivery by organizing processing logic into modular components with predictable request/response behaviors.",
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
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6,182,212,0.12)",
  },
  {
    type: "research",
    title: "Automating Court Judgement Prediction and Explanation",
    organization: "Springer — ICDSA 2025",
    location: "PES University, Bangalore",
    date: "2024 – 2025",
    highlight: "73.74% Prediction Accuracy · Published at Springer",
    summary:
      "End-to-end legal AI system — judgment prediction, summarization, and RAG-powered chatbot.",
    description: [
      "Built an <b>end-to-end legal AI system</b> spanning judgment prediction & explanation, legal case summarization, and a legal QA chatbot.",
      "Trained <b>hierarchical XLNet + BiGRU pipelines</b> on <b>35,000+ Indian legal cases</b> from the ILDC dataset, achieving <b>73.74% prediction accuracy</b>.",
      "Implemented <b>InLegalBERT-based summarization</b> achieving <b>86.67% accuracy</b> and ROUGE-L F1 of 0.5184 on legal document condensation.",
      "Built a <b>RAG-powered legal chatbot</b> using Mistral-7B, LangChain, and FAISS for retrieval-augmented legal question answering.",
      "Designed the system for both <b>naive users and legal professionals</b>, covering prediction, explainability, summarization, and legal Q&A.",
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
    gradient: "from-purple-500 to-blue-500",
    glowColor: "rgba(139,92,246,0.12)",
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
        <div
          className={`absolute bottom-1/4 -right-32 w-[350px] h-[350px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
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
                {/* Pulsing timeline dot */}
                <div className="absolute left-0 top-1 w-[38px] h-[38px] md:w-[46px] md:h-[46px] flex items-center justify-center">
                  {/* Pulse ring */}
                  <span
                    className={`absolute w-full h-full rounded-full animate-ping opacity-20 ${
                      theme === "dark" ? "bg-cyan-500" : "bg-blue-500"
                    }`}
                    style={{ animationDuration: "3s" }}
                  />
                  {/* Glow */}
                  <span
                    className={`absolute w-full h-full rounded-full blur-md opacity-30 ${
                      theme === "dark" ? "bg-cyan-500" : "bg-blue-500"
                    }`}
                  />
                  {/* Dot body */}
                  <div
                    className={`relative w-full h-full rounded-full flex items-center justify-center border-2 ${
                      theme === "dark"
                        ? "bg-gray-900 border-cyan-500/60"
                        : "bg-white border-blue-500/60"
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
                </div>

                {/* Card with gradient border glow */}
                <div className="relative group">
                  {/* Gradient border — visible on hover */}
                  <div
                    className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
                  />

                  {/* Hover glow shadow */}
                  <div
                    className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: exp.glowColor }}
                  />

                  {/* Card body */}
                  <div
                    className={`relative p-6 rounded-xl border transition-all duration-300 group-hover:-translate-y-1 ${
                      theme === "dark"
                        ? "bg-gray-900 border-gray-700/50"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    {/* Top row: date + highlight */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                          theme === "dark"
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {exp.date}
                      </span>
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          theme === "dark"
                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                            : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                        }`}
                      >
                        {exp.highlight}
                      </span>
                    </div>

                    {/* Title + Org */}
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 ${
                        theme === "dark"
                          ? "text-white group-hover:text-cyan-400"
                          : "text-gray-900 group-hover:text-blue-600"
                      }`}
                    >
                      {exp.title}
                    </h3>
                    <p
                      className={`text-sm font-medium mt-1 ${
                        theme === "dark" ? "text-cyan-400/80" : "text-blue-600/80"
                      }`}
                    >
                      {exp.organization}
                    </p>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {exp.location}
                    </p>

                    {/* Summary */}
                    <p
                      className={`italic text-sm mt-3 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {exp.summary}
                    </p>

                    {/* Description bullets with bold keywords */}
                    <ul className="space-y-2.5 mt-4 mb-5">
                      {exp.description.map((bullet, j) => (
                        <li
                          key={j}
                          className={`flex gap-3 text-sm leading-relaxed ${
                            theme === "dark"
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          <span
                            className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                              theme === "dark"
                                ? "bg-cyan-500/60"
                                : "bg-blue-500/60"
                            }`}
                          />
                          <span
                            dangerouslySetInnerHTML={{ __html: bullet }}
                            className={`[&_b]:font-semibold ${
                              theme === "dark"
                                ? "[&_b]:text-white"
                                : "[&_b]:text-gray-900"
                            }`}
                          />
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
                              ? "bg-gray-800 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                              : "bg-gray-100 text-gray-600 hover:bg-blue-500/10 hover:text-blue-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
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