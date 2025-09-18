import React from 'react';
import { Link } from 'react-router-dom';
import RatioImage from '../RatioImage';

interface OfferBannerProps {
  classes?: {
    customClass?: string;
    customHoverClass?: string;
    fluidClass?: string;
    sectionClass?: string;
  };
  imgUrl: string;
  ratioImage?: boolean;
  customRatioClass?: string;
  dataAPI: {
    image_url: string;
    redirect_link?: {
      link_type: 'external_url' | 'collection' | 'product';
      link: string;
    };
  };
  height?: number;
  width?: number;
}

const OfferBanner: React.FC<OfferBannerProps> = ({
  classes = {},
  imgUrl,
  ratioImage = false,
  customRatioClass = '',
  dataAPI,
  height,
  width,
}) => {
  const i18Lang = 'en'; // Hardcoded to match App.tsx
  const redirectToProduct = (productId: string | number) => {
    return `product/${productId}`;
  };

  const imageProps = {
    src: imgUrl,
    className: `bg-img ${customRatioClass}`,
    alt: 'banner',
    style: { height: height ? `${height}px` : 'auto', width: width ? `${width}px` : '100%' },
  };

  return (
    <div className={`${classes.customClass ? classes.customClass : ''} ${classes.fluidClass ? classes.fluidClass : ''}`}>
      {dataAPI?.redirect_link?.link_type === 'external_url' ? (
        <a href={dataAPI.redirect_link.link || '/'} target='_blank' rel='noopener noreferrer'>
          <div className={`${classes.customHoverClass ? classes.customHoverClass : 'home-contain hover-effect'}`}>
            {ratioImage ? (
              <RatioImage {...imageProps} />
            ) : (
              <img
                src={imgUrl}
                className={`img-fluid ${customRatioClass}`}
                alt='banner'
                style={{ height: height ? `${height}px` : 'auto', width: width ? `${width}px` : '100%', objectFit: 'cover' }}
              />
            )}
          </div>
        </a>
      ) : dataAPI?.redirect_link?.link_type === 'collection' ? (
        <Link to={`/${i18Lang}/collections?category=${dataAPI.redirect_link.link}` || '/'}>
          <div className={`${classes.customHoverClass ? classes.customHoverClass : 'home-contain hover-effect'}`}>
            {ratioImage ? (
              <RatioImage {...imageProps} />
            ) : (
              <img
                src={imgUrl}
                className={`img-fluid ${customRatioClass}`}
                alt='banner'
                style={{ height: height ? `${height}px` : 'auto', width: width ? `${width}px` : '100%', objectFit: 'cover' }}
              />
            )}
          </div>
        </Link>
      ) : dataAPI?.redirect_link?.link_type === 'product' ? (
        <Link to={`/${i18Lang}/${redirectToProduct(dataAPI.redirect_link.link)}` || '/'}>
          <div className={`${classes.customHoverClass ? classes.customHoverClass : 'home-contain hover-effect'}`}>
            {ratioImage ? (
              <RatioImage {...imageProps} />
            ) : (
              <img
                src={imgUrl}
                className={`img-fluid ${customRatioClass}`}
                alt='banner'
                style={{ height: height ? `${height}px` : 'auto', width: width ? `${width}px` : '100%', objectFit: 'cover' }}
              />
            )}
          </div>
        </Link>
      ) : (
        <div className={`${classes.customHoverClass ? classes.customHoverClass : 'home-contain hover-effect'}`}>
          {ratioImage ? (
            <RatioImage {...imageProps} />
          ) : (
            <img
              src={imgUrl}
              className={`img-fluid ${customRatioClass}`}
              alt='banner'
              style={{ height: height ? `${height}px` : 'auto', width: width ? `${width}px` : '100%', objectFit: 'cover' }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default OfferBanner;