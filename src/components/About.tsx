import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, FlaskConical, BrainCircuit } from "lucide-react";
import { useTheme } from "./ThemeContext";

const traits = [

  {
    icon: <BrainCircuit size={24} />,
    title: "AI/ML Practitioner",
    description:
      "Built an end-to-end legal AI system using XLNet, BiGRU, InLegalBERT, and Mistral-7B — from judgment prediction (73.74% accuracy) to RAG-powered chatbots. I don't just use ML APIs — I understand the models underneath.",
    gradient: "from-rose-500 to-purple-500",
    glowColor: "rgba(244,63,94,0.15)",
  },
  
  {
    icon: <Layers size={24} />,
    title: "Systems Builder",
    description:
      "I think in architectures — from designing Medallion data pipelines processing millions of records to building distributed file systems with fault tolerance and self-healing in Go.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    icon: <Code2 size={24} />,
    title: "Full-Stack Thinker",
    description:
      "Comfortable across the entire stack — React Native mobile apps, Next.js web platforms, FastAPI backends, and PostgreSQL data layers. I connect the dots end-to-end.",
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6,182,212,0.15)",
  },
  {
    icon: <FlaskConical size={24} />,
    title: "Research-Driven",
    description:
      "Published at ICDSA 2025 (Springer) on legal AI prediction systems. I go deep on problems — understanding the 'why' matters as much as the 'how'.",
    gradient: "from-purple-500 to-blue-500",
    glowColor: "rgba(139,92,246,0.15)",
  },
  
];

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative w-full min-h-screen py-24 px-6 md:px-12 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-900"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right orb */}
        <div
          className={`absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-20" : "opacity-10"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(6,182,212,0.3) 50%, transparent 80%)",
          }}
        />
        {/* Bottom-left orb */}
        <div
          className={`absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-15" : "opacity-8"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.2) 50%, transparent 80%)",
          }}
        />
        {/* Center-right small orb */}
        <div
          className={`absolute top-1/2 right-1/4 w-[250px] h-[250px] rounded-full blur-[100px] ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Label */}
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
            About
          </span>
          <h2
            className={`text-4xl md:text-5xl font-extrabold mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            What Drives Me
          </h2>
        </motion.div>

        {/* Two-column layout: Narrative + Traits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Narrative */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I grew up in India, studied Computer Science at{" "}
              <span
                className={`font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                PES University
              </span>{" "}
              in Bangalore, and made the move to Boston for my Master's at{" "}
              <span
                className={`font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Northeastern University's Khoury College
              </span>
              . That jump — new country, new challenges, higher bar — is 
              something I actively chose because I wanted to grow faster.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              During my time at Zenshastra as an AI/ML Intern, I got hands-on 
              with building real backend services, retrieval pipelines, and 
              document processing workflows. But what stuck with me most was 
              learning how to write code that other engineers can actually 
              maintain — not just code that works.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              My published research on{" "}
              <span
                className={`font-medium ${
                  theme === "dark" ? "text-cyan-400" : "text-blue-600"
                }`}
              >
                automating court judgment prediction
              </span>{" "}
              (Springer, ICDSA 2025) started from genuine curiosity — can AI 
              actually reason about legal decisions? That project pushed me deep 
              into transformer architectures, training XLNet + BiGRU pipelines 
              on 35,000+ legal cases, building RAG-powered chatbots with 
              Mistral-7B and FAISS, and achieving 73.74% prediction accuracy. 
              That same hands-on approach to AI/ML carried into{" "}
              <span
                className={`font-medium ${
                  theme === "dark" ? "text-cyan-400" : "text-blue-600"
                }`}
              >
                PageMaster
              </span>{" "}
              (a PDF summarization and QA app) and{" "}
              <span
                className={`font-medium ${
                  theme === "dark" ? "text-cyan-400" : "text-blue-600"
                }`}
              >
                Prompt Refinerz
              </span>{" "}
              (a multi-model prompt scoring service).
            </p>

            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              That curiosity is what drives every project. Whether it was 
              learning{" "}
              <span
                className={`font-medium ${
                  theme === "dark" ? "text-cyan-400" : "text-blue-600"
                }`}
              >
                Go from scratch for SentinelFS
              </span>
              , understanding{" "}
              <span
                className={`font-medium ${
                  theme === "dark" ? "text-cyan-400" : "text-blue-600"
                }`}
              >
                Kafka and Airflow for TaxiPulse
              </span>
              , or diving into{" "}
              <span
                className={`font-medium ${
                  theme === "dark" ? "text-cyan-400" : "text-blue-600"
                }`}
              >
                XGBoost explainability for FraudLens
              </span>
              {" "}— each project taught me something I didn't know before, and 
              that's the point.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I don't claim to know everything — I'm still learning. But I know 
              how to pick up something new, go deep, build something real with 
              it, and document it well enough that the work speaks for itself.
            </p>
          </motion.div>

          {/* Right — Trait Cards with gradient borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={i}
                className="relative group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {/* Gradient border glow — visible on hover */}
                <div
                  className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${trait.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
                />

                {/* Hover glow shadow */}
                <div
                  className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: trait.glowColor }}
                />

                {/* Card content */}
                <div
                  className={`relative h-full p-5 rounded-xl border transition-all duration-300 group-hover:-translate-y-1.5 ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700/50"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {/* Icon — animates on hover */}
                  <motion.div
                    className={`inline-flex p-2.5 rounded-lg mb-4 ${
                      theme === "dark"
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-blue-500 bg-blue-500/10"
                    }`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {trait.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-white group-hover:text-cyan-400"
                        : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {trait.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {trait.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;