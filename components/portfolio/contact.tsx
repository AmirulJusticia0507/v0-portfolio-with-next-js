"use client";

import { Mail, Phone, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-primary font-mono text-sm tracking-wider">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            {"Let's Connect"}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-pretty">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="mailto:amirulputra0507@gmail.com"
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 text-center"
          >
            <div className="p-4 bg-secondary rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">amirulputra0507@gmail.com</p>
          </Link>
          
          <Link
            href="tel:+6282134402383"
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 text-center"
          >
            <div className="p-4 bg-secondary rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <p className="text-sm text-muted-foreground">+62-821-3440-2383</p>
          </Link>
          
          <Link
            href="https://www.linkedin.com/in/amirul-putra-justicia-70ba31191"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 text-center"
          >
            <div className="p-4 bg-secondary rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </Link>
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="mailto:amirulputra0507@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Send Message
          </Link>
        </div>
      </div>
    </section>
  );
}
