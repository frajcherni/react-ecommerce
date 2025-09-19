import React from 'react';
import { FiMail } from 'react-icons/fi';

interface FooterSupportEmailProps {
  support_email?: string;
}

const FooterSupportEmail: React.FC<FooterSupportEmailProps> = ({ support_email }) => {
  return (
    <>
      {support_email && (
        <li>
          <div className="footer-number">
            <FiMail />
            <div className="contact-number">
              <h6 className="text-content">Email Address :</h6>
              <h5>{support_email}</h5>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default FooterSupportEmail;