"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiPostgresql,
  SiGooglecloud,
  SiLinux,
} from "react-icons/si";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: IconType;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages & Frameworks",
      skills: [
        { name: "Python", icon: FaPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: FaNodeJs },
      ],
    },
    {
      name: "AI/ML",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "PyTorch", icon: SiPytorch },
      ],
    },
    {
      name: "Databases & Cloud",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "AWS", icon: FaAws },
        { name: "GCP", icon: SiGooglecloud },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "Docker", icon: FaDocker },
        { name: "Linux", icon: SiLinux },
        { name: "SQL", icon: FaDatabase },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="section-container">
        <h2 className="section-title">
          Technical <span className="accent-text">Skills</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-foreground/10"
            >
              <h3 className="text-xl font-bold mb-4 accent-text">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 hover-scale"
                  >
                    <skill.icon className="text-4xl text-accent" />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 