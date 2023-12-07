import React from 'react';
import { useTranslation } from 'react-i18next';
import serviceImage1 from '../assets/images/service-1.jpg';
import serviceImage2 from '../assets/images/service-2.jpg';
import serviceImage3 from '../assets/images/service-3.jpg';
import shape1 from '../assets/images/shape-1.png';
import shape2 from '../assets/images/shape-2.png';

import { ViewMenu } from '../../../components/common/Texts';
const ServicesSection = () => {
  const {t} = useTranslation()
  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">{t('service.subTitle')}</p>
        <h2 className="headline-1 section-title">{t('service.title')}</h2>
        <p className="section-text">
        {t('service.text')}
        </p>
        <ul className="grid-list">
          <li>
            <div className="service-card">
              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{width: "285", height: "336"}}>
                  <img src={serviceImage1} width="285" height="336" loading="lazy" alt="Breakfast" className="img-cover" />
                </figure>
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#">{t('service.listTitle-1')}</a>
                </h3>
                <a href="#" className="btn-text hover-underline label-2">
                <ViewMenu />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="service-card">
              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" >
                  <img src={serviceImage2} width="285" height="336" loading="lazy" alt="Appetizers" className="img-cover" />
                </figure>
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#">{t('service.listTitle-2')}</a>
                </h3>
                <a href="#" className="btn-text hover-underline label-2">
                <ViewMenu />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="service-card">
              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{width: "285",height: "336"}}>
                  <img src={serviceImage3} width="285" height="336" loading="lazy" alt="Drinks" className="img-cover" />
                </figure>
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#">{t('service.listTitle-3')}</a>
                </h3>
                <a href="#" className="btn-text hover-underline label-2">
                <ViewMenu />
                </a>
              </div>
            </div>
          </li>
        </ul>
        <img src={shape1} width="246" height="412" loading="lazy" alt="shape" className="shape shape-1 move-anim" />
        <img src={shape2} width="343" height="345" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
      </div>
    </section>
  );
};

export default ServicesSection;
