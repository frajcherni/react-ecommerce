
import React from 'react';
import { Link } from 'react-router-dom';
import { RiHeartLine } from 'react-icons/ri';

const HeaderWishList: React.FC = () => {
  return (
    <li className='right-side'>
      <Link to='/en/wishlist' className='btn p-0 position-relative header-wishlist'>
        <RiHeartLine />
      </Link>
    </li>
  );
};

export default HeaderWishList;
