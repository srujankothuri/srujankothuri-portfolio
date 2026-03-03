import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "./ThemeContext";

const RESUME_URL = "/Srujan_Kothuri_Software_Engineer_Resume.pdf";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  gradient: string;
  glowColor: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "srujan019@gmail.com",
    href: "mailto:srujan019@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+1 (857) 395-6101",
    href: "tel:+18573956101",
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6,182,212,0.12)",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Boston, MA",
    href: "https://maps.google.com/?q=Boston,MA",
    gradient: "from-teal-500 to-green-500",
    glowColor: "rgba(20,184,166,0.12)",
  },
];

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  glowColor: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaGithub size={22} />,
    label: "GitHub",
    href: "https://github.com/srujankothuri",
    gradient: "from-gray-500 to-gray-400",
    glowColor: "rgba(156,163,175,0.12)",
  },
  {
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/srujan-kothuri-2044ba250/",
    gradient: "from-blue-500 to-blue-400",
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    icon: <SiLeetcode size={22} />,
    label: "LeetCode",
    href: "https://leetcode.com/srujankothuri/",
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.12)",
  },
];

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative w-full py-24 px-6 md:px-12 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-950"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full blur-[130px] ${
            theme === "dark" ? "opacity-12" : "opacity-6"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(6,182,212,0.15) 50%, transparent 80%)",
          }}
        />
        <div
          className={`absolute bottom-1/4 -left-40 w-[350px] h-[350px] rounded-full blur-[130px] ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
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
            Contact
          </span>
          <h2
            className={`text-4xl md:text-5xl font-extrabold mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Build Something Together
          </h2>
          <p
            className={`mt-4 text-base max-w-lg mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            I'm actively looking for{" "}
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              Summer 2026
            </span>{" "}
            opportunities. Whether you're a recruiter, hiring manager, or fellow
            engineer — I'd love to connect.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.label === "Location" ? "_blank" : undefined}
              rel={link.label === "Location" ? "noopener noreferrer" : undefined}
              className="relative group"
            >
              {/* Gradient border glow */}
              <div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
              />
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: link.glowColor }}
              />

              <div
                className={`relative flex flex-col items-center text-center p-6 rounded-xl border transition-all duration-300 group-hover:-translate-y-1.5 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700/50"
                    : "bg-white border-gray-200"
                }`}
              >
                <div
                  className={`p-3 rounded-lg mb-3 transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20"
                      : "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/15"
                  }`}
                >
                  {link.icon}
                </div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {link.label}
                </p>
                <p
                  className={`text-sm font-medium transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-gray-300 group-hover:text-cyan-400"
                      : "text-gray-700 group-hover:text-blue-600"
                  }`}
                >
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a
            href="mailto:srujan019@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="tel:+18573956101"
            className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-500/5"
            }`}
          >
            <Phone size={16} />
            Call Me
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-500/5"
            }`}
          >
            <ExternalLink size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div
                className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
              />
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: link.glowColor }}
              />
              <div
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 group-hover:-translate-y-1.5 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700/50 text-gray-400 group-hover:text-white"
                    : "bg-white border-gray-200 text-gray-500 group-hover:text-gray-900"
                }`}
              >
                {link.icon}
                <span className="text-sm font-semibold">{link.label}</span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className={`text-center pt-8 border-t ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Designed & Built by{" "}
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Srujan Kothuri
            </span>{" "}
            &copy; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;