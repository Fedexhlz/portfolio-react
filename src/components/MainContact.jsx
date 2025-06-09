import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const MainContact = () => {
  return (
    <div className='flex flex-1 flex-col justify-center items-center text-white bg-gray-800 px-4 py-20'>
      <div className='w-full max-w-2xl'>
        <h2 className='text-3xl font-bold text-sky-400 mb-6 text-left'>
          Contactame
        </h2>
        <p className='text-gray-300 mb-10 text-left'>
          ¿Tenés una idea o proyecto? Escribime y charlamos.
        </p>

        <form className='flex flex-col gap-6 mb-12'>
          <input
            type='text'
            placeholder='Tu Nombre'
            className='bg-gray-700 text-white placeholder-gray-400 placeholder:italic px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400'
          />
          <input
            type='email'
            placeholder='Tu Correo electrónico'
            className='bg-gray-700 text-white placeholder-gray-400 placeholder:italic px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400'
          />
          <textarea
            placeholder='Tu Mensaje'
            rows='5'
            className='bg-gray-700 text-white placeholder-gray-400 placeholder:italic px-4 py-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-sky-400'
          ></textarea>
          <button
            type='button'
            className='bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded transition '
          >
            Enviar mensaje
          </button>
        </form>

        <div className='flex flex-col sm:flex-row justify-around items-start sm:items-center gap-4 text-sm text-gray-300'>
          <div className='flex items-center gap-2'>
            <FaEnvelope />
            <a
              href='mailto:fedexhlz@gmail.com'
              className='hover:text-blue-400 transition'
            >
              Fedexhlz@gmail.com
            </a>
          </div>
          <div className='flex items-center gap-2'>
            <FaPhoneAlt />
            <span>+54 9 381 123 4567</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaLinkedin />
            <a
              href='https://www.linkedin.com/in/federico-herrera-l%C3%B3pez-a50591237/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-400 transition'
            >
              /Federico-Herrera
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContact;
