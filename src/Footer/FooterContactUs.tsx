import React from 'react';
import { Col } from 'reactstrap';
import FooterDownloadAppLink from './FooterDownloadAppLink';
import FooterSupportEmail from './FooterSupportEmail';
import FooterSupportNumber from './FooterSupportNumber';

interface FooterContactUsProps {
  footerData: {
    support_number?: string;
    support_email?: string;
    app_store_url?: string;
    play_store_url?: string;
  };
}

const FooterContactUs: React.FC<FooterContactUsProps> = ({ footerData }) => {
  return (
    <Col xl={3} lg={4} sm={6}>
      {(footerData?.support_number || footerData?.support_email) && (
        <div className="footer-title contact-title">
          <h4>Contact Us</h4>
        </div>
      )}
      <div className="footer-contact">
        <ul>
          <FooterSupportNumber support_number={footerData?.support_number} />
          <FooterSupportEmail support_email={footerData?.support_email} />
        {/* <FooterDownloadAppLink app_store_url={footerData?.app_store_url} play_store_url={footerData?.play_store_url} /> */}
        </ul>
      </div>
    </Col>
  );
};

export default FooterContactUs;