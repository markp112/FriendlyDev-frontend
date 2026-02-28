import { Link } from 'react-router';
import type { Route } from './+types/details';
import type { Project, StrapiProjectAttributes, StrapiResponse } from '~/types';
import { FaArrowLeft } from 'react-icons/fa';

export const loader = async ({request, params }: Route.LoaderArgs) => {
  const { documentId } = params;
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects/?filters[documentId][$eq]=${documentId}&populate=*`);
  if (!res.ok) {
    throw new Response("Project Not Found", { status: 404 });
  }
  const json: StrapiResponse<StrapiProjectAttributes> = await res.json();
  const item = json.data[0];
  if (!item) {
    throw new Response("Project Not Found", { status: 404 });
  }
  const project: Project = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    url: item.url ? item.url : '',
    date: item.date,
    category: item.category,
    featured: item.featured,
  };  
  return { project };
}

const ProjectDetailsPage = ({loaderData}: Route.ComponentProps) => {
  const { project } = loaderData as unknown as { project: Project };

  return ( <>
    <Link to="/projects" className="text-sm text-blue-400 transition hover:underline hover:text-blue-500 mb-6 inline-block">
      <FaArrowLeft className="inline mr-2" />
      Back to Projects</Link>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
        <img src={project.image} alt={project.title} className="rounded-lg w-full shadow-md" />

        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-4 ">{project.title}</h1>
          <p className="text-gray-500 text-sm mb-6">{new Date(project.date).toLocaleDateString()} . {project.category}</p>
          <p className="text-gray-400 text-sm mb-6">{project.description}</p>
          <a href={project.url} target="_blank" className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 transition rounded text-white"> View Live Site</a>
        </div>

      </div>
  </> );
};
 
export default ProjectDetailsPage;