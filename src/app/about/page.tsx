import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Who We Are</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6">
              We Are <span className="text-blue-600">DigiForum.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded with a vision to transform businesses digitally, we are a team of creative thinkers, tech enthusiasts, and marketing strategists. We don't just build websites; we build brands that last.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center border-t border-gray-200 pt-8">
              <div>
                <span className="block text-3xl font-bold text-gray-900">10+</span>
                <span className="text-sm text-gray-500">Years Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-gray-900">500+</span>
                <span className="text-sm text-gray-500">Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-gray-900">100%</span>
                <span className="text-sm text-gray-500">Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
             <Image 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
               alt="Our Team"
               fill
               className="object-cover"
             />
          </div>
        </div>
      </section>
    </main>
  );
}