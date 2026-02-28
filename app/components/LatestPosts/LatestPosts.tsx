import type { PostMeta } from '~/types';

const PostsCard = await import('../PostsCard/PostsCard').then(mod => mod.default);

type LatestPostsProps = {
  posts: PostMeta[];
  limit?: number;
};

const LatestPosts = ({posts, limit = 2 }: Readonly<LatestPostsProps>) => {

  const latestPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);  

  return ( 
    <section className="mt-10 px-6 py-6 bg-gray-900 text-gray-200 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">📰 Latest Posts</h2>
      <div className="space-y-8">
        {latestPosts.map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    </section>
   );
}
 
export default LatestPosts;
