"use client";

import { motion } from "framer-motion";
import { FaFlask, FaBrain, FaLaptopCode } from "react-icons/fa";

interface ResearchItem {
  title: string;
  lab: string;
  period: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
}

const Research = () => {
  const researchItems: ResearchItem[] = [
    {
      title: "Research Assistant",
      lab: "Kirmizialtin Lab",
      period: "Jan 2023 - Present",
      description:
        "Computational biophysics research focusing on molecular dynamics simulations.",
      achievements: [
        "Developed machine learning models to analyze protein-ligand interactions",
        "Implemented computational workflows to simulate biological systems",
        "Presented research findings at departmental symposiums",
      ],
      icon: <FaFlask className="text-3xl text-accent" />,
    },
    {
      title: "Research Assistant",
      lab: "Clinical AI Lab",
      period: "Sep 2022 - Dec 2022",
      description:
        "Applied AI research in healthcare data analysis and medical image processing.",
      achievements: [
        "Built deep learning models for medical image segmentation",
        "Collaborated with clinicians to improve AI diagnostic tools",
        "Contributed to a published paper on AI in healthcare",
      ],
      icon: <FaBrain className="text-3xl text-accent" />,
    },
    {
      title: "Research Assistant",
      lab: "Sreenivasan Lab",
      period: "May 2022 - Aug 2022",
      description:
        "Cognitive neuroscience research on memory and attention mechanisms.",
      achievements: [
        "Designed experiments to test cognitive functions in human subjects",
        "Analyzed brain imaging data using statistical methods",
        "Developed software to automate data collection procedures",
      ],
      icon: <FaLaptopCode className="text-3xl text-accent" />,
    },
  ];

  return (
    <section id="research" className="py-20 bg-background/50">
      <div className="section-container">
        <h2 className="section-title">
          Research <span className="accent-text">Experience</span>
        </h2>

        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:translate-x-px" />

          {/* Timeline items */}
          {researchItems.map((item, index) => (
            <motion.div
              key={item.lab}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${
                index !== researchItems.length - 1 ? "pb-16" : ""
              }`}
            >
              {/* Timeline item dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-accent transform -translate-x-2 md:translate-x-[-10px] mt-1.5" />

              {/* Timeline content - alternating sides */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:self-end"
                    : "md:pl-12 md:ml-auto"
                } pl-10 ml-0`}
              >
                <div className="bg-background p-6 rounded-lg shadow-lg border border-foreground/10">
                  <div className="flex items-center mb-3 justify-between">
                    <div
                      className={`flex items-center ${
                        index % 2 === 0 ? "md:flex-row-reverse" : "flex-row"
                      } gap-3`}
                    >
                      {item.icon}
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <h4 className="text-lg font-semibold accent-text">
                          {item.lab}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 mb-3">
                    {item.period}
                  </p>
                  <p className="text-sm mb-4">{item.description}</p>
                  <ul className="space-y-2 text-sm">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent font-bold mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research; 