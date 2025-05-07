import { Code, Database, Lightbulb, Layers, Brain } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages & Frameworks',
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: 'JavaScript (React, Next.js), Python, C/C++, MATLAB, R, Node.js, Express, FastAPI'
  },
  {
    id: 'databases',
    title: 'Databases & Cloud',
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: 'MySQL, PostgreSQL, SQLite, AWS (EC2, S3, Lambda), Azure, Vercel'
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: <Layers className="w-6 h-6 text-primary" />,
    skills: 'Git, Docker, Kubernetes, CI/CD (GitHub Actions), Jira, Anaconda, NPM/Nodemon, Tailwind CSS'
  },
  {
    id: 'ml',
    title: 'ML Libraries',
    icon: <Brain className="w-6 h-6 text-primary" />,
    skills: 'TensorFlow, PyTorch, Hugging Face, Scikit-Learn, NumPy, Pandas, Matplotlib, SciPy, Keras'
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    skills: 'Problem solving, code reviews, documentation, agile teamwork'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className="card p-6 flex flex-col dark:bg-dark/80"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 