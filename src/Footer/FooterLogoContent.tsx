import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RiHomeLine, RiMailLine } from 'react-icons/ri';
import logoImage from '../../src/assets/images/logo.png';

interface FooterLogoContentProps {
  footerData: {
    footer_about?: string;
    about_address?: string;
    about_email?: string;
  };
}

const FooterLogoContent: React.FC<FooterLogoContentProps> = ({ footerData }) => {
  return (
    <Col xl={3} sm={6}>
      <div className="footer-logo">
        <div className="theme-logo">
          <Link to="/">
            <img src={logoImage} alt="Footer" height={28} width={160} />
          </Link>
        </div>
        <div className="footer-logo-contain">
          {footerData?.footer_about && <p>{footerData.footer_about}</p>}
          <ul className="address">
            {footerData?.about_address && (
              <li>
                <RiHomeLine />
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                  {footerData.about_address}
                </a>
              </li>
            )}
            {footerData?.about_email && (
              <li>
                <RiMailLine />
                <a href={`mailto:${footerData.about_email}`} target="_blank" rel="noopener noreferrer">
                  {footerData.about_email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default FooterLogoContent;