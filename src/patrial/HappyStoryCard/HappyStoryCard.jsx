import React from 'react';
import './HappyStoryCard.css';

const HappyStoryCard = ({ couple }) => {
  return (
    <div className="happyStoryCard">
      <img src={couple.coupleImage} alt="" />
      <div className="happyStoryCard__content">
        <p className="happyStoryCard__contentTitle">{couple.coupleName}</p>
        <p className="happyStoryCard__contentdesc">{couple.coupleDesc}</p>
      </div>
    </div>
  );
};

export default HappyStoryCard;
