import React from 'react';
import './Banner.css';
import Header from '../../patrial/Header/Header';
import BannerContent from '../../patrial/BannerContent/BannerContent';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <Header />
        <BannerContent />
      </div>
    </div>
  );
};

export default Banner;
