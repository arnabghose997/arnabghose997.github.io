import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Rubix Blockchain Network',
    description: 'L1 Blockchain based on Proof-of-Pledge Protocol',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/rubixchain/rubixgoplatform',
    website: 'https://rubix.net/',
    tags: ['Golang', 'libp2p', 'LevelDB', 'SQL', 'Rust'],
  },
  {
    title: 'Hypersign Identity Network',
    description: 'Layer-1 Blockchain that supports SSI Infra',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/hypersign-protocol/hid-node',
    website: 'https://www.hypersign.id/',
    tags: ['Golang', 'LevelDB', 'Cosmos SDK'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all
            transform hover:-translate-y-2 duration-300 touch-manipulation"
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-emerald-400">{project.title}</h3>
              <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="bg-gray-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors touch-manipulation"
                >
                  <Github size={18} className="mr-1" />
                  <span className="text-sm md:text-base">Code</span>
                </a>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors touch-manipulation"
                >
                  <ExternalLink size={18} className="mr-1" />
                  <span className="text-sm md:text-base">Website</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}