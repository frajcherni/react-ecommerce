import React from 'react';
import { Col, Row } from 'reactstrap';
import WrapperComponent from '../WrapperComponent';
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
      <Row className='g-4'>
        <Col xl={6} md={6}>
          <OfferBanner
            classes={{ customHoverClass: 'banner-contain hover-effect', fluidClass: 'container' }}
            imgUrl={dataAPI?.banner_1?.image_url || '/images/placeholder.jpg'}
            dataAPI={dataAPI?.banner_1 || { image_url: '/images/placeholder.jpg' }}
            ratioImage={true}
            height={300}
            width={750}
          />
        </Col>
        <Col xl={6} md={6}>
          <OfferBanner
            classes={{ customHoverClass: 'banner-contain hover-effect', fluidClass: 'container' }}
            imgUrl={dataAPI?.banner_2?.image_url || '/images/placeholder.jpg'}
            dataAPI={dataAPI?.banner_2 || { image_url: '/images/placeholder.jpg' }}
            ratioImage={true}
            height={300}
            width={750}
          />
        </Col>
      </Row>
    </WrapperComponent>
  );
};

export default TwoBanner;