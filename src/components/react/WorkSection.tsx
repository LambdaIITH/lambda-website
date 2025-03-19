"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Code } from "lucide-react";
import { useEffect, useRef } from "react";

const posts = [
  {
    slug: "building-modern-web-apps",
    data: {
      title: "Building Modern Web Applications with React and Next.js",
      description:
        "Learn how to create performant and scalable web applications using React and Next.js",
      date: new Date("2023-11-15"),
      tags: ["React", "Next.js", "Web Development"],
    },
  },
  {
    slug: "mastering-tailwind-css",
    data: {
      title: "Mastering Tailwind CSS for Rapid UI Development",
      description:
        "Discover how to leverage Tailwind CSS to build beautiful user interfaces quickly and efficiently",
      date: new Date("2023-10-28"),
      tags: ["CSS", "Tailwind", "UI Design"],
    },
  },
  {
    slug: "introduction-to-typescript",
    data: {
      title: "Introduction to TypeScript for JavaScript Developers",
      description:
        "A comprehensive guide to TypeScript for JavaScript developers looking to enhance their code quality",
      date: new Date("2023-10-10"),
      tags: ["TypeScript", "JavaScript", "Programming"],
    },
  },
];

const projects = [
  {
    slug: "campus-connect",
    data: {
      title: "Campus Connect",
      description:
        "A platform connecting students across campus for collaboration, events, and resource sharing",
      date: new Date("2023-11-05"),
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/lambda-dev-club/campus-connect",
    },
  },
  {
    slug: "study-sphere",
    data: {
      title: "Study Sphere",
      description:
        "AI-powered study assistant helping students organize notes, create study plans, and prepare for exams",
      date: new Date("2023-09-20"),
      tags: ["Python", "Machine Learning", "React"],
      github: "https://github.com/lambda-dev-club/study-sphere",
    },
  },
  {
    slug: "event-horizon",
    data: {
      title: "Event Horizon",
      description:
        "Event management system for campus activities with real-time updates and attendance tracking",
      date: new Date("2023-08-15"),
      tags: ["Next.js", "Firebase", "Tailwind"],
      github: "https://github.com/lambda-dev-club/event-horizon",
    },
  },
];

export default function WorkSection({
  posts,
  projects,
}: {
  posts: any[];
  projects: any[];
}) {
  const blogRef = useRef(null);
  const projectsRef = useRef(null);

  const blogInView = useInView(blogRef, { once: true, amount: 0.2 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log("POSTS", posts);
  }, []);

  const getGithubImage = (url: string) => {
    const repoPath = url.replace("https://github.com/", "");
    return `https://opengraph.githubassets.com/1/${repoPath}`;
  };

  return (
    <section className="py-20 sm:py-28 bg-purple-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">
            Our Work
          </h2>
          <p className="text-lg text-purple-800/80 dark:text-purple-200/80 max-w-2xl mx-auto">
            Explore our latest projects and insights from the Lambda community
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 pb-9 mb-8">
            <TabsTrigger value="projects" className="text-base">
              Projects
            </TabsTrigger>
            <TabsTrigger value="blog" className="text-base">
              Blog Posts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full border-purple-100 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 group">
                    <CardContent className="p-0">
                        <div className="h-48 relative overflow-hidden group-hover:shadow-md transition-all duration-300 flex items-center justify-center">                        {project.data.image || project.data.repoUrl ? (
                          <img
                            src={
                              project.data.image ||
                              `https://opengraph.githubassets.com/1/${project.data.repoUrl?.replace("https://github.com/", "")}`
                            }
                            alt={project.data.title}
                            className="w-full object-center transition-transform duration-500 group-hover:scale-105"        
                            />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-br from-purple-400/20 to-violet-400/20 dark:from-purple-900/40 dark:to-violet-900/40 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                            <div className="relative z-10 text-purple-500 dark:text-purple-300 opacity-60">
                              <Code className="w-12 h-12" />
                            </div>
                          </div>
                        )}
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-purple-600/90 hover:bg-purple-700 text-white border-0 shadow-sm">
                            {project.data.status || "Active"}
                          </Badge>
                        </div>
                      </div>
                      <div className="px-5 py-3 border-b border-purple-100 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-900/20">
                        <div className="flex gap-2 flex-wrap">
                          {project.data.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="bg-white/80 dark:bg-gray-900/80 text-purple-700 dark:text-purple-300 hover:bg-white dark:hover:bg-gray-900 border-purple-200 dark:border-purple-800/50"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold mb-2 text-purple-900 dark:text-purple-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                          {project.data.title}
                        </h3>
                        <p className="text-purple-800/80 dark:text-purple-200/80 mb-4 line-clamp-2">
                          {project.data.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <a
                            href={`/projects/${project.slug}`}
                            className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium inline-flex items-center gap-1 transition-colors"
                          >
                            View Project{" "}
                            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </a>

                          {project.data.github && (
                            <a
                              href={project.data.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-300 transition-colors"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                className="border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600"
              >
                <a href="/projects" className="inline-flex items-center gap-2">
                  View All Projects <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="blog" className="space-y-4" ref={blogRef}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={blogInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full border-purple-100 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 group">
                    <CardContent className="p-5">
                      <div className="flex gap-2 flex-wrap mb-3">
                        {post.data.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-purple-900 dark:text-purple-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors line-clamp-2">
                        {post.data.title}
                      </h3>

                      <p className="text-purple-800/80 dark:text-purple-200/80 mb-4 line-clamp-3">
                        Hello
                        {post.data.description}
                      </p>

                      <div className="flex justify-between items-center mt-auto">
                        <a
                          href={`/blog/${post.slug}`}
                          className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium inline-flex items-center gap-1 transition-colors"
                        >
                          Read More{" "}
                          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </a>

                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(post.data.date).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                className="border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600"
              >
                <a href="/blog" className="inline-flex items-center gap-2">
                  View All Posts <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
