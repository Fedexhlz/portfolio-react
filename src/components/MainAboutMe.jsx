import React from 'react';
import { aboutText, skills } from '../constants/aboutMe';
import perfil from '../assets/img/codigo.jpg';

const MainAboutMe = () => {
  return (
    <div className='flex flex-1 flex-col justify-center items-center text-white bg-gray-800 px-4 py-20'>
      <div className='w-full max-w-6xl space-y-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
          <div className='md:col-span-2 text-left'>
            <h2 className='text-3xl font-bold text-sky-400 mb-6'>Sobre mí</h2>
            <p className='text-lg text-gray-300 leading-relaxed'>{aboutText}</p>
          </div>
          <div className='flex justify-center'>
            <img
              src={perfil}
              alt='Foto de perfil'
              className='w-48 h-48 object-cover rounded-full border-4 border-gray-700'
            />
          </div>
        </div>

        <div>
          <h3 className='text-3xl font-bold text-sky-400 mb-6 text-left'>
            Habilidades
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-gray-700 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-2 transition transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/40"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className='w-10 h-10 object-contain'
                />
                <span className='text-white text-base'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAboutMe;
