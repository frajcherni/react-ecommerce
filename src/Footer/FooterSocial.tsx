import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookFill, RiInstagramLine, RiPinterestLine, RiTwitterFill } from 'react-icons/ri';

interface FooterSocialProps {
  footerData: {
    social_media_enable?: boolean;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    pinterest?: string;
  };
}

const FooterSocial: React.FC<FooterSocialProps> = ({ footerData }) => {
  const isFooterSocial =
    footerData?.social_media_enable ||
    footerData?.facebook ||
    footerData?.twitter ||
    footerData?.instagram ||
    footerData?.pinterest;

  return (
    <>
      {isFooterSocial && (
        <div className="social-link">
          <h6 className="text-content">Stay Connected :</h6>
          <ul>
            {footerData?.facebook && (
              <li>
                <a href={footerData.facebook} target="_blank" rel="noopener noreferrer">
                  <RiFacebookFill />
                </a>
              </li>
            )}
            {footerData?.twitter && (
              <li>
                <a href={footerData.twitter} target="_blank" rel="noopener noreferrer">
                  <RiTwitterFill />
                </a>
              </li>
            )}
            {footerData?.instagram && (
              <li>
                <a href={footerData.instagram} target="_blank" rel="noopener noreferrer">
                  <RiInstagramLine />
                </a>
              </li>
            )}
            {footerData?.pinterest && (
              <li>
                <a href={footerData.pinterest} target="_blank" rel="noopener noreferrer">
                  <RiPinterestLine />
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default FooterSocial;