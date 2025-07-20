const Projects = () => {
  const projects = [
    {
      title: "Rincón del Remo",
      description:
        "Web platform designed to manage kayak lockers, facilitate user-to-user rentals, and improve the organization of boat storage facilities.",
      techStack: [".NET", "EntityFramework", "Azure", "MySQL", "Swagger"],
      github: "https://github.com/FrancoBerlochi/RinconDelRemo-Back",
    },
    {
      title: "Gestión de Mantenimiento de Bicicletas",
      description:
        "The bicycle management information system seeks to improve interaction between customers who need bicycle maintenance or repair services and the workshop owners who provide these services.",
      techStack: [".NET", "EntityFramework", "Swagger", "SQLite"],
      github: "https://github.com/FrancoBalduini/TPI-Web-Api",
    },
    {
      title: "Guardería de Mascotas(Fontend)",
      description: "A system that allows pet owners to leave their pets in the care of daycare centers that meet the owners' specifications.",
      techStack: ["React", "Fake API", "Bootstrap", "Vite"],
      github: "https://github.com/FrancoBalduini/TPI-LC3",
    },
    {
      title: "Guardería de Mascotas(Backend)",
      description:
        "A system that allows pet owners to leave their pets in the care of daycare centers that meet the owners' specifications.",
      techStack: [".NET", "EntityFramework", "Swagger", "SQLite"],
      github: "https://github.com/facundolgomez/proyecto-web-API",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>                                
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
