import React from 'react';
import { aboutMeData } from '../constants/aboutMe';
import { themeStore } from '../store/themeStore';

const MainAboutMe = () => {
  const { theme } = themeStore();

  return (
    <div
      className={`flex flex-1 flex-col justify-center items-center px-4 py-20 ${
        theme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className='w-full max-w-6xl space-y-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
          <div className='md:col-span-2 text-left'>
            <h2 className='text-3xl font-bold text-sky-400 mb-6'>Sobre mí</h2>
            <p
              className={`text-lg leading-relaxed ${
                theme ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {aboutMeData.description}
            </p>
          </div>
          <div className='flex justify-center'>
            <img
              src={aboutMeData.image}
              alt='Foto de perfil'
              className='w-48 h-48 object-cover rounded-full border-4 border-gray-700 duration-300 hover:scale-180'
            />
          </div>
        </div>

        <div>
          <h2 className='text-3xl font-bold text-sky-400 mb-6 text-left'>
            Habilidades
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {aboutMeData.devSkills.map((skill, i) => (
              <div
                className={`p-4 rounded-lg flex flex-col sm:flex-row items-center gap-2 duration-300 hover:scale-105 hover:shadow-lg ${
                  theme
                    ? 'bg-gray-700 text-white hover:shadow-sky-500/40'
                    : 'bg-gray-200 text-gray-900 hover:shadow-gray-950/40'
                }`}
              >
                <img
                  src={skill.icon}
                  alt={skill.tech}
                  className='w-10 h-10 object-contain'
                />
                <span
                  className={`text-base ${
                    theme ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {skill.tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAboutMe;
