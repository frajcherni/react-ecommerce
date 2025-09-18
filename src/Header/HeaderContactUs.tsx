import React from 'react';
import { RiPhoneLine } from 'react-icons/ri';

const HeaderContactUs: React.FC = () => {
  const supportNumber = '+1 234 567 8900';

  return (
    <li className='right-side'>
      <div className='delivery-login-box'>
        <div className='delivery-icon'>
          <RiPhoneLine />
        </div>
        <div className='delivery-detail'>
          <h6>24/7 Delivery</h6>
          <h5>{supportNumber}</h5>
        </div>
      </div>
    </li>
  );
};

export default HeaderContactUs;
