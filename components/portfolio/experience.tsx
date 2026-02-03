"use client";

import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Web Systems Engineer (GovTech)",
    company: "PT Kencana Konsep Indonesia",
    location: "Bandung, West Java",
    period: "Oct 2024 - Jan 2026",
    type: "Contract",
    tech: ["PHP (Laravel)", "Vue.js", "Node.js", "Python (Django)", "MySQL", "PostgreSQL"],
    challenge: "Government systems across agencies were inconsistent and difficult to integrate via SPLP.",
    role: "Led implementation of backend, frontend, and integration workflows.",
    action: "Developed and maintained using PHP (Laravel), Vue.js, Node.js, Python (Django), MySQL, PostgreSQL; applied REST/SOAP APIs, data validation, and integration pipelines.",
  },
  {
    title: "Web Systems Engineer (GovTech)",
    company: "CV Milimeter Yogyakarta",
    location: "Yogyakarta, Indonesia",
    period: "Jun 2024 - Jul 2024",
    type: "Project-based",
    tech: ["PHP (Laravel)", "MySQL"],
    challenge: "Client required a custom online course platform within a tight delivery window.",
    role: "Led implementation of backend, frontend, and integration workflows.",
    action: "Developed and maintained using PHP (Laravel), MySQL; applied REST/SOAP APIs, data validation, and integration pipelines.",
  },
  {
    title: "Web Systems Engineer (GovTech)",
    company: "PT. BPRS HIK MCI Yogyakarta",
    location: "Yogyakarta, Indonesia",
    period: "Sep 2023 - Apr 2024",
    type: "Full-time",
    tech: ["PHP (Laravel)", "MySQL"],
    challenge: "Manual reporting caused frequent errors and operational inefficiencies.",
    role: "Led implementation of backend, frontend, and integration workflows.",
    action: "Developed and maintained using PHP (Laravel), MySQL; applied REST/SOAP APIs, data validation, and integration pipelines.",
  },
  {
    title: "IT Support (GovTech)",
    company: "PT. Maybank Indonesia Finance Tbk.",
    location: "Yogyakarta, Indonesia",
    period: "Jul 2023",
    type: "Contract",
    tech: ["IT Support"],
    challenge: "Branch required temporary IT coverage during peak operational period.",
    role: "Provided IT support and assistance.",
    action: "Provided technical support and troubleshooting for branch operations.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-12 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">CAREER</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Work Experience
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary" />
                
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs font-mono text-primary">CHALLENGE</span>
                      <p className="text-sm text-muted-foreground mt-1">{exp.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-primary">ROLE</span>
                      <p className="text-sm text-muted-foreground mt-1">{exp.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-secondary text-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
