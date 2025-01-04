import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface TeamPageProps {
  mentors: TeamMember[];
  heads: TeamMember[];
  cores: TeamMember[];
}

const TeamPage: React.FC<TeamPageProps> = ({ mentors, heads, cores }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Our Team</h1>
      
      <TeamSection title="Mentors" members={mentors} />
      <TeamSection title="Heads" members={heads} />
      <TeamSection title="Core Members" members={cores} />
    </div>
  );
};

const TeamSection: React.FC<{ title: string; members: TeamMember[] }> = ({ title, members }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8 text-secondary">{title}</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
        <div className="flex space-x-4">
          {member.socialLinks.github && (
            <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <i className="fab fa-github text-2xl"></i>
            </a>
          )}
          {member.socialLinks.linkedin && (
            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          )}
          {member.socialLinks.twitter && (
            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamPage;

