import type { Project } from '~/types';
import ProjectCard from '../ProjectCard/ProjectCard';

type FeaturedProjectsProps = {
  projects: Project[];
};

const FeaturedProjects = ({ projects}: FeaturedProjectsProps) => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="max-w-4xl mx-auto rounded-lg bg-gray-900 px-6 py-6" >
      <h2 className="text-2xl font-bold text-gray-300 mb-6 ">🌟 Featured Projects</h2>
      <div className="flex flex-row gap-6 justify-items-center"> 
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
 
export default FeaturedProjects;
