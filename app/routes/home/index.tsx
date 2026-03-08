import type { PostMeta, Project, StrapiPostAttributes, StrapiProjectAttributes,  StrapiResponse  } from '~/types';
import type { Route } from './+types/index';
import FeaturedProjects from '~/components/FeaturedProjects/FeaturedProjects';
import AboutPreview from '~/components/AboutPreview/AboutPreview';
import LatestPosts from '~/components/LatestPosts/LatestPosts';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Welcome to The Friendly Dev' },
    { name: 'description', content: 'Custom software development services with a personal touch.' },
  ];
}

export const loader = async ({ request }: Route.LoaderArgs): Promise<{ projects: Project[], posts: PostMeta[] }> => {
  const url = new URL(request.url);

  const [projectJsonRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`),
    fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&desc&populate=*`),
  ]);

  if (!projectJsonRes.ok || !postRes.ok) {
    throw new Response('Failed to fetch data', { status: 500 });
  }

  const projectsJson: StrapiResponse<StrapiProjectAttributes> = await projectJsonRes.json();
  const postsJson: StrapiResponse<StrapiPostAttributes> = await postRes.json();

  const projects = projectsJson.data.map((item: StrapiProjectAttributes) => (
    {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      description: item.description,
      image: item.image?.url ?  `${item.image.url}` : '/images/no-image.png',
      url: item.url? item.url : '',
      date: item.date,
      category: item.category,
      featured: item.featured,
  }));

  const posts = postsJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    date: item.date,
    slug: item.slug,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  }));
  return { projects, posts};
};

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;
  return (
    <>
      <FeaturedProjects projects={projects} />
      <LatestPosts posts={posts} limit={2} />
      <AboutPreview />
    </>
  );
};

export default HomePage;
