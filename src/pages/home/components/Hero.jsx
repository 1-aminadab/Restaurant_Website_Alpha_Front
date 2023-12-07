import React, { useEffect, useState } from 'react';
import { ViewMenu } from '../../../components/common/Texts';
import heroSlider1 from '../assets/images/hero-slider-4.jpg';
import heroSlider2 from '../assets/images/hero-slider-5.jpg';
import heroSlider3 from '../assets/images/hero-slider-6.jpg';
import heroIcon from '../assets/images/hero-icon.png';
import { useTranslation } from 'react-i18next'; 
import { FindTable } from '../../../components/common/Texts';
const sliders = [
  {
    image:heroSlider1,
    subtitle:"Traditional & Hygiene",
    title1:"hero.title-1",
    title2:"delicious food",
    text:"Come with family & feel the joy of mouthwatering food",
    btnTxt:"View Our Menu",
    btnLink:'#menu'
  },
  {
    image:heroSlider2,
    subtitle:"Delightful Experience",
    title1:"hero.title-2",
    title2:"the Seasons",
    text:"Come with family & feel the joy of mouthwatering food",
    btnTxt:"View Our Menu",
    btnLink:'#menu'
  },
  {
    image:heroSlider3,
    subtitle:"Amazing & Delicious",
    title1:"hero.title-3",
    title2:"tells a story",
    text:"Come with family & feel the joy of mouthwatering food",
    btnTxt:"View Our Menu",
    btnLink:'#menu'
  },
]
const HeroSection = () => {
  const {t} = useTranslation()
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
  const handleMouseOut = () => {
    autoSlide();
  };
  useEffect(() => {
    const timeoutID= window.setInterval(() => {
      nextSlide()
    },  4000);

    // Clear Timeout On Component Unmount
    return () => window.clearTimeout(timeoutID);
  }, []);
 
   
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
            <p className="label-2 section-subtitle slider-reveal">{t('hero.common-1')}</p>
            <h1 className="display-1 hero-title slider-reveal">
            {t(slide.title1)}
            </h1>
            <p className="body-2 hero-text slider-reveal">{t('hero.subTitle-1')}</p>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1"><ViewMenu /></span>
              <span className="text text-2" aria-hidden="true">
                <ViewMenu />
               
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
      <button  onClick={()=>prevSlide()}  className="slider-btn next" aria-label="slide to next" data-next-btn >
        <ion-icon name="chevron-forward"></ion-icon>
      </button>
      <a href="#" className="hero-btn has-after">
        <img src={heroIcon} width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span"><FindTable /></span>
      </a>
    
    </section>
  );
};

export default HeroSection;
