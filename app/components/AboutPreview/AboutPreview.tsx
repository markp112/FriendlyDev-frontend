import { Link } from 'react-router';

const AboutPreview = () => {
  return (
    <section className='relative py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='relative bg-gradient-to-br from-pastel-blue-50 via-pastel-light-surface to-pastel-accent-50 dark:from-pastel-dark-surface dark:via-pastel-dark-elevated dark:to-pastel-dark-surface rounded-3xl p-8 lg:p-12 shadow-2xl border border-pastel-light-border dark:border-pastel-dark-border overflow-hidden'>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pastel-accent-400/10 to-transparent dark:from-pastel-accent-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pastel-blue-400/10 to-transparent dark:from-pastel-blue-600/5 rounded-full blur-3xl"></div>
          
          <div className='relative flex flex-col md:flex-row items-center gap-8 lg:gap-12'>
            {/* Profile Image */}
            <div className='flex-shrink-0 relative group'>
              <div className='absolute -inset-3 bg-gradient-to-r from-pastel-blue-400 to-pastel-accent-400 dark:from-pastel-blue-600 dark:to-pastel-accent-600 rounded-full opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-300'></div>
              <img
                src='/images/profile.png'
                alt='Mark profile picture'
                className='relative w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-pastel-blue-300 dark:border-pastel-blue-700 shadow-2xl ring-4 ring-pastel-blue-100 dark:ring-pastel-blue-900/50 group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            
            {/* Content */}
            <div className='flex-1 text-center md:text-left'>
              <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-pastel-blue-100 dark:bg-pastel-blue-900/30 rounded-full text-sm font-medium text-pastel-blue-600 dark:text-pastel-blue-300 mb-4'>
                <span className='text-lg'>í±‹</span>
                <span>Get to Know Me</span>
              </div>
              
              <h2 className='text-3xl lg:text-4xl font-bold mb-4'>
                <span className='text-pastel-light-text dark:text-pastel-dark-text'>About </span>
                <span className='bg-gradient-to-r from-pastel-blue-500 to-pastel-accent-500 dark:from-pastel-blue-400 dark:to-pastel-accent-400 bg-clip-text text-transparent'>Me</span>
              </h2>
              
              <p className='text-lg text-pastel-light-text-muted dark:text-pastel-dark-text-muted leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0'>
                I'm Mark â€” a self-taught developer and educator passionate about
                building friendly digital experiences and helping others grow into
                confident modern devs.
              </p>
              
              <Link
                to='/about'
                className='inline-flex items-center gap-2 px-6 py-3 bg-pastel-blue-400 dark:bg-pastel-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-pastel-blue-400/30 dark:shadow-pastel-blue-600/20 hover:bg-pastel-blue-500 dark:hover:bg-pastel-blue-700 hover:shadow-xl hover:shadow-pastel-blue-400/40 dark:hover:shadow-pastel-blue-600/30 hover:scale-105 transition-all duration-300 group/btn'
              >
                <span>Learn More About Me</span>
                <svg className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
