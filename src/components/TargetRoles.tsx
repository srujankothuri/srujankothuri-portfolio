import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Database, BrainCircuit, Server, Smartphone, BarChart3, Layers, Cloud, Settings } from "lucide-react";
import { useTheme } from "./ThemeContext";

interface Role {
  title: string;
  icon: React.ReactNode;
}

const roles: Role[] = [
  { title: "Software Development Engineer", icon: <Code2 size={18} /> },
  { title: "Data Engineer", icon: <Database size={18} /> },
  { title: "AI / ML Engineer", icon: <BrainCircuit size={18} /> },
  { title: "Full Stack Developer", icon: <Layers size={18} /> },
  { title: "Backend Engineer", icon: <Server size={18} /> },
  { title: "Data Scientist", icon: <BarChart3 size={18} /> },
  { title: "Mobile Developer", icon: <Smartphone size={18} /> },
  { title: "DevOps Engineer", icon: <Settings size={18} /> },
  { title: "Cloud Engineer", icon: <Cloud size={18} /> },
];

const TargetRoles = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative w-full py-24 px-6 md:px-12 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-900"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(6,182,212,0.2) 50%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header */}
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
            Target Roles
          </span>
          <h2
            className={`text-4xl md:text-5xl font-extrabold mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            What I'm Looking For
          </h2>
          <p
            className={`mt-4 text-base max-w-lg mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Actively seeking{" "}
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              Summer 2026 Internships
            </span>{" "}
            and{" "}
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              Fall 2026 Co-ops
            </span>
          </p>
        </motion.div>

        {/* Role pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {roles.map((role, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
              />
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: "rgba(59,130,246,0.1)" }}
              />

              <div
                className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl border transition-all duration-300 group-hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700/50 text-gray-300 group-hover:text-cyan-400"
                    : "bg-white border-gray-200 text-gray-600 group-hover:text-blue-600"
                }`}
              >
                <span
                  className={`transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-gray-500 group-hover:text-cyan-400"
                      : "text-gray-400 group-hover:text-blue-500"
                  }`}
                >
                  {role.icon}
                </span>
                <span className="text-sm font-semibold">{role.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Availability note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border ${
              theme === "dark"
                ? "border-green-500/20 bg-green-500/5 text-green-400"
                : "border-green-500/30 bg-green-500/5 text-green-600"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available from May 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetRoles;