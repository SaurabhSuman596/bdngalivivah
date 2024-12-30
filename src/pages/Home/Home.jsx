import React from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import AdBanner from '../../components/AdBanner/AdBanner';
import GuideBanner from '../../components/GuideBanner/GuideBanner';
import HappyStories from '../../components/HappyStories/HappyStories';
import GetStartedBanner from '../../components/GetStartedBanner/GetStartedBanner';
import Explore from '../../components/Explore/Explore';

const Home = () => {
  return (
    <div className="home__page">
      <div className="home__banner">
        <Banner />
        <AdBanner />
        <GuideBanner />
        <HappyStories />
        <GetStartedBanner />
        <Explore />
      </div>
    </div>
  );
};

export default Home;
