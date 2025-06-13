import React from 'react';
import { Link } from 'react-router-dom';
import { themeStore } from '../store/themeStore';
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
  FaLightbulb,
  FaRegLightbulb,
} from 'react-icons/fa';

const Header = () => {
  const { theme, setTheme } = themeStore();

  return (
    <div
      className={`px-6 py-4 flex justify-between items-center shadow-md ${
        theme
          ? 'bg-gray-900 text-white'
          : 'bg-white text-gray-900 border-b border-gray-200'
      }`}
    >
      <Link to='/' title='Inicio' className='hover:text-blue-400 transition'>
        <h1 className='text-lg font-semibold italic'>
          Federico Herrera {theme ? '</>' : '{ }'}
        </h1>
      </Link>
      <div className='flex gap-6 text-xl'>
        <Link to='/' title='Inicio' className='hover:text-blue-400 transition'>
          <FaHome />
        </Link>
        <Link
          to='/aboutme'
          title='Sobre mí'
          className='hover:text-blue-400 transition'
        >
          <FaUser />
        </Link>
        <Link
          to='/projects'
          title='Proyectos'
          className='hover:text-blue-400 transition'
        >
          <FaFolderOpen />
        </Link>
        <Link
          to='/contact'
          title='Contacto'
          className='hover:text-blue-400 transition'
        >
          <FaEnvelope />
        </Link>
        <div className='border-l border-gray-600'></div>
        <button
          onClick={setTheme}
          title={theme ? 'Enciende la luz' : 'Apaga la luz'}
          className='cursor-pointer hover:text-blue-500 transition'
        >
          {theme ? <FaRegLightbulb /> : <FaLightbulb />}
        </button>
      </div>
    </div>
  );
};

export default Header;
