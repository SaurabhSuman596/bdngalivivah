import React, { useState } from 'react';
import './ExploreCard.css';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

const ExploreCard = () => {
  const [cardActive, setCardActive] = useState(false);

  const handleCardClick = () => {
    setCardActive(!cardActive);
  };
  return (
    <div className="exploreCard">
      <div className="exploreCard__heading" onClick={handleCardClick}>
        <p>Community</p>
        {cardActive ? (
          <FaMinus className="exploreCard__headingIcon" />
        ) : (
          <FaPlus className="exploreCard__headingIcon" />
        )}
      </div>
      <div
        style={
          cardActive
            ? {
                height: '100%',
                display: 'flex',
              }
            : { height: '0', display: 'none' }
        }
        className="exploreCard__content"
      >
        <p>This</p>
        <p>This</p> <p>This</p> <p>This</p> <p>This</p> <p>This</p> <p>This</p>
        <p className="exploreCard__extraLink">More Community</p>
      </div>
    </div>
  );
};

export default ExploreCard;
