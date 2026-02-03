"use client";

import { Globe } from "lucide-react";

const languages = [
  {
    name: "Bahasa Indonesia",
    level: "Native",
    proficiency: 100,
  },
  {
    name: "English",
    level: "Professional working proficiency",
    proficiency: 80,
  },
];

export function Languages() {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">COMMUNICATION</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Languages
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{lang.name}</h3>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${lang.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
