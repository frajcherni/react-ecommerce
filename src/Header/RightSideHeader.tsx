import React from 'react';
import HeaderWishList from './HeaderWishList';
import HeaderContactUs from './HeaderContactUs';
import HeaderProfile from './HeaderProfile';
import HeaderCart from './HeaderCart';

const RightSideHeader: React.FC = () => {
  return (
<div className='rightside-box'>
      <ul className='right-side-menu'>
        <li className='right-side'>
          <div className='delivery-login-box'>
            <div className='delivery-icon'>
    
            </div>
          </div>
        </li>
        <HeaderContactUs />
        <HeaderWishList  />
        <HeaderCart />
        <HeaderProfile />
      </ul>
    </div>
  );
};

export default RightSideHeader;
