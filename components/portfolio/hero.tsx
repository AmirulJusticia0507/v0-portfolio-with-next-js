"use client";

import { Mail, Phone, Linkedin, Github, MapPin, ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 py-20 relative">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="text-primary font-mono text-sm tracking-wider">
            FULLSTACK / WEB SYSTEMS ENGINEER
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
          Amirul Putra Justicia
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl text-pretty">
          Fullstack Engineer with{" "}
          <span className="text-primary font-semibold">6+ years</span> in GovTech 
          delivering interoperable web platforms and secure data workflows. 
          Integrated <span className="text-primary font-semibold">10+ government institutions</span>, 
          maintained <span className="text-primary font-semibold">~99.9% uptime</span>, and reduced 
          cross-system inconsistencies by <span className="text-primary font-semibold">~30%</span>.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="mailto:amirulputra0507@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">amirulputra0507@gmail.com</span>
          </Link>
          <Link
            href="tel:+6282134402383"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">+62-821-3440-2383</span>
          </Link>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Indonesia</span>
          </span>
        </div>
        
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/amirul-putra-justicia-70ba31191"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 hover:text-primary transition-all duration-300 group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 hover:text-primary transition-all duration-300 group"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
