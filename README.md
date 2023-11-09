<img width="1440" alt="Screenshot 2023-11-09 at 14 07 44" src="https://github.com/audiprevio/lovetvcoverflow/assets/126348614/5eeb8ad1-1fce-4be4-bed6-09e84319c64f">

# LoveTV - Carousel Style Episode Selection - [Link](https://lovetv.netlify.app)

Welcome to the Github Repo of LoveTV Episode Selection Page - Carousel Style. As the title suggests, this is a demonstration of carousel style episode selection page based on React + Vite.  

#### Tech Stack

- React 18
- Vite
- Tailwind CSS
- SwiperJS
- Material UI

#### Technical Requirement

- NodeJS 20 (to install packages)

<br />

# 1. Project Structure

Here's a quick overview of the project's folder structure and what each part is responsible for:

- src/assets/: Contains images for the slider and various icons used throughout the app.
- src/components/: All React components live here, except for the main page component.
- src/pages/: Houses the MainPage component that serves as the entry point to the app.
- src/utils/: Includes utility functions, such as an SVG getter function for icons.
- src/styles.css: Provides additional styles for Swiper JS slider elements that require custom styling beyond what TailwindCSS offers.
- public/: Contains the favicon and other static files accessible to the public.

This structure is designed to keep the project modular and maintainable, making it easy for contributors to understand where to find specific pieces of the codebase.

<br />

# 2. Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

```bash
Node.js 12.x
npm or yarn
```

### Installation

1. Clone the repo:
```bash
git clone https://github.com/audiprevio/lovetvcarousel
```

2. Install NPM packages:
```bash
npm install
```

3. Serve with hot reload at localhost:5173:
```bash
npm run dev
```

That's it! You're ready to roll with the LoveTV Episode Selection Page.  
  
<br />

  
<br />

# 3. Assets

Assets for this project is a mix of handmade icons, material UI icons, and also stock video from [coverr.co](https://coverr.co/s?q=couple)

<br />

# 4. Features & Functionalities

The main feature of this project lies in the dynamic background video that is triggerred using grabbing and swiping. It is located within the EpisodeSwiper.tsx. Basically here's how it goes:

### Pre-populated videos and images Array
The more slides there is, the more video is required as the core of the swiper is the slides.

```js


    const videos = [
        "https://cdn.coverr.co/videos/coverr-three-friends-hugging-each-other-7271/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-a-loving-couple-holding-hands-and-walking-on-the-beach-2228/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-loving-couple-walking-in-a-park-free-stock-video-coverr-4133/1080p.mp4",
        // Add more videos as you increase the slide...
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
          // Add more images...
        }
    ];
    

```

<br />

# 5. EpisodeSwiper Component
The EpisodeSwiper is a React component that renders a responsive and interactive carousel of episodes using the swiper library.

#### Features:
- Lazy-Loaded Videos: Background videos are lazy-loaded for performance, with the currently active video set to full opacity.
- Carousel Effect: Utilizes Swiper's feature for a smooth carousel look and feel.
- Responsive Design: TailwindCSS is used for responsive styling, ensuring the component is adaptable to various screen sizes.
- Interactive Elements: Action buttons with Material-UI icons provide a clear user interface for playing episodes and saving them to a list.
- Dynamic State: React useState hooks manage the active video state and the saved status of each episode.
- Accessibility: Images use loading="eager" to prioritize loading, and all interactive elements are clearly labeled for screen readers.

#### How It Works:
Maps over slides data to render each SwiperSlide.
On hover, episode details fade in, providing additional information.
"Watch Now" and "Save to List" buttons allow user interaction, with stateful feedback on save action.

### Usage:
```jsx
<EpisodeSwiper />
```
Place this component in your layout to feature a series of episodes in a carousel format. Ensure you have the required assets and state management in place for full functionality


## 5.1. More Details on the EpisodeSwiper Component

### Video Background: How it's rendered and how to achieve the transitioning effect (Hidden/Visible)

This project will render the videos by mapping through an array of video URLs (videos). For each video, it renders a <video> element that plays automatically, loops, and is muted. It uses loading="lazy" to load videos as they come into view (which is great for performance!). The className makes the current video fully visible (opacity-100) and others invisible (opacity-0) to create a fading effect between videos.

```js
{videos.map((video, index) => (
    <video loading="lazy"  key={index} src={video} autoPlay loop muted playsInline className={`absolute w-full 
    h-full object-cover transition-opacity duration-500 ease-linear ${currentVideo === index ? 'opacity-100' : 'opacity-0'}`}>
</video>
))}
```

<br />

# 6. Known Issues:
- Unselected slide might not be transparent (i.e. treated as active, still investigating)
- Swiper components tend to be very hard to style directly using tailwind so a styles.css is used

<br />

# 7. Contribution Guidelines
Want to contribute? Great! Here's how you can help:

- Fork the repo and create your branch from main.
- If you've added code that should be tested, add tests.
- Ensure the test suite passes.
- Make sure your code lints.
- Issue that pull request!


<br />


# 8. Credits and Acknowledgments
- Videos: Thanks to coverr.co for providing free stock videos.
- Icons: Icons provided by Material UI.


  
<br />


# 9. About Me & Contact

I'm an aspiring Frontend Developer on a career transition from a nearly 2.5 years of UX Research and Design professional experience. This project is one of my many Frontend projects. Drop a hello to me at: https://www.linkedin.com/in/audi-previo/ :D


