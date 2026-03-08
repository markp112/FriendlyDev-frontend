const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-50 via-pastel-light-bg to-pastel-accent-50 dark:from-pastel-dark-bg dark:via-pastel-dark-surface dark:to-pastel-dark-elevated"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,197,251,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(54,167,247,0.05),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(216,180,254,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.05),transparent_40%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Intro Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 bg-pastel-light-surface dark:bg-pastel-dark-surface rounded-3xl p-8 lg:p-12 shadow-lg border border-pastel-light-border dark:border-pastel-dark-border backdrop-blur-sm">
            {/* Profile Image with decorative ring */}
            <div className="relative flex-shrink-0 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pastel-blue-400 to-pastel-accent-400 dark:from-pastel-blue-600 dark:to-pastel-accent-600 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="/images/profile.png"
                alt="Mark's profile"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-pastel-blue-300 dark:border-pastel-blue-700 shadow-2xl ring-4 ring-pastel-blue-100 dark:ring-pastel-blue-900/50 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Intro Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 bg-pastel-blue-100 dark:bg-pastel-blue-900/30 rounded-full text-sm font-medium text-pastel-blue-600 dark:text-pastel-blue-300 mb-4">
                Full Stack Developer
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-pastel-light-text dark:text-pastel-dark-text">Hey, I'm </span>
                <span className="bg-gradient-to-r from-pastel-blue-500 to-pastel-accent-500 dark:from-pastel-blue-400 dark:to-pastel-accent-400 bg-clip-text text-transparent">
                  Mark
                </span>
                <span className="ml-2">👋</span>
              </h1>
              <p className="text-lg text-pastel-light-text-muted dark:text-pastel-dark-text-muted leading-relaxed">
                I'm a passionate full stack developer with over{' '}
                <span className="font-semibold text-pastel-blue-600 dark:text-pastel-blue-400">35 years of experience</span> in the
                tech industry. I specialize in building modern, responsive web applications using the latest technologies. My goal
                is to create user-friendly, performant, and visually appealing websites. I live in{' '}
                <span className="font-semibold text-pastel-blue-600 dark:text-pastel-blue-400">France</span> close to the Pyrenees
                and love skiing. I am a native English speaker, and I love sharing my knowledge and helping others grow in their
                development journey.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-pastel-blue-100/50 to-pastel-accent-100/50 dark:from-pastel-dark-surface dark:to-pastel-dark-elevated rounded-2xl p-8 lg:p-10 shadow-lg border border-pastel-blue-200 dark:border-pastel-dark-border backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-pastel-blue-400 dark:bg-pastel-blue-600 flex items-center justify-center text-2xl shadow-lg">
                🎯
              </div>
              <h2 className="text-3xl font-bold text-pastel-light-text dark:text-pastel-dark-text">My Mission</h2>
            </div>
            <p className="text-lg text-pastel-light-text-muted dark:text-pastel-dark-text-muted leading-relaxed">
              I've spent the last 35 years working in the technology industry. During this time I have had many roles including
              <span className="font-semibold text-pastel-blue-600 dark:text-pastel-blue-400">
                {' '}
                developer, database developer, team lead, trainer and manager
              </span>
              . My mission is to share the knowledge I've gained to help others on their development journey. Through tutorials,
              courses, and real-world projects, I aim to make development accessible, friendly, and something you look forward to
              each day.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-pastel-light-surface dark:bg-pastel-dark-surface rounded-2xl p-8 lg:p-10 shadow-lg border border-pastel-light-border dark:border-pastel-dark-border backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pastel-accent-400 to-pastel-blue-400 dark:from-pastel-accent-600 dark:to-pastel-blue-600 flex items-center justify-center text-2xl shadow-lg">
              🚀
            </div>
            <h2 className="text-3xl font-bold text-pastel-light-text dark:text-pastel-dark-text">Tech I Use</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              'TypeScript',
              'React',
              'Next.js',
              'Vue',
              'Tailwind CSS',
              'Node.js',
              'Express',
              'Prisma',
              'Supabase',
              'PostgreSQL',
              'Firebase',
              'Git',
            ].map((tech) => (
              <div
                key={tech}
                className="group relative bg-gradient-to-br from-pastel-blue-50 to-pastel-accent-50 dark:from-pastel-dark-elevated dark:to-pastel-dark-surface px-4 py-3 rounded-xl text-center font-medium text-sm text-pastel-blue-700 dark:text-pastel-blue-300 border border-pastel-blue-200 dark:border-pastel-blue-800 hover:border-pastel-blue-400 dark:hover:border-pastel-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue-400/0 to-pastel-accent-400/0 group-hover:from-pastel-blue-400/10 group-hover:to-pastel-accent-400/10 rounded-xl transition-all duration-300"></div>
                <span className="relative">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
