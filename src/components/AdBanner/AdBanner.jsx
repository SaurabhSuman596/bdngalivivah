import React from 'react';
import './AdBanner.css';
import APP_IMAGES from '../../static/images';
import { FaArrowRight } from 'react-icons/fa6';

const AdBanner = () => {
  return (
    <div className="adBanner">
      <div className="adBanner__cont">
        <div className="adBanner__desc">
          <h1>Exclusive & Personalised Matchmaking by Shaadi.com</h1>
          <p className="adBanner__descBottom">
            <span>Top Rated Consultants</span>|{' '}
            <span>5 times higher success rates</span> |{' '}
            <span>100% Privacy</span>
          </p>
        </div>

        <div className="adBanner__descBanner">
          <img src={APP_IMAGES.vipShaddiIcon} alt="" />
          <button>
            Get Invited
            <FaArrowRight style={{ fontSize: '1.3rem' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
