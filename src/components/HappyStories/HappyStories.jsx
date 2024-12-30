import React, { useRef } from 'react';
import './HappyStories.css';
import HappyStoryCard from '../../patrial/HappyStoryCard/HappyStoryCard';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import couplesArray from '../../static/coupleList';

const HappyStories = () => {
  const cardContRef = useRef(null);

  const handleArrowClick = (dir) => {
    if (dir === 'Right') {
      cardContRef.current.scrollLeft = cardContRef.current.scrollLeft + 360;
    } else if (dir === 'Left') {
      cardContRef.current.scrollLeft = cardContRef.current.scrollLeft - 360;
    }
  };
  return (
    <div className="happyStories">
      <div className="happyStories__cont">
        <h3 className="guideBanner__title">
          Bengali Matrimony Service with Over 5 Lakh Happy Stories
        </h3>
      </div>
      <div className="happyStories__arrowCont">
        <div className="happyStories__cardContArrow">
          <div
            className="happyStories__cardContArrowItemCont"
            onClick={() => handleArrowClick('Left')}
          >
            <FaArrowLeft className="happyStories__cardContArrowItem" />
          </div>
          <div
            className="happyStories__cardContArrowItemCont"
            onClick={() => handleArrowClick('Right')}
          >
            {' '}
            <FaArrowRight className="happyStories__cardContArrowItem" />
          </div>
        </div>
        <div ref={cardContRef} className="happyStories__cardCont">
          {couplesArray &&
            couplesArray.map((couple) => <HappyStoryCard couple={couple} />)}
        </div>
      </div>
    </div>
  );
};

export default HappyStories;
