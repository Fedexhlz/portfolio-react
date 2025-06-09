import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainAboutMe from '../components/MainAboutMe';

const AboutMe = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <MainAboutMe />
      <Footer />
    </div>
  );
};

export default AboutMe;
