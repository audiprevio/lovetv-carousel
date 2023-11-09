import React, { Suspense, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import image1 from '../assets/e1.avif';
import image2 from '../assets/e2.avif';
import image3 from '../assets/e3.avif';
import image4 from '../assets/e4.avif';
import { Button } from '@mui/base/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';



export default function EpisodeSwiper() {


    const videos = [
        "https://cdn.coverr.co/videos/coverr-three-friends-hugging-each-other-7271/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-a-loving-couple-holding-hands-and-walking-on-the-beach-2228/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-loving-couple-walking-in-a-park-free-stock-video-coverr-4133/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-a-man-draws-a-game-card-with-the-text-give-a-compliment-6935/1080p.mp4"
    ];
    const [currentVideo, setCurrentVideo] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentVideo(swiper.activeIndex);
    }

    const slides = [
        {
            image: image1,
            title: "Episode 1: Circus",
            description: "Under the grand spectacle of life's circus, a trio grapple with the realization that love's path is not always a linear journey.",
            casts: "Cast: Mike Rhodey, Cassey Norman, Alex Benavent, more",
            timeandrelease: "1h 2m  |  2023"
        },
        {
            image: image2,
            title: "Episode 2: Spotless Minds",
            description: "Traverse the ethereal journey of Amelia and Oliver, lost in the abyss of forgotten love and erased memories.",
            casts: "Cast: Clement Lacuna, Joel Winter, more",
            timeandrelease: "1h 10m | 2023"
        },
        {
            image: image3,
            title: "Episode 3: Reunion",
            description: "A reunion, meant to rekindle a flame, instead ignites a storm when the truth strucks, fracturing their reality.",
            casts: "Cast: Diamona Love, Casimir Higgins, more",
            timeandrelease: "1h 22m | 2023"
        },
        {
            image: image4,
            title: "Episode 4: La Belle",
            description: "A maiden and knight caught in a tragic ballet of love and mortality. Their tale weaves a tapestry of passion and demise, a dance as timeless as the cosmos.",
            casts: "Casts: Michel Dunkerque, Anya Dvina, more",
            timeandrelease: "1h 3m | 2023"
        }
    ];
    
    const [isSaved, setIsSaved] = useState<boolean[]>(new Array(slides.length).fill(false));

    return (
        <Suspense fallback={<div>Loading episodes...</div>}>
        <>
            {videos.map((video, index) => (
                <video loading="lazy"  key={index} src={video} autoPlay loop muted playsInline className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-linear ${currentVideo === index ? 'opacity-100' : 'opacity-0'}`}></video>
            ))}
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                spaceBetween={100}
                coverflowEffect={{
                    rotate: 1.5,
                    stretch: 0,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="xs:pt-[18vw] sm:pt-[10vw] lg:pt-[5vw] xl:pt-[5vw]"
                onSlideChange={handleSlideChange}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative group flex flex-col items-center justify-center">
                            <img src={slide.image} loading="eager" className="object-cover transition-all duration-200 rounded-[1.5rem] ease-in-out group-hover:brightness-[0.15] xs:max-w-[250%]"/>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-xl text-center font-regular px-[5rem] xs:w-[24rem] sm:w-[30rem] md:w-[30rem] lg:w-[30rem] xl:w-[30rem] xs:mx-0 sm:px-10 tracking-wide">
                                <p className="text-[#fafafa] mt-12 mb-10 antialiased xs:text-center xs:text-lg sm:text-lg md:text-lg lg:text-xl font-medium lg:pt-12 xs:pt-12 xl:pt-12">{slide.description}</p>
                                <p className="text-[#9b9b9b] mb-1 antialiased xs:text-center xs:text-sm sm:text-sm md:text-sm lg:text-sm font-normal">{slide.casts}</p>
                                <p className="text-[#9b9b9b] mb-10 xs:mb-6 antialiased xs:text-center xs:text-sm sm:text-sm md:text-sm lg:text-sm font-normal">{slide.timeandrelease}</p>
                                <Button className="antialiased mt-4 text-[#222222] xs:mb-[0.75rem] sm:mb-[0.75rem] xs:min-w-[9.305rem] sm:min-w-[9.305rem] w-[100%] h-[3rem] bg-[#fafafa] duration-300 ease-in-out hover:bg-white hover:text-[#444444] rounded-lg font-medium">
                                    <div className="flex justify-center items-center">
                                        <PlayCircleOutlineIcon className="mr-1 antialiased"/>
                                        <span className='antialiased text-[0.875rem]'>Watch Now</span>
                                    </div>
                                </Button>
                                <Button 
                                    className={`${
                                        isSaved[index] 
                                        ? 'text-[#222222]' 
                                        : 'text-[#fafafa]'
                                    } ${isSaved[index] 
                                        ? 'bg-[#c5c5c5] border-[#c5c5c5]'
                                        : 'bg-[transparent]'
                                    } border-[#fafafa] border-[1px] duration-300 ease-in-out hover:bg-[#c5c5c5] hover:border-none xs:min-w-[9.305rem] sm:min-w-[9.305rem] w-[100%] h-[3rem] rounded-lg text-[0.875rem] hover:text-[#444444] xs:mb-[6rem] font-medium`}
                                    onClick={() => {
                                        const newIsSaved = [...isSaved];
                                        newIsSaved[index] = !newIsSaved[index];
                                        setIsSaved(newIsSaved);
                                    }}
                                >
                                    <div className="flex justify-center items-center">
                                        <BookmarkBorderIcon className="mr-1 antialiased" />
                                        <span className='antialiased'>{isSaved[index] ? 'Added to List' : 'Save to List'}</span>
                                    </div>
                                </Button>                        
                            </div>
                            <h1 className="mb-2 mt-4 opacity-100 text-[#fafafa] transition-opacity duration-200 ease-in-out text-xxl font-medium antialiased xs:text-center xs:text-base sm:text-base md:text-base lg:text-xl xs:w-[37.5rem] s:w-[37.5rem]">{slide.title}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    </Suspense>
    );
}