"use client";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "CodeIgniter", level: "Advanced" },
      { name: "Laravel", level: "Advanced" },
      { name: "Python (Django)", level: "Intermediate" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js", level: "Advanced" },
      { name: "React.js", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "REST/SOAP APIs", level: "Advanced" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", level: "Intermediate" },
      { name: "PHPUnit", level: "Intermediate" },
    ],
  },
];

function getLevelWidth(level: string) {
  switch (level) {
    case "Advanced":
      return "w-full";
    case "Intermediate":
      return "w-3/4";
    case "Beginner":
      return "w-1/2";
    default:
      return "w-1/2";
  }
}

function getLevelColor(level: string) {
  switch (level) {
    case "Advanced":
      return "bg-primary";
    case "Intermediate":
      return "bg-primary/70";
    default:
      return "bg-primary/50";
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Core Skills
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getLevelWidth(skill.level)} ${getLevelColor(skill.level)} rounded-full transition-all duration-500`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
