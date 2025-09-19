import React from 'react';
import { Col, Row } from 'reactstrap';
import WrapperComponent from './TwoBannerWrapperComponent';
import OfferBanner from './OffreBanner';

interface TwoBannerProps {
  dataAPI: {
    banner_1?: {
      image_url: string;
      redirect_link?: {
        link_type: 'external_url' | 'collection' | 'product';
        link: string;
      };
    };
    banner_2?: {
      image_url: string;
      redirect_link?: {
        link_type: 'external_url' | 'collection' | 'product';
        link: string;
      };
    };
  };
}

const TwoBanner: React.FC<TwoBannerProps> = ({ dataAPI }) => {
  return (
        <WrapperComponent classes={{ sectionClass: 'banner-section' }} noRowCol={true}>
      <Row className='gy-xl-0 gy-3'>
        <Col xl={6}>
          <OfferBanner classes={{ customHoverClass: 'banner-contain hover-effect' }}  imgUrl={dataAPI?.banner_1?.image_url || '/images/placeholder.jpg'}
            dataAPI={dataAPI?.banner_1 || { image_url: '/images/placeholder.jpg' }} />
        </Col>
        <Col xl={6}>
          <OfferBanner classes={{ customHoverClass: 'banner-contain hover-effect' }} imgUrl={dataAPI?.banner_2?.image_url || '/images/placeholder.jpg'} dataAPI={dataAPI?.banner_2 || { image_url: '/images/placeholder.jpg' }} />
        </Col>
      </Row>
    </WrapperComponent>
  );
};

export default TwoBanner;