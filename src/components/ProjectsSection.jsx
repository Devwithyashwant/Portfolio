import { ArrowRight, ExternalLink, Github } from "lucide-react";

// Architecture diagram for Distributed Rate Limiter & API Gateway
const RateLimiterArchitectureGraphic = () => (
  <div className="w-full h-full bg-[#070b14] relative flex items-center justify-center overflow-hidden p-2 select-none">
    {/* Subtle radial ambient glows */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none" />

    <svg
      viewBox="0 0 390 190"
      className="w-full h-full max-h-44 object-contain transition-transform duration-500 group-hover:scale-105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gatewayBorder" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>

        <pattern id="archGridDots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#334155" opacity="0.4" />
        </pattern>

        <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="#38bdf8" />
        </marker>
        <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="#f87171" />
        </marker>
        <marker id="arrowPurple" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="#c084fc" />
        </marker>
      </defs>

      {/* Grid Pattern */}
      <rect width="100%" height="100%" fill="url(#archGridDots)" />

      {/* Connecting Flows */}
      {/* Client -> Gateway */}
      <path
        d="M 92 95 L 142 95"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeDasharray="4 2"
        markerEnd="url(#arrowBlue)"
      />

      {/* Gateway -> Redis (Top branch) */}
      <path
        d="M 256 80 C 278 80, 284 52, 304 52"
        stroke="#f87171"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowRed)"
      />

      {/* Gateway -> Kafka (Bottom branch) */}
      <path
        d="M 256 110 C 278 110, 284 138, 304 138"
        stroke="#c084fc"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowPurple)"
      />

      {/* Node 1: Client */}
      <g transform="translate(20, 67)">
        <rect
          width="72"
          height="56"
          rx="8"
          fill="#0f172a"
          stroke="#38bdf8"
          strokeWidth="1.2"
          className="drop-shadow-[0_0_8px_rgba(56,189,248,0.25)]"
        />
        {/* Device screen icon */}
        <rect x="26" y="10" width="20" height="13" rx="2" stroke="#94a3b8" strokeWidth="1.2" fill="none" />
        <line x1="32" y1="23" x2="40" y2="23" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="36" y="36" fill="#f1f5f9" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">
          Client
        </text>
        <text x="36" y="47" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">
          HTTP / gRPC
        </text>
      </g>

      {/* Node 2: API Gateway */}
      <g transform="translate(144, 51)">
        <rect
          width="112"
          height="88"
          rx="10"
          fill="#0c1322"
          stroke="url(#gatewayBorder)"
          strokeWidth="1.8"
          className="drop-shadow-[0_0_12px_rgba(99,102,241,0.3)]"
        />
        <rect x="7" y="8" width="98" height="18" rx="4" fill="#1e293b" fillOpacity="0.8" />
        <text x="56" y="21" fill="#93c5fd" fontSize="9" fontWeight="700" letterSpacing="0.5" textAnchor="middle" fontFamily="system-ui, sans-serif">
          API GATEWAY
        </text>
        <text x="56" y="47" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">
          Rate Limiter
        </text>
        <rect x="13" y="58" width="86" height="18" rx="4" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="0.8" />
        <text x="56" y="70" fill="#60a5fa" fontSize="8.5" fontWeight="500" textAnchor="middle" fontFamily="system-ui, sans-serif">
          ⚡ Token Bucket
        </text>
      </g>

      {/* Node 3: Redis */}
      <g transform="translate(306, 28)">
        <rect
          width="70"
          height="48"
          rx="8"
          fill="#180b0e"
          stroke="#ef4444"
          strokeWidth="1.2"
          className="drop-shadow-[0_0_8px_rgba(239,68,68,0.25)]"
        />
        <circle cx="58" cy="12" r="3" fill="#22c55e" />
        <text x="32" y="22" fill="#fca5a5" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">
          Redis
        </text>
        <text x="32" y="36" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">
          State Cache
        </text>
      </g>

      {/* Node 4: Kafka */}
      <g transform="translate(306, 114)">
        <rect
          width="70"
          height="48"
          rx="8"
          fill="#150d22"
          stroke="#a855f7"
          strokeWidth="1.2"
          className="drop-shadow-[0_0_8px_rgba(168,85,247,0.25)]"
        />
        <circle cx="58" cy="12" r="3" fill="#a855f7" />
        <text x="32" y="22" fill="#d8b4fe" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">
          Kafka
        </text>
        <text x="32" y="36" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">
          Event Stream
        </text>
      </g>

      {/* Load Test Status */}
      <g transform="translate(20, 164)">
        <rect width="112" height="16" rx="4" fill="#020617" stroke="#334155" strokeWidth="0.8" />
        <circle cx="10" cy="8" r="2.5" fill="#10b981" />
        <text x="63" y="11.5" fill="#34d399" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">
          2,000+ RPS TESTED
        </text>
      </g>
    </svg>
  </div>
);

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "./projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "https://github.com/Devwithyashwant",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "./projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/Devwithyashwant",
  },
  {
    id: 3,
    title: "Distributed Rate Limiter & API Gateway",
    description:
      "A distributed rate limiting system built from scratch with Redis-backed state sharing and Kafka event streaming. Load tested to 2,000+ concurrent users.",
    image: "./projects/rate-limiter-arch.svg",
    customVisual: <RateLimiterArchitectureGraphic />,
    tags: ["Java", "Spring Boot", "Redis", "Kafka", "Docker"],
    demoUrl: null, // Omit live demo icon for backend-only infrastructure project
    githubUrl: "https://github.com/Devwithyashwant/rate-limiter-gateway.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden relative shrink-0 border-b border-border/40">
                {project.customVisual ? (
                  project.customVisual
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live preview`}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Devwithyashwant"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
