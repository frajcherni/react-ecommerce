import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

interface FooterQuickPageProps {
  footerMenu: string;
  setFooterMenu: (value: string) => void;
  helpCenter: Array<{ label: string; link: string }>;
}

const FooterQuickPage: React.FC<FooterQuickPageProps> = ({ footerMenu, setFooterMenu, helpCenter }) => {
  return (
    <Col xl={2} sm={3}>
      <div
        className={`footer-title ${footerMenu === 'pages' ? 'show' : ''}`}
        onClick={() => setFooterMenu(footerMenu !== 'pages' ? 'pages' : '')}
      >
        <h4>Quick Pages</h4>
      </div>
      <div className="footer-contain">
        <ul>
          {helpCenter?.map((elem, i) => (
            <li key={i}>
              <Link to={`/en/${elem.link}`} className="text-content">
                {elem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );
};

export default FooterQuickPage;