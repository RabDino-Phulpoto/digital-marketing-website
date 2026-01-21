import Image from "next/image";

const clients = [
  { name: "Client 1", logo: "https://placehold.co/200x100/png?text=Liberty+Books" },
  { name: "Client 2", logo: "https://placehold.co/200x100/png?text=Yards+Now" },
  { name: "Client 3", logo: "https://placehold.co/200x100/png?text=The+F+Word" },
  { name: "Client 4", logo: "https://placehold.co/200x100/png?text=HGGC" },
  { name: "Client 5", logo: "https://placehold.co/200x100/png?text=King+Vape" },
  { name: "Client 6", logo: "https://placehold.co/200x100/png?text=Dar-ul-Sukun" },
  { name: "Client 7", logo: "https://placehold.co/200x100/png?text=Closet" },
  { name: "Client 8", logo: "https://placehold.co/200x100/png?text=Coffee+Wagera" },
  { name: "Client 9", logo: "https://placehold.co/200x100/png?text=Global+Marquees" },
  { name: "Client 10", logo: "https://placehold.co/200x100/png?text=Colors" },
  { name: "Client 11", logo: "https://placehold.co/200x100/png?text=American+Doors" },
  { name: "Client 12", logo: "https://placehold.co/200x100/png?text=Badlo+Apna+Kal" },
];

const ClientLogos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 uppercase">
          Our Clients
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Our clients are some of the most forward-looking Companies, Startups, and SMEs in Pakistan.
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group flex justify-center items-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-32 h-16">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientLogos;