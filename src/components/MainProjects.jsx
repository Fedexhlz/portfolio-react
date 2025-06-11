import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { projectData } from '../constants/projects';

const MainProjects = () => {
  return (
    <div className='flex flex-1 flex-col justify-center items-center text-white bg-gray-800 px-4 py-20'>
      <div className='w-full max-w-6xl'>
        <h2 className='text-3xl font-bold text-sky-400 mb-10 text-left'>
          Mis Proyectos
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projectData.map((project, i) => (
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
                <h3 className='text-lg font-semibold text-white text-center px-4'>
                  {project.projectName}
                </h3>
                <a
                  href={project.githubRepository}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 border border-gray-600 text-gray-400 px-4 py-2 rounded transition text-sm hover:bg-gray-600 hover:text-white'
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
