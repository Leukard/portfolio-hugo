"use client";

import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiHtml5,
  SiGit,
  SiSelenium,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import TypingTerminal from "@/components/TypingTerminal";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Componente para a animação sequencial: Backend -> Frontend -> Full Stack
function FullStackTypingText() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    "Desenvolvedor Backend",
    "Desenvolvedor Frontend",
    "Desenvolvedor Full Stack",
  ];

  useEffect(() => {
    const currentPhrase = phrases[loopNum];

    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(90);

        // Quando termina de digitar a frase
        if (text === currentPhrase) {
          // Se for a última frase ("Full Stack"), para a animação aqui!
          if (loopNum === phrases.length - 1) return;

          // Espera 1.5s antes de começar a apagar
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(40);

        // Quando termina de apagar a frase
        if (text === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="inline-block">
      {text}
      <span className="animate-pulse text-emerald-400">|</span>
    </span>
  );
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <Navbar />
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52, 211, 153, 0.12), transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        <section
          id="home"
          className="flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen px-6 text-center md:text-left"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-2xl group-hover:bg-emerald-400/50 transition-all duration-300" />
            <Image
              src="/foto-perfil.jpg"
              alt="Foto de Hugo"
              width={200}
              height={200}
              priority
              className="relative rounded-full border-4 border-emerald-400/30 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-emerald-400 font-mono text-base mb-4">
              Olá, meu nome é
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Hugo
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-300 mb-6 min-h-[40px]">
              <FullStackTypingText />
            </h2>
            <p className="max-w-xl text-slate-400 mb-8">
              Técnico em Desenvolvimento de Sistemas pelo SENAI CIMATEC. Desenvolvedor Full Stack focado em construir soluções web completas, unindo interfaces dinâmicas e responsivas no Frontend a APIs robustas e bancos de dados no Backend.
            </p>
            <div className="flex gap-4">
              <a
                href="#projetos"
                className="px-6 py-3 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition"
              >
                Ver projetos
              </a>
              <a
                href="https://www.linkedin.com/in/hugo-silva-oliveira-747b57334/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-600 text-slate-300 rounded hover:bg-slate-800 transition"
              >
                LinkedIn
              </a>
            </div>
            <TypingTerminal />
          </div>
        </section>

        <section
          id="sobre"
          className="min-h-screen px-6 py-20 flex flex-col items-center"
        >
          <motion.div
            className="max-w-2xl w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Sobre mim</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Eu curto o momento em que um sistema começa a "fazer sentido", quando as pontas se conectam desde a interface interativa onde o usuário clica até o banco de dados onde tudo é processado com segurança. Foi isso que me fisgou durante o curso técnico no SENAI CIMATEC, principalmente no MecSys: Sistema de Gestão Inteligente de Oficina, meu TCC, desenvolvido em equipe e entregue a um cliente real. Ali entendi na prática o valor de entregar uma aplicação completa e funcional.
            </p>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Como Desenvolvedor Full Stack, uno o melhor dos dois mundos: crio interfaces modernas e responsivas com React, Next.js e Tailwind CSS, sem abrir mão da minha base em arquitetura de APIs, testes e modelagem de dados com Node.js, Express e PostgreSQL/Supabase. Construí projetos como o StudyTrack do zero para aprofundar essas integrações, e sigo estudando boas práticas de desenvolvimento diariamente.
            </p>

            <h3 className="text-xl font-bold mb-6 text-center">Stack técnica</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "React", icon: <SiReact />, color: "#61DAFB" },
                { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
                { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
                { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
                { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
                { name: "Express", icon: <SiExpress />, color: "#ffffff" },
                { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
                { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
                { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
                { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
                { name: "Git", icon: <SiGit />, color: "#F05032" },
                { name: "Java", icon: <FaJava />, color: "#f89820" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 px-4 py-3 border border-slate-700 rounded-lg hover:border-slate-500 hover:-translate-y-1 transition-all duration-300 w-24"
                >
                  <span className="text-2xl" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="text-xs text-slate-400 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="projetos"
          className="min-h-screen px-6 py-20 flex flex-col items-center"
        >
          <motion.div
            className="max-w-3xl w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>

            <div className="mb-10 p-6 border border-slate-800 rounded-lg hover:border-emerald-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-400/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">StudyTrack</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Sistema de acompanhamento de sessões de estudo, construído do zero como projeto pessoal de portfólio. Conta com autenticação real, dashboard com métricas, timer Pomodoro e persistência de dados via Supabase.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
                  { name: "Express", icon: <SiExpress />, color: "#ffffff" },
                  { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
                  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1 border border-slate-700 rounded-full text-xs text-slate-400"
                  >
                    <span style={{ color: tech.color }}>{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href="https://github.com/Leukard/studytrack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Ver no GitHub
                </a>
                <a
                  href="https://studytrack-sepia.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Ver demo ao vivo
                </a>
              </div>
            </div>

            <div className="p-6 border border-slate-800 rounded-lg hover:border-emerald-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-400/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Biblioteca JUnit</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Sistema de gestão de biblioteca desenvolvido com foco em testes automatizados: 23 testes unitários com JUnit 5 e 18 testes de interface com Selenium WebDriver, seguindo princípios de arquitetura MVC.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { name: "Java", icon: <FaJava />, color: "#f89820" },
                  { name: "JUnit 5", icon: null, color: "" },
                  { name: "Selenium", icon: <SiSelenium />, color: "#43B02A" },
                  { name: "TDD", icon: null, color: "" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1 border border-slate-700 rounded-full text-xs text-slate-400"
                  >
                    {tech.icon && (
                      <span style={{ color: tech.color }}>{tech.icon}</span>
                    )}
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href="https://github.com/Leukard/biblioteca-junit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Ver no GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="certificados"
          className="min-h-screen px-6 py-20 flex flex-col items-center"
        >
          <motion.div
            className="max-w-2xl w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Certificados</h2>
            <p className="text-slate-400 mb-10">
              Cursos e certificações concluídos ao longo da minha jornada de aprendizado contínuo.
            </p>

            <div className="p-8 border border-dashed border-slate-700 rounded-lg text-slate-500">
              Em construção... novos certificados serão adicionados aqui conforme eu avanço nos estudos.
            </div>
          </motion.div>
        </section>

        <motion.section
          id="contato"
          className="px-6 py-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Vamos conversar?</h2>
          <p className="text-slate-400 mb-8 max-w-md">
            Estou em busca de oportunidades como Estagiário de TI, Assistente de TI ou Desenvolvedor Júnior (Frontend, Backend ou Full Stack).
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/hugo-silva-oliveira-747b57334/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/soudev.hugo/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded hover:bg-slate-800 transition"
            >
              Instagram
            </a>
            <a
              href="https://github.com/Leukard"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded hover:bg-slate-800 transition"
            >
              GitHub
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}