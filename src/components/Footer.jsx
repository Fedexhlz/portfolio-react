import React from 'react';
import { themeStore } from '../store/themeStore';
import { FaGithub, FaLinkedin, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  const { theme } = themeStore();
  return (
    <div
      className={`${
        theme
          ? 'bg-gray-900 text-white'
          : 'bg-white text-gray-900 border-t border-gray-200'
      } py-4`}
    >
      <div className='flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-center'>
        <span className='flex items-center gap-1'>
          <FaRegCopyright />
          2025 - Federico Herrera - Todos los derechos reservados -
        </span>

        <span className='flex gap-4 text-xl mt-1 md:mt-0'>
          <a
            href='https://github.com/Fedexhlz'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-400 transition'
            title='GitHub'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/federico-herrera-l%C3%B3pez-a50591237/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-400 transition'
            title='LinkedIn'
          >
            <FaLinkedin />
          </a>
        </span>
      </div>

      <div
        className={`mt-2 text-center text-xs ${
          theme ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Hecho con{' '}
        <a
          href='https://es.react.dev/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400'
        >
          React
        </a>
        ,{' '}
        <a
          href='https://vite.dev/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400'
        >
          Vite
        </a>{' '}
        y{' '}
        <a
          href='https://tailwindcss.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400'
        >
          Tailwind CSS
        </a>{' '}
        💻
      </div>
    </div>
  );
};

export default Footer;
