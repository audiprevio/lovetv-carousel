import React from 'react'


interface MovieTitleProps {
    className?: string;
}

const MovieTitle: React.FC<MovieTitleProps> = ({ className })=> {
  return (
    <div className={`text-[#fafafa] px-[1rem] py-[0.5rem] h-[4rem] w-[100vw] flex justify-center items-center ${className}`}>
     <h1 className='text-xl xs:text-sm sm:text-sm md:text-lg  lg:text-xl font-medium bg-none antialiased'>Sunshines: An Anthology of Love | S1</h1>
    </div>
  )
}

export default MovieTitle