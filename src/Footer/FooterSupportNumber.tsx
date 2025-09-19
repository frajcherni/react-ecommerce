import React from 'react';
import { FiPhone } from 'react-icons/fi';

interface FooterSupportNumberProps {
  support_number?: string;
}

const FooterSupportNumber: React.FC<FooterSupportNumberProps> = ({ support_number }) => {
  return (
    <>
      {support_number && (
        <li>
          <div className="footer-number">
            <FiPhone />
            <div className="contact-number">
              <h6 className="text-content">Hotline 24/7 :</h6>
              <h5>{support_number}</h5>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default FooterSupportNumber;