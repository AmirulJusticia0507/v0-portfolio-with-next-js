"use client";

import { Mail, Phone, Linkedin, MapPin, ArrowDown, Download } from "lucide-react";
import Link from "next/link";

import { GithubIcon } from "./github-icon";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-28 pb-16 relative overflow-hidden bg-[#f3efe6]">
      <div className="absolute right-[-8rem] top-24 size-[28rem] rounded-full bg-[#ff5c35] opacity-90 blur-[1px] md:size-[40rem]" aria-hidden="true" />
      <div className="absolute right-10 bottom-12 hidden h-48 w-72 rotate-[-7deg] border border-[#102f2a] bg-[#d9e9a8] md:block" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="mb-8 flex items-center gap-4">
          <span className="section-kicker text-foreground">
            FULLSTACK / WEB SYSTEMS ENGINEER
          </span>
          <span className="h-px w-20 bg-foreground" />
        </div>
        
        <h1 className="max-w-5xl text-[clamp(4.4rem,12vw,10.5rem)] font-black uppercase leading-[0.78] text-foreground mb-10 tracking-[-0.075em] text-balance">
          Amirul<br /><span className="text-primary">Putra.</span>
        </h1>
        
        <p className="text-base md:text-xl text-foreground leading-relaxed mb-8 max-w-2xl text-pretty border-l-2 border-foreground pl-5">
          Fullstack Engineer with{" "}
          <span className="text-primary font-semibold">6+ years</span> in GovTech 
          delivering interoperable web platforms and secure data workflows. 
          Integrated <span className="text-primary font-semibold">10+ government institutions</span>, 
          maintained <span className="text-primary font-semibold">~99.9% uptime</span>, and reduced 
          cross-system inconsistencies by <span className="text-primary font-semibold">~30%</span>.
        </p>
        
        <div className="flex flex-wrap gap-x-7 gap-y-3 mb-10 font-mono">
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
        
        <div className="flex flex-wrap gap-4">
          <a
            href="/Amirul-Putra-Justicia-CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-[#fffaf0] font-semibold rounded-full hover:bg-primary hover:text-foreground transition-all"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
          <Link
            href="https://www.linkedin.com/in/amirul-putra-justicia-70ba31191"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#d9e9a8] border border-foreground rounded-full hover:bg-primary transition-all duration-300 group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#d9e9a8] border border-foreground rounded-full hover:bg-primary transition-all duration-300 group"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
