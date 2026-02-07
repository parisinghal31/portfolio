import { Code2, Brain, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={24} />,
      skills: ['Java', 'Python', 'C'],
    },
    {
      title: 'Core Computer Science',
      icon: <Brain size={24} />,
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving'],
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'Visual Studio Code', 'Cursor'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-slate-700">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    {skill}
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
