import React from 'react';
import './GuideBanner.css';
import GuideBannerCard from '../../patrial/GuideBannerCard/GuideBannerCard';
import { GiNotebook } from 'react-icons/gi';
import { IoPersonAddOutline } from 'react-icons/io5';
import { LuMessageCircleHeart } from 'react-icons/lu';

const GuideBanner = () => {
  return (
    <div className="guideBanner">
      <p className="guideBanner__title">Find your Special Someone</p>
      <div className="guideBanner__cont">
        <GuideBannerCard
          cardContent={{
            num: 1,
            icon: <GiNotebook className="guideBannerCard__icon" />,
            title: 'Sign Up',
            desc: 'Register for free & put up your Bengali Matrimony Profile',
          }}
        />
        <GuideBannerCard
          cardContent={{
            num: 2,
            icon: <IoPersonAddOutline className="guideBannerCard__icon" />,
            title: 'Connect',
            desc: 'Select & Connect with Matches you like',
          }}
        />
        <GuideBannerCard
          cardContent={{
            num: 3,
            icon: <LuMessageCircleHeart className="guideBannerCard__icon" />,
            title: 'Interact',
            desc: 'Become a Premium Member & Start a Conversation',
          }}
        />
      </div>
    </div>
  );
};

export default GuideBanner;
