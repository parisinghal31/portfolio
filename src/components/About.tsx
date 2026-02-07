export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            I am a B.Tech Computer Science student at KIET Group of Institutions, Ghaziabad,
            with a focus on building a strong foundation in software engineering principles
            and problem-solving methodologies.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            My approach to learning is rooted in discipline and structure. I believe in
            mastering fundamentals before moving to advanced concepts, which has guided my
            deep engagement with Data Structures and Algorithms. This methodical approach
            has enabled me to develop a solid understanding of core computer science principles.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            I value consistency and long-term growth over short-term gains. Through regular
            practice on competitive programming platforms and hands-on project development,
            I continuously work to strengthen my technical skills and broaden my understanding
            of software development practices.
          </p>
        </div>
      </div>
    </section>
  );
}
