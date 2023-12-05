import React, { useEffect, useState } from 'react';
import heroSlider1 from '../assets/images/hero-slider-1.jpg';
import heroSlider2 from '../assets/images/hero-slider-2.jpg';
import heroSlider3 from '../assets/images/hero-slider-3.jpg';
import heroIcon from '../assets/images/hero-icon.png';

const sliders = [
  {
    image:heroSlider1,
    subtitle:"Traditional & Hygiene",
    title1:"For the love of",
    title2:"delicious food",
    text:"Come with family & feel the joy of mouthwatering food",
    btnTxt:"View Our Menu",
    btnLink:'#menu'
  },
  {
    image:heroSlider2,
    subtitle:"Delightful Experience",
    title1:"Flavors Inspired by",
    title2:"the Seasons",
    text:"Come with family & feel the joy of mouthwatering food",
    btnTxt:"View Our Menu",
    btnLink:'#menu'
  },
  {
    image:heroSlider3,
    subtitle:"Amazing & Delicious",
    title1:"Where every flavor",
    title2:"tells a story",
    text:"Come with family & feel the joy of mouthwatering food",
    btnTxt:"View Our Menu",
    btnLink:'#menu'
  },
]
const HeroSection = () => {
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);
  let [currentIndex, setIndex] = useState(0)

   const nextSlide = ()=>{
    
    if(currentIndex <= sliders.length-1 ) return setIndex(currentIndex++)
    else return setIndex(0)
   }
   const prevSlide = ()=>{
    if(currentIndex > 0) return setIndex(currentIndex--)
    else setIndex(sliders.length - 1)
   }
    const slideNext = ()=>{

    }
  const autoSlide = () => {
    setAutoSlideInterval(setInterval(slideNext, 10000));
  };

  const handleMouseOver = () => {
    clearInterval(autoSlideInterval);
  };

  const handleMouseOut = () => {
    autoSlide();
  };

  useEffect(() => {
   setTimeout(() => {
    nextSlide()
   }, 5000);
  },[nextSlide]); // Empty dependency array means it runs only on mount and unmount
   
  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
      {
        sliders.map((slide, index)=>{
          return (
            <li className={`slider-item ${index ===currentIndex ?'active':''}`} data-hero-slider-item>
            <div className="slider-bg">
              <img src={slide.image} width="1880" height="950" alt="" className="img-cover" />
            </div>
            <p className="label-2 section-subtitle slider-reveal">Traditional & Hygiene</p>
            <h1 className="display-1 hero-title slider-reveal">
              {slide.title1} <br /> {slide.title2}
            </h1>
            <p className="body-2 hero-text slider-reveal">Come with family & feel the joy of mouthwatering food</p>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">{slide.btnTxt}</span>
              <span className="text text-2" aria-hidden="true">
                {slide.btnTxt}
              </span>
            </a>
          </li>
          )
        })
      }
       
        
      </ul>
      <button onClick={()=>nextSlide()}   className="slider-btn prev" aria-label="slide to previous" data-prev-btn onMouseOut={handleMouseOut}>
        <ion-icon name="chevron-back"></ion-icon>
      </button>
      <button  onClick={()=>prevSlide()}  className="slider-btn next" aria-label="slide to next" data-next-btn onClick={prevSlide}>
        <ion-icon name="chevron-forward"></ion-icon>
      </button>
      <a href="#" className="hero-btn has-after">
        <img src={heroIcon} width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a>
    
    </section>
  );
};

export default HeroSection;
