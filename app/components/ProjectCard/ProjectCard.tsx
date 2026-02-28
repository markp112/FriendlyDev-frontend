import type { Project } from '~/types';
import { Link } from 'react-router';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/projects/${project.documentId}`} className="no-underline block transform transition duration-300 hover:scale-[1.02]">
    <div
      className="bg-gray-800 border-gray-700 text-gray-300 overflow-hidden rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
    >
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className=" mb-2 text-sm">{project.description}</p>
        <div className="flex justify-between items-center text-sm">
          <span> {project.category} </span>
          <span> {new Date(project.date).toLocaleDateString()} </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;
