"use client";

import { Carousel } from "@/components/ui/Carousel";
import { LampContainer } from "@/components/ui/LampContainer";
// import { brand_designing_projects, content_designing_projects } from "@/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  button: string;
  image: string;
};

type ProjectData = {
  group: string;
  category: string;
  projects: Project[];
};

export const PROJECTs = ({
  department,
  group,
  category,
  useHeader = true,
}: {
  department: string;
  group: string;
  category: string;
  useHeader: boolean;
}) => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const params = new URLSearchParams();
        if (department) params.append("department", department);
        if (group) params.append("group", group);
        if (category) params.append("category", category);

        const response = await fetch(
          `http://localhost:8000/api/${department}/projects/${group}/${category}`
        ).then((response) => response.json());
        // console.log(department, group, category);
        // console.log(response);
        setProjects(response); // Expecting an array of { group, category, projects }
      } catch (err) {
        console.error("Error loading projects", err);
      } finally {
        // setLoading(false);
      }
    };
    fetchProjects();
  }, [department, group, category]);

  //   if (loading) return <p className="text-center">Loading...</p>;
  if (!projects?.length)
    return <p className="text-center">No projects found.</p>;

  return (
    <section className="my-40">
      {projects.map(({ group, category, projects }) => {
        const formattedTitle = category
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <section key={category} className="pt-20">
            {useHeader && (
              <LampContainer>
                <motion.h1
                  initial={{ opacity: 0.5, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="heading bg-gradient-to-br from-slate-300 to-slate-500 pb-5 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                  <span className="text-purple">{group}</span> Projects
                </motion.h1>
              </LampContainer>
            )}

            <section
              id={`${category}-projects`}
              className="relative w-full h-full py-36"
            >
              <motion.h2
                initial={{ opacity: 0.5, x: -1000 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 1.2,
                  ease: "backInOut",
                }}
                className="heading bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent text-center text-3xl md:text-6xl font-medium pb-12 text-balance"
              >
                Our <span className="text-purple">{formattedTitle}</span>{" "}
                Projects
              </motion.h2>
              <Carousel slides={projects} />
            </section>
          </section>
        );
      })}
    </section>
  );
};
