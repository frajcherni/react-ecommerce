import React from 'react';
import RatioImage from './RatioImage';

interface OfferBannerProps {
  classes?: {
    customClass?: string;
    customHoverClass?: string;
  };
  imgUrl: string;
  ratioImage?: boolean;
  customRatioClass?: string;
  elem?: any;
}

const OfferBanner: React.FC<OfferBannerProps> = ({ 
  classes = {}, 
  imgUrl, 
  ratioImage, 
  customRatioClass = '', 
  elem 
}) => {
  const renderBannerContent = () => (
    <div className={`${classes.customHoverClass ? classes.customHoverClass : 'home-contain hover-effect'}`}>
      {ratioImage ? (
        <RatioImage src={imgUrl} className={`bg-img ${customRatioClass}`} alt='banner' />
      ) : (
        <img src={imgUrl} className={`img-fluid ${customRatioClass}`} alt='banner' />
      )}
    </div>
  );

  return (
    <div className={`${classes.customClass ? classes.customClass : ''}`}>
      {elem?.redirect_link?.link_type === 'external_url' ? (
        <a href={elem?.redirect_link?.link || '/'} target='_blank' rel='noopener noreferrer'>
          {renderBannerContent()}
        </a>
      ) : elem?.redirect_link?.link_type === 'collection' ? (
        <a href={`/collections?category=${elem?.redirect_link?.link}` || '/'}>
          {renderBannerContent()}
        </a>
      ) : elem?.redirect_link?.link_type === 'product' ? (
        <a href={`/product/${elem?.redirect_link?.link}` || '/'}>
          {renderBannerContent()}
        </a>
      ) : (
        renderBannerContent()
      )}
    </div>
  );
};

export default OfferBanner;