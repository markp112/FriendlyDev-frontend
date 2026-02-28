import type { PostMeta } from '~/types';
import { Link } from 'react-router';

const PostsCard = ({ post }: { post: PostMeta }) => {
  return (
    <article className="mb-6 pb-4 border-b border-gray-700 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition  ">
      <h3 className="text-2xl font-bold text-blue-400 mb-2">{post.title}</h3>
      <p className="text-gray-300 mt-2">{post.excerpt}</p>
      <p className="text-sm text-gray-400 mt-1">{new Date(post.date).toDateString()}</p>
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded mt-4" />
      )}
      <Link to={`/blog/${post.slug}`} className="text-sm text-blue-400 hover:underline">
        Read More &rarr;
      </Link>
    </article>
  );
};

export default PostsCard;
