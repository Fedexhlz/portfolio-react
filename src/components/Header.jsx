import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md'>
      <h1 className='text-lg font-semibold italic'>Federico Herrera {'</>'}</h1>
      <nav className='flex gap-6 text-xl'>
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
      </nav>
    </div>
  );
};

export default Header;
