"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f3efe6]/90 backdrop-blur-lg border-b border-foreground"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-foreground">
          AMIRUL<span className="text-primary">®</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xs font-mono uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="mailto:amirulputra0507@gmail.com"
              className="px-5 py-2 text-sm bg-foreground text-[#fffaf0] rounded-full hover:bg-primary hover:text-foreground transition-all"
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="mailto:amirulputra0507@gmail.com"
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
