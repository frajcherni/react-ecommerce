import React from 'react';
import WrapperComponent from '../WrapperComponent';
import SingleBanner from './SingleBanner';

interface OfferBannerProps {
  dataAPI?: {
    image_url: string;
    redirect_link?: {
      link_type: 'external_url' | 'collection' | 'product';
      link: string;
    };
  };
  height?: number;
  width?: number;
  classes?: {
    sectionClass?: string;
    fluidClass?: string;
    row?: string;
    col?: string;
  };
}

const OfferBanner: React.FC<OfferBannerProps> = ({ dataAPI, height, width, classes }) => {
  return (
    <WrapperComponent classes={classes}>
      <SingleBanner image_url={dataAPI?.image_url} height={height} width={width} dataAPI={dataAPI} />
    </WrapperComponent>
  );
};

export default OfferBanner;