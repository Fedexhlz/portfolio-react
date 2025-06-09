import React from 'react';
import Header from '../components/Header';
import MainProjects from '../components/MainProjects';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <MainProjects />
      <Footer />
    </div>
  );
};

export default Projects;
