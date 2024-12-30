import React from 'react';
import './Explore.css';
import ExploreCard from '../../patrial/ExploreCard/ExploreCard';

const Explore = () => {
  return (
    <div className="explore">
      <div className="explore__cont">
        <p className="explore__title">Explore Matrimonial Profiles By</p>
        <div className="explore__cardCont">
          <ExploreCard /> <ExploreCard /> <ExploreCard /> <ExploreCard />{' '}
          <ExploreCard />
        </div>
      </div>
    </div>
  );
};

export default Explore;
