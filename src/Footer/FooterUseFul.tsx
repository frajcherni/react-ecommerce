import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

interface FooterUseFulProps {
  footerMenu: string;
  setFooterMenu: (value: string) => void;
  usefulLinks: Array<{ label: string; link: string }>;
}

const FooterUseFul: React.FC<FooterUseFulProps> = ({ footerMenu, setFooterMenu, usefulLinks }) => {
  return (
    <Col xl={2} lg={3} md={4} sm={6}>
      <div
        className={`footer-title ${footerMenu === 'usefull' ? 'show' : ''}`}
        onClick={() => setFooterMenu(footerMenu !== 'usefull' ? 'usefull' : '')}
      >
        <h4>Useful Links</h4>
      </div>
      <div className="footer-contain">
        <ul>
          {usefulLinks?.map((elem, i) => (
            <li key={i}>
              <Link to={`/en/${elem.link}`} className="text-content text-capitalize">
                {elem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );
};

export default FooterUseFul;