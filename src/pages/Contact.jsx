import React from 'react';
import Header from '../components/Header';
import MainContact from '../components/MainContact';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <MainContact />
      <Footer />
    </div>
  );
};

export default Contact;
