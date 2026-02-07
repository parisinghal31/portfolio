import { Mail, Phone, Github, Linkedin, Code2 } from 'lucide-react';

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export default function Contact() {
  const contacts: ContactLink[] = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'parisinghal29531@gmail.com',
      href: 'mailto:parisinghal29531@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 7983570749',
      href: 'tel:+917983570749',
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/parisinghal31',
      href: 'https://github.com/parisinghal31',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/pari-singhal31',
      href: 'https://linkedin.com/in/pari-singhal31',
    },
    {
      icon: <Code2 size={20} />,
      label: 'LeetCode',
      value: 'leetcode.com/u/Pari29531',
      href: 'https://leetcode.com/u/Pari29531',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
            >
              <div className="text-slate-700 group-hover:text-slate-900 transition-colors">
                {contact.icon}
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">{contact.label}</p>
                <p className="text-slate-800 font-medium">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
