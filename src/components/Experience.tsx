const experiences = [
  {
    company: 'Rubix Networking Solutions Private Limited',
    position: 'Senior Software Engineer - Blockchain',
    period: 'Mar 2024 - Present',
    description: 'Lead the development and improvement of Layer-1 Blockchain Protocol and mentored a team of 2 in revamping the existing WebAssembly based Smart Contract Platform',
  },
  {
    company: 'Hypermine Limited',
    position: 'Software Engineer - Blockchain',
    period: 'Feb 2022 - Mar 2024',
    description: 'Developed a Layer-1 Blockchain built to create, own and manage Decentralised Identities',
  },
  {
    company: 'Tata Consultancy Services Ltd.',
    position: 'Software Engineer',
    period: 'June 2019 - Feb 2022',
    description: 'Worked on diverse projects ranging from Robotic Process Automation to ETL Engineering',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Work Experience</h2>
      <div className="space-y-6 md:space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-gray-800 rounded-lg p-6 md:p-8 hover:bg-gray-700 transition-colors
            transform hover:-translate-y-1 transition-transform duration-300 touch-manipulation"
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400">{exp.company}</h3>
                <p className="text-lg md:text-xl text-gray-300 mt-1">{exp.position}</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
            </div>
            <p className="text-gray-300 text-base md:text-lg">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}