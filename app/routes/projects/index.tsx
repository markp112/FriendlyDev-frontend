import type { Route } from './+types';
import type { Project, StrapiProjectAttributes, StrapiResponse } from '~/types';
import { useState } from 'react';
import ProjectCard from '~/components/ProjectCard/ProjectCard';
import Pagination from '~/components/Pagination/Pagination';
import { AnimatePresence, motion } from 'framer-motion';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Friendly Dev | Projects' },
    { name: 'description', content: 'Custom software development services with a personal touch.' },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`);
  const json: StrapiResponse<StrapiProjectAttributes> = await res.json();
  const projects = json.data.map((item: StrapiProjectAttributes) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    url: item.url ? item.url : '',
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));
  return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const { projects } = loaderData as { projects: Project[] };

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  const projectsPerPage = 5;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <>
      <h2 className="text-3xl font-bold text-black mb-8">🛠️Projects</h2>
      <div className="flex flex-wrap-2 gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mr-2 mb-2 px-4 py-2 rounded text-sm cursor-pointer ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="mb-6">Here are some of the projects I've worked on recently.</p>
      <AnimatePresence mode="wait">
        <motion.div className="grid gap-6 sm:grid-cols-2" layout>
          {currentProjects.map((project) => (
            <motion.div layout key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <ProjectCard key={project.id} project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  );
};

export default ProjectsPage;
