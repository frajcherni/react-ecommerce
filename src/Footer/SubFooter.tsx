import React from 'react';
import FooterSocial from './FooterSocial';

interface SubFooterProps {
  footerData: {
    copyright_content?: string;
  };
}

const SubFooter: React.FC<SubFooterProps> = ({ footerData }) => {
  return (
    <div className="sub-footer section-small-space">
      {footerData?.copyright_content && (
        <div className="reserve">
          <h6 className="text-content">{footerData.copyright_content}</h6>
        </div>
      )}
      <div className="payment">
        <img src={""} alt="payment" height={35} width={302} />
      </div>
      <FooterSocial footerData={footerData} />
    </div>
  );
};

export default SubFooter;