import type { PostMeta } from '~/types';

const PostsCard = await import('../PostsCard/PostsCard').then((mod) => mod.default);

type LatestPostsProps = {
  posts: PostMeta[];
  limit?: number;
};

const LatestPosts = ({ posts, limit = 2 }: Readonly<LatestPostsProps>) => {
  const latestPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pastel-blue-400 to-pastel-accent-400 dark:from-pastel-blue-600 dark:to-pastel-accent-600 flex items-center justify-center text-3xl shadow-lg">
            📰
          </div>
          <h2 className="text-4xl font-bold text-pastel-light-text dark:text-pastel-dark-text">Latest Posts</h2>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {latestPosts.map((post) => (
            <PostsCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
