import { Link } from 'react-router';
import type { PostMeta } from '~/types';

const PostsCard = ({ post }: { post: PostMeta }) => {
  return (
    <article className="group relative bg-pastel-light-surface dark:bg-pastel-dark-surface rounded-2xl shadow-lg border border-pastel-light-border dark:border-pastel-dark-border overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
      {post.image && (
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-pastel-light-surface/90 dark:from-pastel-dark-surface/90 to-transparent z-10"></div>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-pastel-blue-100 dark:bg-pastel-blue-900/30 rounded-full text-xs font-medium text-pastel-blue-600 dark:text-pastel-blue-300 mb-4">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </div>

        <h3 className="text-2xl font-bold text-pastel-light-text dark:text-pastel-dark-text mb-3 group-hover:text-pastel-blue-600 dark:group-hover:text-pastel-blue-300 transition-colors">
          {post.title}
        </h3>
        <p className="text-pastel-light-text-muted dark:text-pastel-dark-text-muted leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-pastel-blue-600 dark:text-pastel-blue-400 font-semibold hover:gap-3 transition-all duration-300 group/link"
        >
          <span>Read More</span>
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pastel-accent-400/20 to-transparent dark:from-pastel-accent-600/10 rounded-bl-full"></div>
    </article>
  );
};

export default PostsCard;
