import { TechStack } from "../types";

const AboutSection: React.FC = () => {
  const techStacks: TechStack[] = [
    { title: "Frontend", skills: "React, Next.js, Vue, TypeScript" },
    { title: "Backend", skills: "Node.js, Python, Go, PostgreSQL" },
    { title: "Cloud", skills: "AWS, GCP, Docker, Kubernetes" },
    { title: "Tools", skills: "Git, CI/CD, Terraform, Jenkins" },
  ];

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Tech Stack" },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          About Me
        </h2>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-vivid-purple/20 scale-110 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-2 border-royal-blue/20 scale-105"></div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-light-gray/10 bg-gradient-to-br from-vivid-purple/20 to-royal-blue/20">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-vivid-purple/10 to-royal-blue/10">
                  <span className="text-7xl md:text-8xl font-heading font-bold text-light-gray/90">
                    AA
                  </span>
                </div>
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-dark-black"></div>
            </div>
          </div>

          {/* Right side - Bio */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <p className="text-xl font-body text-light-gray/90 mb-4">
                Hey there! I'm{" "}
                <span className="text-vivid-purple font-semibold">
                  Aiyoub Amini
                </span>
                , a passionate full-stack developer with a love for creating
                elegant solutions to complex problems.
              </p>
              <p className="font-body text-light-gray/80 mb-4 leading-relaxed">
                With over 15 years of experience in software development, I
                specialize in building robust, scalable applications that drive
                business growth. My journey in tech started with a curiosity
                about how things work, and it has evolved into a career
                dedicated to crafting exceptional digital experiences.
              </p>
              <p className="font-body text-light-gray/80 leading-relaxed">
                I've had the privilege of working with Fortune 500 companies,
                innovative startups, and everything in between. My approach
                combines technical excellence with a deep understanding of user
                needs, ensuring that every project not only works flawlessly but
                also delights its users.
              </p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-light-gray/70">
                <svg
                  className="w-5 h-5 text-vivid-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-body">Toronto, Canada</span>
              </div>
              <div className="flex items-center gap-2 text-light-gray/70">
                <svg
                  className="w-5 h-5 text-vivid-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A9 9 0 1120.932 12H21m0 0a9 9 0 00-9-9v9h9z"
                  />
                </svg>
                <span className="font-body">Available for freelance</span>
              </div>
              <div className="flex items-center gap-2 text-light-gray/70">
                <svg
                  className="w-5 h-5 text-vivid-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className="font-body">B.Sc. in Software Engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Arsenal Style */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">
            My Impact & Experience
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="tech-card p-6 rounded-lg text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-vivid-purple/20 to-royal-blue/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-light-gray/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-2xl bg-gradient-to-r from-vivid-purple to-royal-blue bg-clip-text text-transparent mb-1">
                15+
              </h3>
              <p className="font-body text-sm text-light-gray/60">
                Years Experience
              </p>
            </div>

            <div className="tech-card p-6 rounded-lg text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-vivid-purple/20 to-royal-blue/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-light-gray/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-2xl bg-gradient-to-r from-vivid-purple to-royal-blue bg-clip-text text-transparent mb-1">
                150+
              </h3>
              <p className="font-body text-sm text-light-gray/60">
                Projects Completed
              </p>
            </div>

            <div className="tech-card p-6 rounded-lg text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-vivid-purple/20 to-royal-blue/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-light-gray/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-2xl bg-gradient-to-r from-vivid-purple to-royal-blue bg-clip-text text-transparent mb-1">
                100+
              </h3>
              <p className="font-body text-sm text-light-gray/60">
                Happy Clients
              </p>
            </div>

            <div className="tech-card p-6 rounded-lg text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-vivid-purple/20 to-royal-blue/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-light-gray/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-2xl bg-gradient-to-r from-vivid-purple to-royal-blue bg-clip-text text-transparent mb-1">
                99%
              </h3>
              <p className="font-body text-sm text-light-gray/60">
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
