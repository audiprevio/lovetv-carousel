import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import MovieTitle from '../components/MovieTitle';
import EpisodeSwiper from '../components/EpisodeSwiper';

const MainPage = () => {
  useEffect(() => {
    const updateVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('load', updateVH);
    window.addEventListener('resize', updateVH);

    return () => {
      window.removeEventListener('load', updateVH);
      window.removeEventListener('resize', updateVH);
    };
  }, []);

  return (
    <div className='relative'>
      <Navbar className="z-[51] absolute" />
      <MovieTitle className="z-50 absolute" />
      <EpisodeSwiper />
    </div>
  );
};

export default MainPage;
