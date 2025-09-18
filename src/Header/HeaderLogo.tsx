import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../Btn';
import Avatar from './common_Avatar';
import { RiMenuLine } from 'react-icons/ri';
import logoImage from '../assets/images/logo/1.png';
import { placeHolderImage } from './CommonPath';

const HeaderLogo: React.FC = () => {
  const [mobileSideBar, setMobileSideBar] = useState(false);

  return (
    <>
      <Btn
        className='navbar-toggler d-xl-none d-inline navbar-menu-button me-2'
        onClick={() => setMobileSideBar(!mobileSideBar)}
      >
        <span className='navbar-toggler-icon'>
          <RiMenuLine />
        </span>
      </Btn>
      <Link to='/' className='web-logo nav-logo'>
        <Avatar
          data={{ original_url: "https://etikeo.blob.core.windows.net/logos/logo-100.png" }}
          placeHolder={placeHolderImage}
          name='Header'
          customImageClass='img-fluid'
          height={28}
          width={162}
        />
      </Link>
    </>
  );
};

export default HeaderLogo;
