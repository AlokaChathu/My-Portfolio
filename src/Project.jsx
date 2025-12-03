import React from "react";

import JW_img from '../src/Images/JW-Studio Project.jpg'
import FoodRush from '../src/Images/FoodRush.png'
import habitFlow from '../src/Images/HabitFlow.png'


const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Tailwind CSS to showcase my skills, projects, and experience.",
      image: JW_img,
      techStack: ["MERN"],
      link: "https://github.com/theshanGeeth123/MERN-Y2S2-PROJECT.git", 
    },
    {
      title: "FoodRush - Android UI App",
      description:
        "FoodRush is a sleek and user-friendly Android UI project designed to showcase a modern food ordering experience.",
      image: FoodRush,
      techStack: ["Android Studio","Kotlin"],
      link: "https://github.com/AlokaChathu/FoodRush--Android-Studio-Project.git", 
    },
    {
      title: "HabitFlow - Android App",
      description:
        "HabitFlow is a modern Android application designed to help users build better routines and maintain a balanced lifestyle.",
      image: habitFlow,
      techStack: ["Android Studio","Kotlin"],
      link: "https://github.com/AlokaChathu/HabitFlow-Android-Project.git", 
    },
    
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-white py-16 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
       
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Some of the work I&apos;ve done recently.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
            
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

             
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.link && (
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
