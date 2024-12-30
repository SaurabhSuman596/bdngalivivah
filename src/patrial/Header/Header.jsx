import React from 'react';
import './Header.css';
import APP_IMAGES from '../../static/images';
import { AiOutlineDown } from 'react-icons/ai';
import { BsPersonFillGear } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="header">
      <img src={APP_IMAGES.appLogo} alt="bangaliShaadi.com" />
      <div className="header__right">
        <button>
          <span>Login</span>
          <AiOutlineDown style={{ fontSize: '1.1rem' }} />
        </button>
        <button className="help__button">
          <BsPersonFillGear
            style={{ marginRight: '8px', fontSize: '1.3rem' }}
          />
          <span>Help</span>
          <AiOutlineDown style={{ fontSize: '1.1rem' }} />
        </button>
      </div>
    </div>
  );
};

export default Header;
