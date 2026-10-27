import { memo } from "react";
import { Sparkles, Brain, Cpu, Database, Network, Search } from "lucide-react";

// Official Tech SVG Icons crafted for sharp dark-mode rendering
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path
      d="M11.914 2c-5.043 0-4.73 2.186-4.73 2.186l.006 2.264h4.79v.68H5.253S2 6.762 2 11.83s2.833 4.904 2.833 4.904h1.693v-2.378s-.092-2.833 2.776-2.833h4.77v-.712s.061-2.025-2.158-2.025h-5.03v-2.22s-.184-2.566 5.028-2.566zm-2.67 1.442a.855.855 0 1 1 0 1.71.855.855 0 0 1 0-1.71z"
      fill="#387EB8"
    />
    <path
      d="M12.086 22c5.043 0 4.73-2.186 4.73-2.186l-.006-2.264h-4.79v-.68h6.727S22 17.238 22 12.17s-2.833-4.904-2.833-4.904h-1.693v2.378s.092 2.833-2.776 2.833h-4.77v.712s-.061 2.025 2.158 2.025h5.03v2.22s.184 2.566-5.028 2.566zm2.67-1.442a.855.855 0 1 1 0-1.71.855.855 0 0 1 0 1.71z"
      fill="#FFE052"
    />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path
      d="M11.25 10.5H5.75V12h2v7h1.75v-7h1.75v-1.5zm7 2.25c-.5-.4-1.2-.6-2-.6-1.1 0-1.75.5-1.75 1.25 0 1.5 3.75 1.1 3.75 3.6 0 1.5-1.2 2.25-2.75 2.25-1.1 0-2.1-.4-2.75-1.1l.9-1.25c.5.5 1.15.85 1.85.85.8 0 1.25-.35 1.25-.85 0-1.55-3.75-1.15-3.75-3.6 0-1.5 1.2-2.25 2.65-2.25.95 0 1.8.35 2.35.85l-.5 1.15z"
      fill="#FFFFFF"
    />
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path
      d="M7.5 18.5c-.8 0-1.5-.3-2-.7l.7-1.2c.4.3.8.5 1.3.5.6 0 1-.3 1-1v-5.6h1.6v5.7c0 1.5-1 2.3-2.6 2.3zm8.5 0c-1.6 0-2.6-.9-2.6-2.3l1.5-.2c.1.8.6 1.2 1.3 1.2.7 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.4-1.3l-.6-.3c-1.4-.6-2-1.3-2-2.4 0-1.4 1.1-2.3 2.6-2.3 1.4 0 2.3.6 2.5 1.8l-1.5.3c-.1-.6-.5-.9-1.1-.9-.6 0-1 .3-1 .8 0 .5.4.8 1.1 1.1l.6.3c1.6.7 2.3 1.4 2.3 2.6-.1 1.5-1.2 2.4-2.9 2.4z"
      fill="#000000"
    />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </svg>
);

const NextJsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <circle cx="12" cy="12" r="11" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />
    <path
      d="M15.5 8v8m-7-8v8l8-9"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NodeJsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path
      d="M12 2.5l8 4.6v9.2l-8 4.6-8-4.6V7.1L12 2.5z"
      fill="#5FA04E"
    />
    <path
      d="M12 4.2l6.5 3.8v7.5L12 19.3l-6.5-3.8V8L12 4.2z"
      fill="#333333"
    />
    <path
      d="M10 9h3c1 0 1.8.8 1.8 1.8v3.4c0 1-.8 1.8-1.8 1.8h-3V9z"
      stroke="#5FA04E"
      strokeWidth="1.4"
    />
  </svg>
);

const ExpressIcon = () => (
  <span className="text-[11px] font-bold font-mono tracking-tighter text-foreground px-1 py-0.5 rounded bg-muted/60 border border-border/40">
    ex
  </span>
);

const FastAPIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <circle cx="12" cy="12" r="11" fill="#059669" />
    <path d="M13 3L6 13h5l-1 8 8-11h-5l1-7z" fill="#ffffff" />
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path
      d="M12 3c-4.97 0-9 3.58-9 8 0 2.8 1.63 5.27 4.12 6.67-.12-.67-.2-1.4-.2-2.17 0-3.87 2.24-7 5-7s5 3.13 5 7c0 .77-.08 1.5-.2 2.17C19.37 16.27 21 13.8 21 11c0-4.42-4.03-8-9-8z"
      fill="#336791"
    />
    <circle cx="9.5" cy="10.5" r="1" fill="#ffffff" />
    <circle cx="14.5" cy="10.5" r="1" fill="#ffffff" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path
      d="M19 12c-1.5-3-4-5-8-5-4 0-7 2.5-8 6.5 1-1.5 2.5-2.5 4.5-2.5 2 0 3.5 1 4.5 2.5 1-1.5 2.5-2 4.5-2 1 0 1.8.2 2.5.5z"
      fill="#00758F"
    />
    <path d="M12 17c2 0 4-.5 5.5-1.5-1-.5-2.2-.8-3.5-.8-2 0-3.5.7-4.5 2 .8.2 1.6.3 2.5.3z" fill="#F29111" />
  </svg>
);

const RedisIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path d="M3 8l9-5 9 5-9 5-9-5z" fill="#DC382D" />
    <path d="M3 12l9 5 9-5v3l-9 5-9-5v-3z" fill="#A41E11" />
    <path d="M3 16l9 5 9-5v2l-9 5-9-5v-2z" fill="#781309" />
  </svg>
);

const DynamoDBIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="3" fill="#2E5B88" />
    <ellipse cx="12" cy="8" rx="6" ry="2" fill="#4B8BBE" />
    <ellipse cx="12" cy="12" rx="6" ry="2" fill="#3B74A8" />
    <ellipse cx="12" cy="16" rx="6" ry="2" fill="#2A537A" />
  </svg>
);

const PrismaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path d="M4 19L14.5 3l5.5 16H4z" fill="#2D3748" stroke="#00E5FF" strokeWidth="1.5" />
    <path d="M14.5 3L11 19l9 0L14.5 3z" fill="#00E5FF" opacity="0.3" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path
      d="M7 10l-2 5h1.5l.5-1.4h2.2l.5 1.4H11L9 10H7zm.8 2.4l.6-1.6.6 1.6H7.8zm5.2-2.4l-1 5h1.3l.5-2.6.8 2.6h1.2l.8-2.6.5 2.6h1.3l-1-5h-1.4l-.8 2.8-.8-2.8H13zm-8 7.5c5 2.5 12 2.5 16 0"
      stroke="#FF9900"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path
      d="M2 13.5c1.5 3.5 5 5 9.5 5 5.5 0 9-2.5 10.5-7-2 .5-4 .2-5-1-1 2-3 2.5-4.5 2.5h-10v.5z"
      fill="#2496ED"
    />
    <rect x="5" y="10" width="2" height="2" fill="#2496ED" rx="0.3" />
    <rect x="8" y="10" width="2" height="2" fill="#2496ED" rx="0.3" />
    <rect x="11" y="10" width="2" height="2" fill="#2496ED" rx="0.3" />
    <rect x="8" y="7.5" width="2" height="2" fill="#2496ED" rx="0.3" />
    <rect x="11" y="7.5" width="2" height="2" fill="#2496ED" rx="0.3" />
    <rect x="11" y="5" width="2" height="2" fill="#2496ED" rx="0.3" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path
      d="M12 2L2 12l10 10 10-10L12 2z"
      fill="#F05032"
    />
    <circle cx="12" cy="7" r="1.5" fill="#ffffff" />
    <circle cx="8.5" cy="12" r="1.5" fill="#ffffff" />
    <circle cx="15.5" cy="15.5" r="1.5" fill="#ffffff" />
    <path d="M12 8.5v4l3.5 1.5" stroke="#ffffff" strokeWidth="1.2" />
    <path d="M8.5 13.5l3.5 3" stroke="#ffffff" strokeWidth="1.2" />
  </svg>
);

const GitHubActionsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <circle cx="12" cy="12" r="10" fill="#2088FF" />
    <path
      d="M7 12l3.5 3.5L17 9"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const S3Icon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <rect x="4" y="5" width="16" height="14" rx="2" fill="#E25822" />
    <ellipse cx="12" cy="7.5" rx="6" ry="1.5" fill="#FF8C00" />
    <path d="M6 7.5v9c0 .8 2.7 1.5 6 1.5s6-.7 6-1.5v-9" stroke="#ffffff" strokeWidth="1" />
  </svg>
);

const JestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path
      d="M12 2a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.1V18a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4.9c1.8-1 3-2.9 3-5.1a6 6 0 0 0-6-6z"
      fill="#C21325"
    />
    <circle cx="10" cy="7.5" r="1" fill="#ffffff" />
    <circle cx="14" cy="7.5" r="1" fill="#ffffff" />
    <path d="M10 11c1 .8 3 .8 4 0" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const VitestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <path d="M3 4l9 16 9-16H3z" fill="#FCC72B" />
    <path d="M7 4l5 9 5-9H7z" fill="#729B1B" />
    <path d="M12 8l2.5 5H9.5L12 8z" fill="#ffffff" />
  </svg>
);

// Structured skill categories matching the reference design layout
const skillCategories = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
    ],
  },
  {
    title: "FRAMEWORKS",
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextJsIcon /> },
      { name: "Node.js", icon: <NodeJsIcon /> },
      { name: "Express.js", icon: <ExpressIcon /> },
      { name: "FastAPI", icon: <FastAPIIcon /> },
    ],
  },
  {
    title: "DATABASES",
    skills: [
      { name: "PostgreSQL", icon: <PostgresIcon /> },
      { name: "MySQL", icon: <MySQLIcon /> },
      { name: "Redis", icon: <RedisIcon /> },
      { name: "DynamoDB", icon: <DynamoDBIcon /> },
      { name: "Prisma", icon: <PrismaIcon /> },
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    skills: [
      { name: "AWS", icon: <AWSIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
      { name: "Git", icon: <GitIcon /> },
      { name: "GitHub Actions", icon: <GitHubActionsIcon /> },
      { name: "S3", icon: <S3Icon /> },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "LLM APIs", icon: <Sparkles className="w-3.5 h-3.5 text-blue-400" /> },
      { name: "LangGraph", icon: <Network className="w-3.5 h-3.5 text-indigo-400" /> },
      { name: "RAG pipelines", icon: <Database className="w-3.5 h-3.5 text-cyan-400" /> },
      { name: "Vector embeddings", icon: <Brain className="w-3.5 h-3.5 text-purple-400" /> },
      { name: "Semantic search", icon: <Search className="w-3.5 h-3.5 text-sky-400" /> },
    ],
  },
  {
    title: "TESTING",
    skills: [
      { name: "Jest", icon: <JestIcon /> },
      { name: "Vitest", icon: <VitestIcon /> },
    ],
  },
];

export const SkillsSection = memo(() => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Eyebrow and Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground font-semibold">
              TOOLBOX
            </span>
            <span className="h-px bg-border/40 flex-1 max-w-[180px] sm:max-w-xs" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What I <span className="text-primary text-glow">build with</span>
          </h2>
        </div>

        {/* Categories Stacked Rows */}
        <div className="border-b border-border/40 divide-y divide-border/30">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 md:gap-8 group transition-colors duration-200"
            >
              {/* Category Label (Left Column) */}
              <div className="w-full sm:w-40 md:w-48 shrink-0 text-left">
                <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-muted-foreground/80 group-hover:text-primary transition-colors font-semibold">
                  {category.title}
                </span>
              </div>

              {/* Badges / Chips (Right Column) */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center flex-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-card/60 border border-border/50 hover:border-primary/60 hover:bg-card/90 hover:scale-[1.03] transition-all duration-200 text-xs sm:text-sm font-medium text-foreground/90 shadow-xs cursor-default backdrop-blur-xs select-none"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";
