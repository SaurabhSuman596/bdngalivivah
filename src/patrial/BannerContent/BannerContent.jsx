import React from 'react';
import './BannerContent.css';

const BannerContent = () => {
  return (
    <div className="bannerContent">
      <h3>Trusted Bengali Matrimony & Matchmaking Service</h3>
      <div className="bannerContent__main">
        <p>I'm looking for a life partner for...</p>
        <div className="bannerContent__labelCont">
          <label htmlFor="chooseMySelf">
            <input
              type="radio"
              id="chooseMySelf"
              name="chooseForPerson"
              value="MySelf"
              defaultChecked="checked"
              className="banner__radio"
            />
            <span>Myself</span>
          </label>
          <label htmlFor="chooseFamilyorFriend">
            <input
              type="radio"
              id="chooseFamilyorFriend"
              value="Family  or Friend"
              name="chooseForPerson"
              className="banner__radio"
            />
            <span>Family or Friend</span>
          </label>
        </div>

        <button>Let's Begin</button>
      </div>
    </div>
  );
};

export default BannerContent;
