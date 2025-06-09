import React from 'react';
import { Link } from 'react-router-dom';

const MainHome = () => {
  return (
    <div className='flex flex-1 flex-col justify-center items-center text-white bg-gray-800 text-center px-4 py-20'>
      <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
        <span className='text-purple-600'>console</span>.
        <span className='text-lime-500'>log</span>(
        <span className='text-sky-500'>"Federico Herrera"</span>);
      </h2>
      <p className='text-lg sm:text-xl text-gray-300 max-w-xl'>
        Estudiante de <span className='italic'>Programación</span> de la{' '}
        <span className='font-bold'>UTN - FRT</span>.
      </p>
      <p className='text-lg sm:text-xl text-gray-300 max-w-xl mb-6'>
        Transformando ideas en código y desafíos en oportunidades.
      </p>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Link
          to='/aboutme'
          className='bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded transition'
        >
          Sobre mí
        </Link>
        <Link
          to='/projects'
          className='bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded transition'
        >
          Mis Proyectos
        </Link>
        <Link
          to='/contact'
          className='bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded transition'
        >
          Contactame
        </Link>
      </div>
    </div>
  );
};

export default MainHome;
