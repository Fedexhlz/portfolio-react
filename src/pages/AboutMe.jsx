import React from 'react';
import Header from '../components/Header';
import MainAboutMe from '../components/MainAboutMe';
import Footer from '../components/Footer';

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
