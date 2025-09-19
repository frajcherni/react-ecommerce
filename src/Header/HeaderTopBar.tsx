
import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'reactstrap';
import TopbarLeft from './TopbarLeft';
import TopLanguage from './TopLanguage';
import HeaderCurrency from './HeaderCurrency';
import { useLocation } from 'react-router-dom';

const HeaderTopBar: React.FC = () => {
  const addClass = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const pathName = location.pathname;
  const isTokyoTheme = pathName.includes('/theme/tokyo');

  useEffect(() => {
    if (isTokyoTheme) {
      addClass.current?.classList.add('bg-dark');
    }
    return () => {
      addClass.current?.classList.remove('bg-dark');
    };
  }, [pathName]);

  return (
 <div
  className={`header-top${isTokyoTheme ? ' bg-dark' : ''}`}
  ref={addClass}
>
  <div className="container-fluid-lg">
    <Row className="align-items-center">
      <TopbarLeft />

      {/* Right side (Language + Currency) */}
      <Col lg="3" className="ms-auto">
        <ul className="about-list right-nav-about d-flex justify-content-end  mb-0">
          <li className="right-nav-list">
            <TopLanguage />
          </li>
          <li className="right-nav-list">
            <HeaderCurrency />
          </li>
        </ul>
      </Col>
    </Row>
  </div>
</div>

  );
};

export default HeaderTopBar;
