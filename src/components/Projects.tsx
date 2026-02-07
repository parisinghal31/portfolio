interface Project {
  title: string;
  description: string;
  highlights: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Nagar Darpan',
      description:
        'A comprehensive application designed to manage and present information through structured role-based access and organized data flow.',
      highlights: [
        'Implemented application logic for efficient data handling and processing',
        'Designed role-based dashboards to ensure appropriate access control',
        'Developed systematic data flow architecture for seamless information management',
        'Applied thoughtful system design principles for scalability and maintainability',
      ],
    },
    {
      title: 'Saarthi',
      description:
        'An application focused on user interaction and real-time data synchronization to deliver a responsive and reliable user experience.',
      highlights: [
        'Built application logic to support smooth user workflows',
        'Designed intuitive user interaction flows for enhanced usability',
        'Implemented real-time data synchronization for accurate information delivery',
        'Emphasized clarity and maintainability in implementation choices',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
              <ul className="space-y-3">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-slate-600 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
