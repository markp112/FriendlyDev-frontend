import { Link } from 'react-router';

type HeroProps = {
  name?: string;
  text?: string;
};

const DEFAULT_TEXT = "I'm glad you're here. Explore my projects, read my blog, and feel free to reach out!";

const Hero = ({ name = 'Mark', text = DEFAULT_TEXT }: Readonly<HeroProps>) => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-pastel-blue-50 via-pastel-accent-50 to-pastel-blue-100 dark:from-pastel-dark-bg dark:via-pastel-dark-surface dark:to-pastel-dark-elevated">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,197,251,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(54,167,247,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(216,180,254,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <header className="flex-1 text-center lg:text-left space-y-6 z-10">
            <div className="inline-block px-4 py-2 bg-pastel-blue-100/50 dark:bg-pastel-blue-900/30 rounded-full text-sm font-medium text-pastel-blue-600 dark:text-pastel-blue-300 border border-pastel-blue-200 dark:border-pastel-blue-800 backdrop-blur-sm">
              👋 Welcome to Thread Byte
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-pastel-light-text dark:text-pastel-dark-text">Hey, I'm </span>
              <span className="bg-gradient-to-r from-pastel-blue-500 via-pastel-blue-400 to-pastel-accent-400 dark:from-pastel-blue-400 dark:via-pastel-blue-300 dark:to-pastel-accent-300 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-pastel-light-text-muted dark:text-pastel-dark-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {text}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                to="/projects"
                className="button-primary text-white shadow-lg shadow-pastel-blue-400/30 dark:shadow-pastel-blue-600/20 hover:shadow-xl hover:shadow-pastel-blue-400/40 dark:hover:shadow-pastel-blue-600/30 hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 rounded font-semibold border-2 border-pastel-blue-400 dark:border-pastel-blue-600 text-pastel-blue-600 dark:text-pastel-blue-300 hover:bg-pastel-blue-400/10 dark:hover:bg-pastel-blue-600/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </header>

          {/* Image Section */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pastel-blue-400 to-pastel-accent-400 dark:from-pastel-blue-600 dark:to-pastel-accent-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/djr6soykp/image/upload/v1772986072/hero_image_alternative_b8c2da21b3.png"
                alt="Developer workspace"
                className="w-full max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl border-4 border-pastel-blue-200/50 dark:border-pastel-blue-800/50 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay gradient for better blending */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pastel-blue-500/10 to-transparent dark:from-pastel-blue-400/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
