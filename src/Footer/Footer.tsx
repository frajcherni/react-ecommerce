import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import FooterCategory from './FooterCategory';
import FooterUseFul from './FooterUseFul';
import FooterQuickPage from './FooterQuickPage';
import SubFooter from './SubFooter';
import FooterContactUs from './FooterContactUs';
import FooterLogoContent from './FooterLogoContent';

interface MainFooterProps {
  footerData: {
    copyright_content?: string;
    footer_about?: string;
    about_address?: string;
    about_email?: string;
    support_number?: string;
    support_email?: string;
    app_store_url?: string;
    play_store_url?: string;
    social_media_enable?: boolean;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    pinterest?: string;
    useful_link?: Array<{ label: string; link: string }>;
    help_center?: Array<{ label: string; link: string }>;
    footer_categories?: number[];
    footer_style?: 'dark_mode' | 'light_mode';
  };
  categories: Array<{ id: number; name: string; slug: string }>;
}

const MainFooter: React.FC<MainFooterProps> = ({ footerData, categories }) => {
  const [footerMenu, setFooterMenu] = useState('');
  const footerColorClass = footerData?.footer_style === 'dark_mode' ? 'footer-section-2 footer-color-2' : '';

  return (
    <footer className={`section-t-space mt-5 footer-section ${footerColorClass}`}>
      <Container>
        <div className="main-footer section-b-space">
          <Row className="g-md-4 g-3">
            <FooterLogoContent footerData={footerData} />
            {footerData?.footer_categories && footerData.footer_categories.length > 0 && (
              <FooterCategory
                footerMenu={footerMenu}
                setFooterMenu={setFooterMenu}
                categories={categories}
                footerCategories={footerData.footer_categories}
              />
            )}
            {footerData?.useful_link && footerData.useful_link.length > 0 && (
              <FooterUseFul footerMenu={footerMenu} setFooterMenu={setFooterMenu} usefulLinks={footerData.useful_link} />
            )}
            <FooterQuickPage footerMenu={footerMenu} setFooterMenu={setFooterMenu} helpCenter={footerData?.help_center || []} />
            <FooterContactUs footerData={footerData} />
          </Row>
        </div>
        <SubFooter footerData={footerData} />
      </Container>
    </footer>

  );
};

export default MainFooter;