import { Link } from 'react-router';

type HeroProps = {
  name?: string;
  text?: string;
};

const DEFAULT_TEXT = "I'm glad you're here. Explore my projects, read my blog, and feel free to reach out!";

const Hero = ({name = 'Mark', text = DEFAULT_TEXT}) => {
  return (  
    <header className="bg-gray-900 text-center py-20 px-4  mb-8 shadow-md text-white transition-colours duration-300">
    
      <h2 className="text-3xl md:text-5xl font-bold mb-4">🖐️ Hey I'm {name} </h2>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Welcome to The Friendly Developer!</h2>
      <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
       {text}
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded duration-300">
          View Projects
        </Link>
        <Link to="/contact" className="border border-blue-500 hover:bg-blue-600 text-blue-400 py-2 px-4 rounded transition-colors duration-300">
         Contact Me
        </Link>
      </div>
    </header>
    );
}



export default Hero;