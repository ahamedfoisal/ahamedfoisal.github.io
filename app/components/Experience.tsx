"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaUsers } from "react-icons/fa";

interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
  type: "work" | "leadership";
  icon: React.ReactNode;
}

const Experience = () => {
  const experienceItems: ExperienceItem[] = [
    {
      role: "Teaching Assistant",
      organization: "NYUAD Engineering Department",
      location: "Abu Dhabi, UAE",
      period: "Sep 2022 - Present",
      responsibilities: [
        "Assisted professor in conducting laboratory sessions for Introduction to Computer Science course",
        "Graded assignments and provided detailed feedback to over 30 students",
        "Held weekly office hours to help students with programming concepts and assignments",
        "Developed supplementary learning materials to facilitate student understanding",
      ],
      type: "work",
      icon: <FaBriefcase className="text-3xl text-accent" />,
    },
    {
      role: "Secretary",
      organization: "NYUAD Bangladeshi Student Association",
      location: "Abu Dhabi, UAE",
      period: "Aug 2022 - Present",
      responsibilities: [
        "Managed communication and documentation for a student organization with 25+ members",
        "Organized cultural events and activities to promote Bangladeshi culture on campus",
        "Collaborated with other student groups to host joint cultural awareness events",
        "Maintained detailed records of all meetings, events, and financial transactions",
      ],
      type: "leadership",
      icon: <FaUsers className="text-3xl text-accent" />,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">
          Work & <span className="accent-text">Leadership</span>
        </h2>

        <div className="mt-12 grid gap-8">
          {experienceItems.map((item, index) => (
            <motion.div
              key={item.role + item.organization}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/80 rounded-lg shadow-lg border border-foreground/10 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-3 mb-4 md:mb-0">
                    {item.icon}
                    <div>
                      <h3 className="text-xl font-bold">{item.role}</h3>
                      <h4 className="text-lg font-medium accent-text">
                        {item.organization}
                      </h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground/80">{item.period}</p>
                    <p className="text-sm text-foreground/80">{item.location}</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold mb-2">
                    {item.type === "work"
                      ? "Key Responsibilities:"
                      : "Key Contributions:"}
                  </h5>
                  <ul className="space-y-2 text-sm">
                    {item.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent font-bold mr-2">•</span>
                        <span>{responsibility}</span>
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

export default Experience; 