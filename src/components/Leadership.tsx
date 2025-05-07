'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const leadershipRoles = [
  {
    id: 'bsa-secretary',
    role: 'Secretary',
    organization: 'NYUAD Bangladeshi Student Association',
    period: 'Jan 2025 – Present',
    description: 'Managed logistics and budgeting for events with over 100 attendees, coordinated communication across teams.'
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="section py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Leadership</h2>
        
        <div className="max-w-3xl mx-auto">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{role.role}</h3>
                  <span className="text-primary font-medium">{role.organization}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">{role.period}</span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 