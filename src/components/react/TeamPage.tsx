import React from "react";
import { motion } from "framer-motion";
import { Boxes } from "../ui/background-boxes";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

interface TeamPageProps {
  mentors: TeamMember[];
  heads: TeamMember[];
  cores: TeamMember[];
}

const TeamPage: React.FC<TeamPageProps> = ({ mentors, heads, cores }) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className="absolute inset-0 opacity-30">
          <Boxes />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-7xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1,
            }}
          >
            Our Team
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Mentors Section */}
          <TeamSection
            title="Mentors"
            members={mentors}
            cardStyle="lg:grid-cols-2"
            scale={1.1}
            delay={0.2}
          />

          {/* Heads Section */}
          <TeamSection
            title="Club Heads"
            members={heads}
            cardStyle="lg:grid-cols-2"
            scale={1.05}
            delay={0.4}
          />

          {/* Core Members Section */}
          <TeamSection
            title="Core Members"
            members={cores}
            cardStyle="lg:grid-cols-3"
            scale={1.02}
            delay={0.6}
          />
        </motion.div>
      </div>
    </div>
  );
};

const TeamSection: React.FC<{
  title: string;
  members: TeamMember[];
  cardStyle: string;
  scale: number;
  delay: number;
}> = ({ title, members, cardStyle, scale, delay }) => {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">
        {title}
      </h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${cardStyle} gap-8`}>
        {members.map((member, index) => (
          <TeamMemberCard
            key={index}
            member={member}
            scale={scale}
            delay={delay + index * 0.1}
          />
        ))}
      </div>
    </motion.section>
  );
};

const TeamMemberCard: React.FC<{
  member: TeamMember;
  scale: number;
  delay: number;
}> = ({ member, scale, delay }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale }}
    >
      <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-purple-500/50 border border-purple-500/20">
        <div className="aspect-w-16 aspect-h-9 relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        </div>

        <div className="p-6 bg-black/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-purple-200 mb-2">
            {member.name}
          </h3>
          <p className="text-purple-300/80 text-lg mb-4">{member.role}</p>

          <div className="flex space-x-6 justify-center">
            {member.socialLinks.github && (
              <SocialLink href={member.socialLinks.github} icon="fa-github" />
            )}
            {member.socialLinks.linkedin && (
              <SocialLink
                href={member.socialLinks.linkedin}
                icon="fa-linkedin"
              />
            )}
            {member.socialLinks.twitter && (
              <SocialLink href={member.socialLinks.twitter} icon="fa-twitter" />
            )}
            {member.socialLinks.instagram && (
              <SocialLink
                href={member.socialLinks.instagram}
                icon="fa-instagram"
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink: React.FC<{
  href: string;
  icon: string;
}> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-300/80 hover:text-purple-400 transition-colors duration-300"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.95 }}
  >
    <i className={`fab ${icon} text-2xl`}></i>
  </motion.a>
);

export default TeamPage;
