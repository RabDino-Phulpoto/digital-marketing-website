import Image from "next/image";

const projects = [
  {
    category: "Logo Design",
    title: "Brand Identities",
    image: "https://images.unsplash.com/photo-1626785774573-4b7993143d2d?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    category: "Web Development",
    title: "E-commerce Platforms",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    category: "SEO Results",
    title: "Traffic Growth Charts",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    category: "Social Media",
    title: "Viral Campaigns",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=600",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white min-h-screen">
       <section className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">Our Portfolio</h1>
        <p className="text-gray-400">A glimpse of the work we have delivered for our happy clients.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              {/* Image */}
              <div className="relative h-80 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold uppercase mb-2">{project.category}</h3>
                <p className="text-gray-200">{project.title}</p>
                <span className="mt-4 px-6 py-2 border border-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}