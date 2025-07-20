"use client"

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mariano Gerosa</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Full Stack Developer specializing in React and .NET
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Passionate about creating beautiful, functional, and user-friendly web applications that solve real-world
          problems.
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="inline-flex items-center px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
        >
          View My Projects
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="text-gray-400 dark:text-gray-500 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Home
