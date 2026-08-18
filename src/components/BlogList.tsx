import Link from "next/link";
import type { BlogPost } from "@/lib/data";

interface BlogListProps {
  posts: BlogPost[];
  primaryColor: string;
  productSlug: string;
}

export default function BlogList({ posts, primaryColor, productSlug }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {posts.map((post, index) => (
        <article
          key={post.slug}
          className="group bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Color bar top */}
          <div className="h-1" style={{ backgroundColor: primaryColor }} />

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 text-xs font-semibold rounded-full"
                style={{
                  color: primaryColor,
                  backgroundColor: `color-mix(in srgb, ${primaryColor} 10%, transparent)`,
                }}
              >
                {post.category}
              </span>
              <span className="text-xs text-neutral-400">{post.readTime} de lectura</span>
            </div>

            <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors leading-snug">
              {post.title}
            </h3>

            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: primaryColor }}
                >
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-700">{post.author}</p>
                  <p className="text-xs text-neutral-400">
                    {new Date(post.date).toLocaleDateString("es-AR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <span
                className="text-sm font-semibold transition-colors"
                style={{ color: primaryColor }}
              >
                Leer más →
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
