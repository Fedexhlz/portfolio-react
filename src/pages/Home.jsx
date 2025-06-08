import React from 'react';
import Header from '../components/Header';
import MainHome from '../components/MainHome';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
};

export default Home;
