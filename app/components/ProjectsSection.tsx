import { Project } from "../types";

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "Scalable microservices architecture handling 10K+ daily transactions",
      gradient: "from-vivid-purple/20 to-royal-blue/20",
      tags: ["React", "Node.js", "AWS"],
      image: (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" fill="#0A0A0F" />
          <rect x="20" y="20" width="360" height="40" rx="8" fill="#1A1A2E" />
          <circle cx="40" cy="40" r="8" fill="#DC65E2" />
          <rect x="60" y="35" width="100" height="10" rx="5" fill="#3A3A4E" />
          <rect x="320" y="30" width="50" height="20" rx="10" fill="#DC65E2" />

          <rect x="20" y="80" width="170" height="200" rx="8" fill="#1A1A2E" />
          <rect x="30" y="90" width="150" height="100" rx="4" fill="#2A2A3E" />
          <rect x="30" y="200" width="100" height="10" rx="5" fill="#DC65E2" />
          <rect x="30" y="220" width="150" height="8" rx="4" fill="#3A3A4E" />
          <rect x="30" y="235" width="120" height="8" rx="4" fill="#3A3A4E" />
          <rect x="30" y="255" width="60" height="20" rx="10" fill="#0602B7" />

          <rect x="210" y="80" width="170" height="200" rx="8" fill="#1A1A2E" />
          <rect x="220" y="90" width="150" height="100" rx="4" fill="#2A2A3E" />
          <rect x="220" y="200" width="100" height="10" rx="5" fill="#DC65E2" />
          <rect x="220" y="220" width="150" height="8" rx="4" fill="#3A3A4E" />
          <rect x="220" y="235" width="120" height="8" rx="4" fill="#3A3A4E" />
          <rect x="220" y="255" width="60" height="20" rx="10" fill="#0602B7" />
        </svg>
      ),
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics SaaS platform for Fortune 500 AI services",
      gradient: "from-royal-blue/20 to-vivid-purple/20",
      tags: ["ASP.NET Core", "C#", "Azure SQL"],
      image: (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" fill="#0A0A0F" />
          <rect x="20" y="20" width="80" height="260" rx="8" fill="#1A1A2E" />
          <rect x="30" y="30" width="60" height="10" rx="5" fill="#3A3A4E" />
          <rect x="30" y="50" width="60" height="8" rx="4" fill="#DC65E2" />
          <rect x="30" y="65" width="60" height="8" rx="4" fill="#3A3A4E" />
          <rect x="30" y="80" width="60" height="8" rx="4" fill="#3A3A4E" />

          <rect x="120" y="20" width="260" height="120" rx="8" fill="#1A1A2E" />
          <path
            d="M140 100 L180 80 L220 90 L260 60 L300 70 L340 50"
            stroke="#DC65E2"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="140" cy="100" r="4" fill="#DC65E2" />
          <circle cx="180" cy="80" r="4" fill="#DC65E2" />
          <circle cx="220" cy="90" r="4" fill="#DC65E2" />
          <circle cx="260" cy="60" r="4" fill="#DC65E2" />
          <circle cx="300" cy="70" r="4" fill="#DC65E2" />
          <circle cx="340" cy="50" r="4" fill="#DC65E2" />

          <rect
            x="120"
            y="160"
            width="125"
            height="120"
            rx="8"
            fill="#1A1A2E"
          />
          <rect x="130" y="200" width="20" height="70" rx="4" fill="#0602B7" />
          <rect x="160" y="180" width="20" height="90" rx="4" fill="#DC65E2" />
          <rect x="190" y="190" width="20" height="80" rx="4" fill="#0602B7" />
          <rect x="220" y="210" width="20" height="60" rx="4" fill="#DC65E2" />

          <rect
            x="255"
            y="160"
            width="125"
            height="120"
            rx="8"
            fill="#1A1A2E"
          />
          <circle
            cx="317"
            cy="220"
            r="40"
            fill="none"
            stroke="#DC65E2"
            strokeWidth="8"
          />
          <circle
            cx="317"
            cy="220"
            r="40"
            fill="none"
            stroke="#0602B7"
            strokeWidth="8"
            strokeDasharray="80 171"
            transform="rotate(-90 317 220)"
          />
        </svg>
      ),
    },
    {
      title: "Healthcare System",
      description:
        "Hospital Information System platform serving 100K+ healthcare providers",
      gradient: "from-vivid-purple/20 to-light-gray/10",
      tags: [".NET", "C#", "SQL Server"],
      image: (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" fill="#0A0A0F" />
          <rect x="20" y="20" width="360" height="40" rx="8" fill="#1A1A2E" />
          <rect x="30" y="30" width="80" height="20" rx="10" fill="#DC65E2" />
          <text x="70" y="44" fill="#FFFFFF" fontSize="12" textAnchor="middle">
            Patient Portal
          </text>

          <rect x="20" y="80" width="240" height="200" rx="8" fill="#1A1A2E" />
          <circle cx="80" cy="130" r="30" fill="#2A2A3E" />
          <path
            d="M80 115 L80 145 M65 130 L95 130"
            stroke="#DC65E2"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <rect x="130" y="110" width="120" height="10" rx="5" fill="#3A3A4E" />
          <rect x="130" y="130" width="100" height="8" rx="4" fill="#3A3A4E" />
          <rect x="130" y="145" width="80" height="8" rx="4" fill="#3A3A4E" />

          <rect x="30" y="180" width="220" height="40" rx="8" fill="#2A2A3E" />
          <rect x="40" y="190" width="60" height="20" rx="4" fill="#0602B7" />
          <rect x="110" y="190" width="60" height="20" rx="4" fill="#DC65E2" />
          <rect x="180" y="190" width="60" height="20" rx="4" fill="#0602B7" />

          <rect x="30" y="230" width="220" height="40" rx="8" fill="#2A2A3E" />
          <path
            d="M50 250 L70 250 L75 240 L80 260 L85 250 L105 250"
            stroke="#DC65E2"
            strokeWidth="2"
            fill="none"
          />
          <rect x="120" y="245" width="50" height="10" rx="5" fill="#3A3A4E" />
          <rect x="180" y="245" width="60" height="10" rx="5" fill="#3A3A4E" />

          <rect x="280" y="80" width="100" height="200" rx="8" fill="#1A1A2E" />
          <rect x="290" y="90" width="80" height="30" rx="4" fill="#DC65E2" />
          <rect x="290" y="130" width="80" height="40" rx="4" fill="#2A2A3E" />
          <rect x="290" y="180" width="80" height="40" rx="4" fill="#2A2A3E" />
          <rect x="290" y="230" width="80" height="40" rx="4" fill="#2A2A3E" />
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-hover bg-light-gray/[0.02] rounded-xl overflow-hidden border border-light-gray/10"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {project.image || (
                  // Fallback gradient if no image provided
                  <div className="w-full h-full" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-light-gray/60 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-vivid-purple/20 rounded-full text-sm font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
