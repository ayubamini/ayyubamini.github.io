const SkillsSection: React.FC = () => {
  const skillsData = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Frontend Development",
      items: [
        "React.js & Next.js",
        "ASP.NET Core",
        "TypeScript",
        "Tailwind CSS & Bootstrap",
        "UI/UX",
      ],
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      title: "Backend Development",
      items: [
        "Node.js & Express",
        "Python & C#.NET Core",
        "RESTful APIs & OAuth",
        "SQL Server & MongoDB",
        "Redis & Message Queues",
      ],
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      title: "DevOps & Cloud",
      items: [
        "AWS & Azure Cloud",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Big Data & Hadoop Components",
        "Monitoring & Logging",
      ],
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "AI & ML Integration",
      items: [
        "OpenAI & Claude APIs",
        "Prompt Engineering",
        "Pandas & Flask",
        "TensorFlow & PyTorch",
        "AI-Powered Features",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-dark-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="card-hover bg-light-gray/[0.02] p-8 rounded-xl border border-light-gray/10 hover:border-vivid-purple/30"
            >
              <div className="text-light-gray/80 mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-heading font-semibold mb-4 bg-gradient-to-r from-vivid-purple to-royal-blue bg-clip-text text-transparent">
                {skill.title}
              </h3>
              <ul className="space-y-2 font-body text-light-gray/80">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-vivid-purple mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
