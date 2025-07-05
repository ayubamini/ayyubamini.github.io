const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vivid-purple/10 via-dark-black to-dark-black"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            <span className="gradient-text">Aiyoub Amini</span>
          </h2>
          <p className="text-2xl md:text-3xl font-heading font-semibold text-light-gray/90 mb-8">Full-Stack Developer</p>
          <p className="text-lg font-body text-light-gray/70 max-w-2xl mx-auto mb-12">
            Crafting enterprise-grade solutions with modern technologies. 
            Expert in scalable architectures, cloud infrastructure, and delivering 
            exceptional user experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-vivid-purple hover:bg-vivid-purple/90 rounded-lg font-heading font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-vivid-purple/25"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-vivid-purple hover:bg-vivid-purple/10 rounded-lg font-heading font-semibold transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-light-gray/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection