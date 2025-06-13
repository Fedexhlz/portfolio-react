import React, { useState } from 'react';
import { contactData } from '../constants/contact';
import { themeStore } from '../store/themeStore';
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const MainContact = () => {
  const { theme } = themeStore();

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSent, setFormSent] = useState(false);
  const [copiedToClipboardEmail, setCopiedToClipboardEmail] = useState(false);
  const [copiedToClipboardPhone, setCopiedToClipboardPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // aqui deberia enviar el contenido del estado (objeto) "contactForm"

    setFormSent(true);
    setContactForm({ name: '', email: '', message: '' });
    e.target.reset();
    setTimeout(() => setFormSent(false), 4000);
  };

  const handleCopyToClipboard = (valueToCopy, target) => {
    navigator.clipboard.writeText(valueToCopy);

    target === 'email' &&
      (setCopiedToClipboardEmail(true),
      setTimeout(() => setCopiedToClipboardEmail(false), 2500));

    target === 'phone' &&
      (setCopiedToClipboardPhone(true),
      setTimeout(() => setCopiedToClipboardPhone(false), 2500));
  };

  return (
    <div
      className={`flex flex-1 flex-col justify-center items-center px-4 py-20 ${
        theme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className='w-full max-w-2xl'>
        <h2 className='text-3xl font-bold text-sky-400 mb-6 text-left'>
          Contactame
        </h2>
        <p
          className={`${
            theme ? 'text-gray-300' : 'text-gray-700'
          } mb-10 text-left`}
        >
          {contactData.contactMessage}
        </p>

        <form className='flex flex-col gap-6 mb-12' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Tu Nombre'
            onChange={(e) =>
              setContactForm({
                ...contactForm,
                [e.target.name]: e.target.value,
              })
            }
            className={`${
              theme
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            } placeholder-gray-400 placeholder:italic px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400`}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Tu Correo electrónico'
            onChange={(e) =>
              setContactForm({
                ...contactForm,
                [e.target.name]: e.target.value,
              })
            }
            className={`${
              theme
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            } placeholder-gray-400 placeholder:italic px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400`}
            required
          />
          <textarea
            name='message'
            placeholder='Tu Mensaje'
            rows='5'
            onChange={(e) =>
              setContactForm({
                ...contactForm,
                [e.target.name]: e.target.value,
              })
            }
            className={`${
              theme
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            } placeholder-gray-400 placeholder:italic px-4 py-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-sky-400`}
            required
          ></textarea>

          <button
            type='submit'
            className={`${
              theme
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-white hover:bg-gray-200 border border-gray-300'
            } text-${
              theme ? 'white' : 'gray-900'
            } px-6 py-2 rounded transition`}
          >
            {formSent ? 'Mensaje enviado' : 'Enviar mensaje'}
          </button>
        </form>

        <div
          className={`flex flex-col sm:flex-row justify-around items-start sm:items-center gap-4 text-sm ${
            theme ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => handleCopyToClipboard(contactData.email, 'email')}
            title='Copiar email'
          >
            <FaEnvelope />
            <span className='transition'>
              {copiedToClipboardEmail ? 'Copiado' : contactData.email}
            </span>
          </div>

          <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={() =>
              handleCopyToClipboard(contactData.phoneNumber, 'phone')
            }
            title='Copiar teléfono'
          >
            <FaPhoneAlt />
            <span className='transition'>
              {copiedToClipboardPhone ? 'Copiado' : contactData.phoneNumber}
            </span>
          </div>

          <div className='flex items-center gap-2'>
            <FaLinkedin />
            <a
              href={contactData.linkedIn.url}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-400 transition'
            >
              {contactData.linkedIn.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContact;
