import { useState } from 'react';
import PostsCard from '~/components/PostsCard/PostsCard';
import type { Route } from './+types/index';
import type { PostMeta, StrapiResponse, StrapiPostAttributes } from '~/types';
import Pagination from '~/components/Pagination/Pagination';
import PostFilter from '~/components/PostFilter/PostFilter';


export async function loader ({ request }: Route.LoaderArgs): Promise<{ posts: PostMeta[] }>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?populate=*`);
  if (!res.ok) {
    throw new Response('Failed to fetch blog posts', { status: res.status });
  }
  const json:StrapiResponse<StrapiPostAttributes> = await res.json();

  const posts = json.data.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    date: item.date,
    slug: item.slug,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  }));
  return { posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const { posts } = loaderData as { posts: PostMeta[] };

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900 text-gray-200 rounded-lg">
        <h2 className="text-3xl font-bold mb-8">🗒️ Blog</h2>
        <PostFilter searchQuery={searchQuery} onSearchChange={(query) => {
          setSearchQuery(query)
          setCurrentPage(1);
          }}  />
        <div className="space-y-8">
          {filteredPosts.length === 0 && (
            <p className="text-gray-400">Found {filteredPosts.length} post{filteredPosts.length > 1 ? 's' : ''} matching "{searchQuery}"</p>
          ) }
        </div>
        {filteredPosts.length === 0 ? (
          <p className="text-gray-400">No blog posts available.</p>
        ) : (
          currentPosts.map((post) => <PostsCard key={post.id} post={post} />)
        )}
        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
      </div>
    </>
  );
};

export default BlogPage;
