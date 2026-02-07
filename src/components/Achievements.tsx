import { ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  link: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: 'Solved 130+ problems on LeetCode',
      link: 'https://leetcode.com/u/Pari29531',
    },
    {
      title: '3★ HackerRank in Problem Solving',
      link: 'https://www.hackerrank.com/profile/parisinghal29531',
    },
    {
      title: 'Winner – Innotech 2024',
      link: 'https://www.linkedin.com/posts/pari-singhal31_innotech-innotech2024-saarthi-activity-7268643140796907520-XvcV',
    },
    {
      title: 'Departmental Winner – Innotech 2025',
      link: 'https://www.linkedin.com/posts/namankansal23_technology-innovation-exhibition-ugcPost-7396918763251679232-8nEu',
    },
    {
      title: 'Major League Hacking Winner – Google Gemini Track (Brainwave 2.0)',
      link: 'https://www.linkedin.com/posts/pari-singhal31_hackathon-mlh-brainwave-activity-7419385923626393600-zEf3',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Technical Achievements
        </h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-4"
            >
              <p className="text-lg text-slate-700 font-medium">{achievement.title}</p>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium whitespace-nowrap"
              >
                Link
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
