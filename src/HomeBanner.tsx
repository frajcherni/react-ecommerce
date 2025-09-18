import React from 'react';
import Slider from 'react-slick';
import { themeSec2BannerSlider } from '../src/SliderSettings';
import WrapperComponent from './WrapperComponent';
import OfferBanner from '../src/OffreBanner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface BannerData {
  status: boolean;
  image_url: string;
  redirect_link?: {
    link_type: string;
    link: string;
  };
  [key: string]: any;
}

interface HomeBannerProps {
  bannersData: BannerData[];
}

const HomeBanner: React.FC<HomeBannerProps> = ({ bannersData }) => {
  const banners = bannersData.filter((elem) => elem.status === true);

  return (
    <WrapperComponent classes={{ sectionClass: 'banner-section ratio_60' }} noRowCol={true}>
      <div className='banner-slider'>
        <Slider {...themeSec2BannerSlider}>
          {banners.map((elem, i) => (
            <OfferBanner
              classes={{ customHoverClass: 'banner-contain hover-effect' }}
              imgUrl={elem?.image_url}
              key={i}
              elem={elem}
            />
          ))}
        </Slider>
      </div>
    </WrapperComponent>
  );
};

export default HomeBanner;