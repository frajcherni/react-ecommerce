import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from './common_Avatar';
import { RiUserLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { placeHolderImage } from './CommonPath';
import avatarImage from '../assets/images/avatar.webp';

type ProfileImage = {
  original_url: string;
  [key: string]: any;
};

type AccountData = {
  name: string;
  profile_image: ProfileImage | null;
};

const HeaderProfile: React.FC = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
const accountData: AccountData = { 
  name: 'John Doe', 
  profile_image: { original_url: avatarImage } 
};
  const handleLogout = () => {
    setModal(false);
    navigate('/en/auth/login');
  };

  return (
    <li className='right-side onhover-dropdown'>
      <div className='delivery-login-box'>
        <div className='delivery-icon'>
            <Avatar
              data={accountData.profile_image}
              customClass='user-box me-2'
              customImageClass='img-fluid'
              placeHolder={placeHolderImage}
              name={accountData.name}
            />
      
        </div>
        <div className='delivery-detail'>
          <h6>Hi, {accountData?.name || 'User'}</h6>
          <h5>My Account</h5>
        </div>
      </div>
      <div className='onhover-div onhover-div-login'>
        <ul className='user-box-name'>
          <li className='product-box-contain'>
            <Link to='/en/account/dashboard'>
              <RiUserLine className='me-2' /> My Account
            </Link>
          </li>
          <li className='product-box-contain' onClick={() => setModal(true)}>
            <a>
              <RiLogoutBoxRLine className='me-2' /> Logout
            </a>
          </li>
        </ul>
      </div>
      {modal && (
        <div className={`modal ${modal ? 'show' : ''}`}>
          <div className='modal-content'>
            <h5>Confirm Logout</h5>
            <p>Are you sure you want to logout?</p>
            <button onClick={() => setModal(false)}>Cancel</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default HeaderProfile;
