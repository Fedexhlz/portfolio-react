import React from 'react';
import { Link } from 'react-router-dom';
import { themeStore } from '../store/themeStore';

const MainHome = () => {
  const { theme } = themeStore();

  return (
    <div
      className={`flex flex-1 flex-col justify-center items-center text-center px-4 py-20 ${
        theme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <h1 className='text-4xl sm:text-5xl font-bold mb-4'>
        <span className='text-purple-600'>console</span>.
        <span className='text-lime-500'>log</span>(
        <span className='text-sky-500'>"Federico Herrera"</span>);
      </h1>
      <p
        className={`text-lg sm:text-xl ${
          theme ? 'text-gray-300' : 'text-gray-700'
        } max-w-xl`}
      >
        Estudiante de <span className='italic'>Programación</span> de la{' '}
        <a
          href='http://www.frt.utn.edu.ar/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-bold'
        >
          UTN - FRT
        </a>
        .
      </p>
      <p
        className={`text-lg sm:text-xl mb-4 ${
          theme ? 'text-gray-300' : 'text-gray-700'
        } max-w-xl`}
      >
        Transformando ideas en código y desafíos en oportunidades.
      </p>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Link
          to='/aboutme'
          className={`${
            theme
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-white hover:bg-gray-200 text-gray-900 border border-gray-300'
          } px-6 py-2 rounded transition`}
        >
          Sobre mí
        </Link>
        <Link
          to='/projects'
          className={`${
            theme
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-white hover:bg-gray-200 text-gray-900 border border-gray-300'
          } px-6 py-2 rounded transition`}
        >
          Mis Proyectos
        </Link>
        <Link
          to='/contact'
          className={`${
            theme
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-white hover:bg-gray-200 text-gray-900 border border-gray-300'
          } px-6 py-2 rounded transition`}
        >
          Contactame
        </Link>
      </div>
    </div>
  );
};

export default MainHome;
