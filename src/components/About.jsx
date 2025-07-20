const About = () => {
  const skills = ["React", ".NET", "C#", "JavaScript", "HTML", "CSS", "Python", "Git", "MySQL", "SQLServer"]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a fullstack developer who enjoys building web apps from start to finish.
              I work mainly with React on the frontend and .NET on the backend, always focused on writing clean code and creating smooth user experiences.
              I like turning ideas into real, functional products.
              I'm always learning and trying new things to grow as a developer and build better solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Currently seeking my first developer role where I can contribute to meaningful projects and continue
              growing my skills in a collaborative environment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 text-center text-gray-700 dark:text-gray-200 font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
