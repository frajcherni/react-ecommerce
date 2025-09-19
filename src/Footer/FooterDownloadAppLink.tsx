import React from 'react';
import { Link } from 'react-router-dom';
import appstoreImage from '../../src/assets/images/appstore.svg';

import playstoreImage from '../../src/assets/images/playstore.svg';
interface FooterDownloadAppLinkProps {
  app_store_url?: string;
  play_store_url?: string;
}

const FooterDownloadAppLink: React.FC<FooterDownloadAppLinkProps> = ({ app_store_url, play_store_url }) => {
  return (
    <>
      {(app_store_url || play_store_url) && (
        <li className="social-app mb-0">
          <h5 className="mb-2 text-content">Download App :</h5>
          <ul>
            {play_store_url && (
              <li className="mb-0">
                <a href={play_store_url} target="_blank" rel="noopener noreferrer">
                  <img src={playstoreImage} alt="play store" height={100} width={100} />
                </a>
              </li>
            )}
            {app_store_url && (
              <li className="mb-0">
                <a href={app_store_url} target="_blank" rel="noopener noreferrer">
                  <img src={appstoreImage} alt="app store" height={100} width={100} />
                </a>
              </li>
            )}
          </ul>
        </li>
      )}
    </>
  );
};

export default FooterDownloadAppLink;