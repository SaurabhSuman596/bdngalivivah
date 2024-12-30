import React from 'react';
import './GuideBannerCard.css';

const GuideBannerCard = ({ cardContent }) => {
  return (
    <div className="guideBannerCard">
      <div className="guideBannerCard__iconCont">
        {cardContent.icon}
        <span>{cardContent.num}</span>
      </div>
      <div className="guideBannerCard__textCont">
        <p className="guideBannerCard__title">{cardContent.title}</p>
        <p className="guideBannerCard__desc">{cardContent.desc}</p>
      </div>
    </div>
  );
};

export default GuideBannerCard;
