import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info ">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}> We serve the best meals and offer the best services accross the country and beyond. We are glad to showcase our premium cuisines ranging from Kenyan, African and Indian cuisines. Feel at home with our finger-licking good meals!</p>
      <button type="button" className="custom__button">Explore Menu</button>

    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"/>

    </div>
  </div>
);

export default Header;
