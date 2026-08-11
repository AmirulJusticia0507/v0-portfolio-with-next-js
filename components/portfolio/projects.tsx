"use client";

import { ExternalLink, Github, Globe } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "SUSI AIR Pilot Operations Dashboard",
    role: "Lead Web Systems Engineer",
    period: "2025 · GovTech",
    description:
      "Real-time pilot flight tracking and dispatch dashboard for PT ASI PUDJIASTUTI AVIATION (operates under Indonesia's national carrier brand). Live aircraft telemetry visualization, crew scheduling, flight logbook integration, and multi-site operational reporting served to regional hubs across Indonesia. Built to support SUSI AIR's humanitarian and routine flight operations.",
    tech: ["PHP (Laravel)", "Node.js", "Vue.js", "PostgreSQL", "REST APIs", "Geospatial Mapping"],
    urls: [
      { label: "pilot.susiair.com", href: "https://pilot.susiair.com/", icon: <Globe className="w-4 h-4" /> },
    ],
  },
  {
    title: "XIV Apparel - WooCommerce E-Commerce",
    role: "Lead Fullstack Engineer",
    period: "2024 · Fashion e-commerce",
    description:
      "Ultra-minimalist WooCommerce custom theme for XIV Apparel. Tailwind CSS + vanilla JS, multi-facet product filtering (size/category/price/availability), side-drawer cart, step-by-step guest/user checkout, OTP + WebAuthn login, QRIS static gateway, and an admin CRUD panel. Containerized with Docker Compose (WordPress + MySQL + WooCommerce).",
    tech: ["WordPress 6.x", "WooCommerce 8.x", "PHP 8.2", "Tailwind CSS v3", "Vanilla JS (ES6+)", "Docker Compose", "WebAuthn"],
    urls: [
      { label: "Source code", href: "https://github.com/AmirulJusticia0507/uf-woocommerce-hybrid-core", icon: <Github className="w-4 h-4" /> },
    ],
  },
  {
    title: "AetherIo - Enterprise IoT Platform",
    role: "Lead Backend Engineer",
    period: "2024 · IoT / Real-time analytics",
    description:
      "Microservice-based IoT management platform with real-time telemetry ingestion and time-series analytics. Devices ingest via MQTT/TLS 1.3 to an EMQX broker, a Go backend exposes REST/WebSocket APIs, and data lands in PostgreSQL 16 + TimescaleDB 2.x with Redis pub/sub caching and Grafana dashboards. React/Next.js frontend for live device & metric visualization.",
    tech: ["Go 1.22", "MQTT 5 (EMQX)", "TLS 1.3", "PostgreSQL 16", "TimescaleDB 2.x", "Redis", "Grafana", "React/Next.js", "Docker Compose"],
    urls: [
      { label: "Source code", href: "https://github.com/AmirulJusticia0507/AetherIo", icon: <Github className="w-4 h-4" /> },
    ],
  },
  {
    title: "Islamic Digital Currency Engine (IDCE)",
    role: "Fullstack Engineer",
    period: "2024 · FinTech / Sharia-compliant",
    description:
      "Asset-backed, sharia-compliant ledger and payment engine built on NewSQL (CockroachDB) for strict ACID financial consistency. Integrated with legal modules (notary & law firm workflows) and supervised by a Sharia Supervisory Board. Provides real-time settlement, audit trails, and regulatory reporting for Islamic digital-finance operations.",
    tech: ["JavaScript", "Node.js", "CockroachDB", "REST APIs", "JWT", "Digital Signature"],
    urls: [
      { label: "Source code", href: "https://github.com/AmirulJusticia0507/islamic-currency-engine", icon: <Github className="w-4 h-4" /> },
    ],
  },
  {
    title: "Lex Integrity",
    role: "Fullstack Engineer",
    period: "2024 · Legal-tech / Local AI",
    description:
      "Local AI Policy & Regulatory Compliance Matrix: legal integrity analysis and an automatic regulation-contradiction tracker built with the MERN stack plus a 100% offline Local LLM. Maps the Indonesian legal hierarchy (UU, PP, Perpres, Perda), detects discretion/gap abuse-of-power risk, analyzes policy impact, and surfaces sanctions visually.",
    tech: ["React", "Node.js", "MongoDB", "Express", "MERN", "Local LLM (offline)"],
    urls: [
      { label: "Source code", href: "https://github.com/AmirulJusticia0507/lex-integrity", icon: <Github className="w-4 h-4" /> },
    ],
  },
  {
    title: "54_testDNA",
    role: "Backend Engineer",
    period: "2023 · Health-tech",
    description:
      "DNA testing platform automating the full sample workflow: intake, test-result processing, and a reporting engine. Built with Node.js and a PostgreSQL backend for lab staff, clinicians, and client portals.",
    tech: ["JavaScript", "Node.js", "PostgreSQL", "REST APIs"],
    urls: [
      { label: "Source code", href: "https://github.com/AmirulJusticia0507/54_testDNA", icon: <Github className="w-4 h-4" /> },
    ],
  },
  {
    title: "DEP Service OfficeWill",
    role: "Backend Engineer",
    period: "2023 · GovTech / HR",
    description:
      "Digital Employee Performance (DEP) service for office management. Backend covering employee performance workflows, reporting, and task tracking — delivered during the CV Milimeter Yogyakarta engagement.",
    tech: ["PHP", "Laravel", "MySQL", "REST APIs"],
    urls: [
      { label: "Source code", href: "https://github.com/AmirulJusticia0507/DEP_Service_OfficeWill", icon: <Github className="w-4 h-4" /> },
    ],
  },
  {
    title: "E-Voting System Netizen",
    role: "Backend Engineer",
    period: "2023 · Civic-tech",
    description:
      "Online e-voting platform for citizen participation with secure, auditable ballot processing. Supports authentication, ballot encryption, anonymous tallying, and transparent result reporting.",
    tech: ["Python", "Django", "PostgreSQL", "JWT", "REST APIs"],
    urls: [
      { label: "Source code", href: "https://github.com/AmirulJustisia0507/e-voting-system-netizen", icon: <Github className="w-4 h-4" /> },
    ],
  },
  {
    title: "Healthcare Queue Scheduling Engine",
    role: "Backend Engineer",
    period: "2023 · Health-tech",
    description:
      "Hospital queue management system: appointment scheduling, queue allocation, real-time patient flow, and clinician dashboards for a smoother healthcare experience.",
    tech: ["JavaScript", "Node.js", "MySQL", "Socket.IO", "REST APIs"],
    urls: [
      { label: "Source code", href: "https://github.com/AmirulJustisia0507/healthcare-queue-scheduling-engine", icon: <Github className="w-4 h-4" /> },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">PROJECTS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Featured Work
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-xl">
            A selection of GovTech and fullstack projects I have led or built end-to-end.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-card border border-border rounded-xl p-5 flex flex-col flex-col h-full hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-3 flex-1">
                <h3 className="text-foreground font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] font-mono bg-secondary text-muted-foreground rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                  {p.description}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-muted-foreground">{p.period}</span>
                <div className="flex items-center gap-3">
                  {p.urls.map((u) => (
                    <Link
                      key={u.href}
                      href={u.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={u.label}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {u.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
