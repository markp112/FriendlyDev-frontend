import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/details';
import type { PostMeta, StrapiResponse, StrapiPostAttributes } from '~/types';
import { Link } from 'react-router';

export const loader = async ({ request, params }: Route.LoaderArgs): Promise<any> => {
  const { slug } = params;
  if (!slug) {
    return { post: null };
  }

  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`);
  if (!res.ok) {
    throw new Response('Failed to fetch blog post', { status: res.status });
  }

  if (!res.ok) {
    throw new Response('Failed to fetch blog post', { status: res.status });
  }
  const json: StrapiResponse<StrapiPostAttributes> = await res.json();
 
  if (json.data.length === 0) {
   throw new Response('Post not found', { status: 404 });
  }

  const item = json.data[0];
  const postMeta: PostMeta = {
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    date: item.date,
    slug: item.slug,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  };

  if (!postMeta) {
    return { postMeta: null, markdown: null };
  }

  return { postMeta };
};

type BlogDetailsPageProps = {
  loaderData: {
    postMeta: PostMeta | null;
  };
}

const BlogDetailsPage = ({ loaderData }: BlogDetailsPageProps) => {
  const { postMeta } = loaderData;

  if (!postMeta ) {
    return <div>Post not found</div>;
  }
  return <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900 text-white">
    <h1 className="text-4xl font-bold mb-6">{postMeta.title}</h1>
    <p className="text-sm text-gray-400 mb-6">{new Date(postMeta.date).toDateString()}</p>
    <img src={postMeta.image} alt="" />
    <div className="prose prose-invert max-w-none mb-12">
      <ReactMarkdown>{postMeta.body}</ReactMarkdown>
    </div>
    <Link to="/blog" className="text-sm text-white transition  hover:bg-blue-700 mt-8 inline-block py-2 px-6 bg-blue-600 rounded-lg">
      ← Back to Posts
    </Link>
  </div>;
};

export default BlogDetailsPage;
