import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, FlaskConical, BrainCircuit, MapPin, GraduationCap, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeContext";

const traits = [
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
  {
    icon: <BrainCircuit size={24} />,
    title: "AI/ML Practitioner",
    description:
      "Built an end-to-end legal AI system using XLNet, BiGRU, InLegalBERT, and Mistral-7B — from judgment prediction (73.74% accuracy) to RAG-powered chatbots. I don't just use ML APIs — I understand the models underneath.",
    gradient: "from-rose-500 to-purple-500",
    glowColor: "rgba(244,63,94,0.15)",
  },
];

const narrativeCards = [
  {
    icon: <MapPin size={16} />,
    label: "The Journey",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    icon: <GraduationCap size={16} />,
    label: "Industry & Research",
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6,182,212,0.12)",
  },
  {
    icon: <Sparkles size={16} />,
    label: "How I Work",
    gradient: "from-purple-500 to-blue-500",
    glowColor: "rgba(139,92,246,0.12)",
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
        <div
          className={`absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-20" : "opacity-10"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(6,182,212,0.3) 50%, transparent 80%)",
          }}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-15" : "opacity-8"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.2) 50%, transparent 80%)",
          }}
        />
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

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Narrative in cards with hover effects */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Card 1: Origin story */}
            <div className="relative group">
              <div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${narrativeCards[0].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
              />
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: narrativeCards[0].glowColor }}
              />
              <div
                className={`relative p-5 rounded-xl border transition-all duration-300 group-hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700/50"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className={`p-1.5 rounded-md ${
                      theme === "dark"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {narrativeCards[0].icon}
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {narrativeCards[0].label}
                  </span>
                </div>
                <p
                  className={`text-[15px] leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html:
                      theme === "dark"
                        ? 'I completed my undergraduate degree in <b class="text-white">Computer Science at PES University</b> in Bangalore, where I developed a strong foundation in software engineering and discovered my interest in AI/ML through research. I\'m currently pursuing my <b class="text-white">Master\'s in Computer Science at Northeastern University\'s Khoury College</b> in Boston — a move driven by the opportunity to work on harder problems, learn from a broader engineering community, and push myself in a more challenging academic environment.'
                        : 'I completed my undergraduate degree in <b class="text-gray-900">Computer Science at PES University</b> in Bangalore, where I developed a strong foundation in software engineering and discovered my interest in AI/ML through research. I\'m currently pursuing my <b class="text-gray-900">Master\'s in Computer Science at Northeastern University\'s Khoury College</b> in Boston — a move driven by the opportunity to work on harder problems, learn from a broader engineering community, and push myself in a more challenging academic environment.',
                  }}
                />
              </div>
            </div>

            {/* Card 2: Work & Research */}
            <div className="relative group">
              <div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${narrativeCards[1].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
              />
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: narrativeCards[1].glowColor }}
              />
              <div
                className={`relative p-5 rounded-xl border transition-all duration-300 group-hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700/50"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className={`p-1.5 rounded-md ${
                      theme === "dark"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {narrativeCards[1].icon}
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {narrativeCards[1].label}
                  </span>
                </div>
                <p
                  className={`text-[15px] leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html:
                      theme === "dark"
                        ? 'During my time as an <b class="text-white">AI/ML Intern at Zenshastra</b>, I worked on backend services, retrieval pipelines, and document processing workflows. The most valuable lesson wasn\'t any specific technology — it was understanding how to write <b class="text-white">maintainable, well-structured code</b> that a team can build on. My <b class="text-white">published research</b> (Springer, ICDSA 2025) on <b class="text-cyan-400">automating court judgment prediction</b> gave me hands-on experience with transformer architectures, training pipelines on 35K+ legal cases, and building RAG-powered chatbots with Mistral-7B and FAISS.'
                        : 'During my time as an <b class="text-gray-900">AI/ML Intern at Zenshastra</b>, I worked on backend services, retrieval pipelines, and document processing workflows. The most valuable lesson wasn\'t any specific technology — it was understanding how to write <b class="text-gray-900">maintainable, well-structured code</b> that a team can build on. My <b class="text-gray-900">published research</b> (Springer, ICDSA 2025) on <b class="text-blue-600">automating court judgment prediction</b> gave me hands-on experience with transformer architectures, training pipelines on 35K+ legal cases, and building RAG-powered chatbots with Mistral-7B and FAISS.',
                  }}
                />
              </div>
            </div>

            {/* Card 3: Philosophy */}
            <div className="relative group">
              <div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${narrativeCards[2].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
              />
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: narrativeCards[2].glowColor }}
              />
              <div
                className={`relative p-5 rounded-xl border transition-all duration-300 group-hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700/50"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className={`p-1.5 rounded-md ${
                      theme === "dark"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {narrativeCards[2].icon}
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {narrativeCards[2].label}
                  </span>
                </div>
                <p
                  className={`text-[15px] leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html:
                      theme === "dark"
                        ? 'I\'m still early in my career and learning every day. What I can offer is the ability to <b class="text-white">pick up something unfamiliar, understand it deeply, and build something meaningful with it</b>. Every project I take on starts with a problem I haven\'t solved before — and that\'s exactly why I take it on.'
                        : 'I\'m still early in my career and learning every day. What I can offer is the ability to <b class="text-gray-900">pick up something unfamiliar, understand it deeply, and build something meaningful with it</b>. Every project I take on starts with a problem I haven\'t solved before — and that\'s exactly why I take it on.',
                  }}
                />
              </div>
            </div>
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
                {/* Gradient border glow */}
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

                  <h3
                    className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-white group-hover:text-cyan-400"
                        : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {trait.title}
                  </h3>

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