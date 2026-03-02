import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { useTheme } from "./ThemeContext";
import neuImg from "../assets/images/northeastern.jpeg";
import pesImg from "../assets/images/pes.jpeg";

interface EducationItem {
  university: string;
  degree: string;
  flag: string;
  location: string;
  date: string;
  gpa: string;
  image: string;
  achievements: string[];
  coursework: string[];
  gradient: string;
  glowColor: string;
}

const education: EducationItem[] = [
  {
    university: "Northeastern University",
    degree: "M.S. in Computer Science",
    flag: "🇺🇸",
    location: "Boston, MA",
    date: "Sep 2025 – May 2027",
    gpa: "3.83 / 4.0",
    image: neuImg,
    achievements: [
      "🎓 Khoury College of Computer Sciences",
    ],
    coursework: [
      "Programming Design Paradigm",
      "Algorithms",
      "Database Management Systems",
      "Mobile App Development",
    ],
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    university: "PES University",
    degree: "B.E. in Computer Science",
    flag: "🇮🇳",
    location: "Bangalore, India",
    date: "Oct 2021 – May 2025",
    gpa: "3.97 / 4.0",
    image: pesImg,
    achievements: [
      "🏅 MRD Merit Scholarship recipient — awarded 40% tuition waiver across 5 consecutive semesters for academic excellence",
      "📄 Published research at Springer (ICDSA 2025)",
    ],
    coursework: [
      "Machine Learning",
      "Big Data",
      "Information Retrieval",
      "Computer Networks",
      "Operating Systems",
      "Data Structures",
      "Algorithms",
      "Data Science",
    ],
    gradient: "from-purple-500 to-blue-500",
    glowColor: "rgba(139,92,246,0.12)",
  },
];

const Education = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative w-full min-h-screen py-24 px-6 md:px-12 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-900"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-15" : "opacity-8"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(139,92,246,0.2) 50%, transparent 80%)",
          }}
        />
        <div
          className={`absolute bottom-0 -left-32 w-[350px] h-[350px] rounded-full blur-[120px] ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
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
            Education
          </span>
          <h2
            className={`text-4xl md:text-5xl font-extrabold mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Academic Foundation
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="relative group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              {/* Gradient border glow */}
              <div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
              />

              {/* Hover glow shadow */}
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: edu.glowColor }}
              />

              {/* Card */}
              <div
                className={`relative h-full rounded-xl border overflow-hidden transition-all duration-300 group-hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700/50"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Banner Photo */}
                <div className={`relative overflow-hidden ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}>
                  <img
                    src={edu.image}
                    alt={edu.university}
                    className="w-full max-h-72 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom edge fade only — very subtle */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-12 ${
                      theme === "dark"
                        ? "bg-gradient-to-t from-gray-900 to-transparent"
                        : "bg-gradient-to-t from-white to-transparent"
                    }`}
                  />
                  {/* Date badge on photo */}
                  <span
                    className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md ${
                      theme === "dark"
                        ? "bg-gray-900/70 text-gray-200 border border-gray-700/50"
                        : "bg-white/70 text-gray-700 border border-gray-200/50"
                    }`}
                  >
                    {edu.date}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 -mt-8 relative">
                  {/* University + Degree */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`p-2.5 rounded-lg shrink-0 ${
                        theme === "dark"
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          : "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                      }`}
                    >
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold transition-colors duration-300 ${
                          theme === "dark"
                            ? "text-white group-hover:text-cyan-400"
                            : "text-gray-900 group-hover:text-blue-600"
                        }`}
                      >
                        {edu.flag} {edu.university}
                      </h3>
                      <p
                        className={`text-sm font-medium ${
                          theme === "dark"
                            ? "text-cyan-400/80"
                            : "text-blue-600/80"
                        }`}
                      >
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <MapPin size={13} />
                    {edu.location}
                  </span>

                  {/* GPA badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-semibold mb-4 ml-3 ${
                      theme === "dark"
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                    }`}
                  >
                    <Award size={14} />
                    GPA: {edu.gpa}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    {edu.achievements.map((ach, j) => (
                      <div
                        key={j}
                        className={`flex items-start gap-2.5 p-3 rounded-lg transition-all duration-200 ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/15 hover:from-amber-500/15"
                            : "bg-gradient-to-r from-amber-50 to-transparent border border-amber-200/50 hover:from-amber-100"
                        }`}
                      >
                        <p
                          className={`text-sm font-medium leading-relaxed ${
                            theme === "dark"
                              ? "text-amber-300"
                              : "text-amber-700"
                          }`}
                        >
                          {ach}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Coursework — bullet list */}
                  <div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        theme === "dark" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Key Coursework
                    </span>
                    <ul className="mt-2.5 space-y-1.5">
                      {edu.coursework.map((course, j) => (
                        <li
                          key={j}
                          className={`flex items-center gap-2.5 text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              theme === "dark"
                                ? "bg-cyan-500/60"
                                : "bg-blue-500/60"
                            }`}
                          />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;