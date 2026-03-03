import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus } from "lucide-react";

interface TerminalLine {
  type: "input" | "output";
  text: string;
}

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  help        — Show this menu
  whoami      — About me
  education   — My education
  experience  — Work experience
  skills      — Technical skills
  projects    — List my projects
  contact     — How to reach me
  resume      — Download my resume
  secret      — 🤫
  clear       — Clear terminal`,

  whoami: `> Srujan Kothuri
  MSCS @ Northeastern University (Khoury College)
  Software Engineer | Data Engineer | AI/ML Enthusiast
  Based in Boston, MA
  
  I build data pipelines, distributed systems, and AI-powered apps.
  Currently seeking Summer 2026 internships & Fall 2026 co-ops.`,

  education: `> Education
  🇺🇸 Northeastern University — M.S. Computer Science (GPA: 3.83)
     Sep 2025 – May 2027 | Boston, MA
  
  🇮🇳 PES University — B.E. Computer Science (GPA: 3.97)
     Oct 2021 – May 2025 | Bangalore, India
     MRD Merit Scholarship — 40% tuition waiver (5 semesters)`,

  experience: `> Experience
  AI/ML Intern @ Zenshastra (Jan 2025 – Jun 2025)
  — Built backend AI services with Flask/FastAPI
  — Integrated FAISS retrieval & embeddings pipelines
  — Engineered document processing workflows
  
  Published Research @ Springer ICDSA 2025
  — Automating Court Judgement Prediction
  — XLNet + BiGRU → 73.74% accuracy on 35K+ cases`,

  skills: `> Tech Stack
  Languages:    Python, Java, Go, C++, TypeScript, SQL
  AI/ML:        PyTorch, TensorFlow, XGBoost, LangChain, FAISS
  Data Eng:     Kafka, Airflow, ETL Pipelines, Medallion Arch
  Frontend:     React, Next.js, React Native, Tailwind
  Backend:      FastAPI, Flask, gRPC, Node.js
  DevOps:       Docker, GitHub Actions, CI/CD, AWS`,

  projects: `> Featured Projects
  ★ TaxiPulse     — 9.5M+ records, Medallion Architecture
  ★ SentinelFS    — Distributed FS in Go, predictive self-healing
  ★ Legal AI      — Published research, 73.74% prediction accuracy
  ★ SpendWiseAI   — Cross-platform mobile app, AI categorization
  
  + FraudLens, ShopFlow, PageMaster, Prompt Refinerz, EventFlow
  
  Type 'open projects' to scroll to projects section.`,

  contact: `> Contact
  Email:    srujan019@gmail.com
  Phone:    +1 (857) 395-6101
  GitHub:   github.com/srujankothuri
  LinkedIn: linkedin.com/in/srujan-kothuri-2044ba250
  Location: Boston, MA`,

  resume: `> Opening resume...`,

  secret: `> 🎉 You found the easter egg!
  
  Fun facts about me:
  — I once coded for 14 hours straight building SentinelFS
  — My first program was a calculator in C++
  — I ask "why?" so much that my friends call me "the debugger"
  — I document everything because future-me deserves it
  — This terminal was built just for people like you who explore 🚀
  
  Thanks for being curious. That's exactly the trait I value most.`,
};

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      text: `Welcome to srujan.sh — v1.0.0
Type 'help' to see available commands.\n`,
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", text: `~/srujan $ ${cmd}` },
    ];

    if (trimmed === "clear") {
      setLines([
        {
          type: "output",
          text: "Terminal cleared. Type 'help' for commands.",
        },
      ]);
      setInput("");
      return;
    }

    if (trimmed === "resume") {
      newLines.push({ type: "output", text: COMMANDS.resume });
      setLines(newLines);
      setInput("");
      window.open("/Srujan_Kothuri_Software_Engineer_Resume.pdf", "_blank");
      return;
    }

    if (trimmed === "open projects") {
      newLines.push({ type: "output", text: "> Scrolling to projects..." });
      setLines(newLines);
      setInput("");
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsOpen(false), 500);
      return;
    }

    if (COMMANDS[trimmed]) {
      newLines.push({ type: "output", text: COMMANDS[trimmed] });
    } else if (trimmed === "") {
      // Do nothing for empty input
    } else {
      newLines.push({
        type: "output",
        text: `Command not found: '${trimmed}'. Type 'help' for available commands.`,
      });
    }

    setLines(newLines);
    setInput("");
  };

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 p-3.5 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 text-green-400 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:scale-110 group"
            aria-label="Open terminal"
          >
            <TerminalIcon size={20} />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-green-400 bg-gray-900 px-2 py-1 rounded border border-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              ~/srujan $
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : undefined,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-6 z-50 w-[min(520px,calc(100vw-3rem))] rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-gray-700/50"
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800 border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                {/* Traffic lights */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                />
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"
                />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-gray-400">
                srujan.sh — bash
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Terminal body */}
            {!isMinimized && (
              <div
                ref={scrollRef}
                className="bg-gray-950 p-4 h-80 overflow-y-auto font-mono text-sm"
                onClick={() => inputRef.current?.focus()}
              >
                {/* Lines */}
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className={`whitespace-pre-wrap mb-1.5 leading-relaxed ${
                      line.type === "input"
                        ? "text-green-400"
                        : "text-gray-300"
                    }`}
                  >
                    {line.text}
                  </div>
                ))}

                {/* Input line */}
                <div className="flex items-center gap-2 text-green-400">
                  <span className="shrink-0">~/srujan $</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleCommand(input);
                    }}
                    className="flex-1 bg-transparent outline-none text-green-400 caret-green-400 font-mono text-sm"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;