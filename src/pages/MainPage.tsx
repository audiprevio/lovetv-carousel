import React from 'react';
import Navbar from '../components/Navbar';
import MovieTitle from '../components/MovieTitle';
import EpisodeSwiper from '../components/EpisodeSwiper';

const MainPage = () => {
  return (
    <div className='relative'>
      <Navbar className="z-[51] absolute" />
      <MovieTitle className="z-50 absolute" />
      <EpisodeSwiper />
    </div>
  );
};

export default MainPage;
