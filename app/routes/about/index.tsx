const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-16 mb-12">
        <img
          src="/images/profile.png"
          alt="profile"
          className=" w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Hey, I'm Mark 👋</h1>
          <p className="text-gray-300 text-lg">
            I'm a passionate full stack developer with over 35 years of experience in the tech industry. I specialize in building modern,
            responsive web applications using the latest technologies. My goal is to create user-friendly, performant, and visually
            appealing websites. I live in France and I am a native English speaker. I love sharing my knowledge and helping others
            grow in their development journey.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          I've spent the last 35 years working in the technology industry. During this time I have had many roles including
          developer, database developer, team lead, trainer and manager. My mission is to share the knowledge I've gained to help
          others on their development journey. Through tutorials, courses, and real-world projects, I aim to make development
          accessible, friendly, and something you look forward to each day.
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">🚀 Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
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
          <li
            key={tech}
            className="bg-gray-700 px-3 py-1 rounded-md"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
