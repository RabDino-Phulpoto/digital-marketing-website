import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "10 SEO Trends You Can't Ignore in 2026",
    excerpt: "The digital landscape is changing fast. Here are the top strategies to keep your business ranking #1 this year...",
    date: "Jan 15, 2026",
    author: "DigiForum Team",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 2,
    title: "Why Your Business Needs a Next.js Website",
    excerpt: "Speed matters. Discover why modern businesses are switching from WordPress to Next.js for better performance...",
    date: "Jan 10, 2026",
    author: "Web Dev Team",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 3,
    title: "Social Media Marketing: Organic vs Paid",
    excerpt: "Should you invest in ads or focus on content? We break down the pros and cons of both strategies...",
    date: "Jan 05, 2026",
    author: "Marketing Expert",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=800&h=400"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">Latest Insights</h1>
        <p className="text-gray-400">News, trends, and tips from the digital world.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-blue-600 font-bold uppercase text-sm">Read Article &rarr;</Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-6 border-b pb-4">Categories</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer">SEO Optimization (12)</li>
                <li className="hover:text-blue-600 cursor-pointer">Web Development (8)</li>
                <li className="hover:text-blue-600 cursor-pointer">Social Media (15)</li>
                <li className="hover:text-blue-600 cursor-pointer">Branding (5)</li>
              </ul>
            </div>

            <div className="bg-blue-600 p-8 rounded-2xl text-white text-center">
              <h3 className="font-bold text-xl mb-4">Need Help?</h3>
              <p className="text-blue-100 mb-6 text-sm">Get a free consultation for your project today.</p>
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}