import React, { useState } from 'react';
import '../LanguageCarousel/index.modules.css';

const items = [
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    altText: 'React',
    caption: 'React'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    altText: 'JavaScript',
    caption: 'JavaScript'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    altText: 'Express.js',
    caption: 'Express.js'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    altText: 'Node.js',
    caption: 'Node.js'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    altText: 'MySQL',
    caption: 'MySQL'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    altText: 'HTML5',
    caption: 'HTML5'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    altText: 'CSS3',
    caption: 'CSS3'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    altText: 'Git',
    caption: 'Git'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
    altText: 'Bootstrap',
    caption: 'Bootstrap'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    altText: 'SCSS',
    caption: 'SCSS'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/agile/agile-original.svg',
    altText: 'Agile',
    caption: 'Agile'
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scrum/scrum-original.svg',
    altText: 'Scrum',
    caption: 'Scrum'
  },
];

const LanguageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel__slides"
        style={{
          transform: `translateX(-${activeIndex * (100 / items.length)}%)`
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel__slide ${
              index === activeIndex ? 'carousel__slide--active' : ''
            }`}
            style={{
              transform: `scale(${
                index === activeIndex ? '1.2' : '0.8'
              })`
            }}
          >
            <img
              src={item.src}
              alt={item.altText}
              className="carousel__image"
            />
            <div className="carousel__caption">{item.caption}</div>
          </div>
        ))}
      </div>
      <div className="carousel__controls">
        <button className="carousel__button" onClick={handlePrev}>
          Prev
        </button>
        <button className="carousel__button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LanguageCarousel;