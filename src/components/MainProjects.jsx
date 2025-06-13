import React from 'react';
import { projectsData } from '../constants/projects';
import { themeStore } from '../store/themeStore';
import { FaGithub } from 'react-icons/fa';

const MainProjects = () => {
  const { theme } = themeStore();

  return (
    <div
      className={`flex flex-1 flex-col justify-center items-center px-4 py-20 ${
        theme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className='w-full max-w-6xl'>
        <h2 className='text-3xl font-bold text-sky-400 mb-10 text-left'>
          Mis Proyectos
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projectsData.map((project, i) => (
            <div
              key={i}
              className='relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300'
            >
              <img
                src={project.projectImage}
                alt={project.projectName}
                className='w-full h-74 object-cover'
                // className='w-full h-64 object-cover'
              />
              <div className='absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h3
                  className={`text-lg font-semibold text-center px-4 ${
                    theme ? 'text-white' : 'text-white'
                  }`}
                >
                  {project.projectName}
                </h3>
                <a
                  href={project.githubRepository}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex items-center gap-2 px-4 py-2 rounded transition text-sm ${
                    theme
                      ? 'border border-gray-600 text-white hover:bg-gray-600'
                      : 'border border-gray-300 text-white hover:text-gray-900 hover:bg-gray-200 '
                  }`}
                >
                  <FaGithub />
                  Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
