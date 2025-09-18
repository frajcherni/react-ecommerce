import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import HeaderLogo from './HeaderLogo';
import HeaderSearchBar from './HeaderSearchBar';
import RightSideHeader from './RightSideHeader';
import HeaderTopBar from './HeaderTopBar';
import HeaderCategory from './HeaderCategory';

const BasicHeader: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`pb-md-4 pb-0 ${isSticky ? 'active' : ''}`}>
      <HeaderTopBar />
      <div className='top-nav top-header sticky-header'>
        <div className='container-fluid-lg'>
          <Row>
            <Col xs='12'>
              <div className='navbar-top'>
                <HeaderLogo />
                <HeaderSearchBar />
                <RightSideHeader />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='container-fluid-lg'>
        <Row>
          <HeaderCategory />
        </Row>
      </div>
    </header>
  );
};

export default BasicHeader;
