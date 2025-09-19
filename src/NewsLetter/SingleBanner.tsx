import React from 'react';
import { Link } from 'react-router-dom';

interface SingleBannerProps {
  classes?: {
    sectionClass?: string;
  };
  image_url?: string;
  height?: number;
  width?: number;
  dataAPI?: {
    image_url: string;
    redirect_link?: {
      link_type: 'external_url' | 'collection' | 'product';
      link: string;
    };
  };
}

const SingleBanner: React.FC<SingleBannerProps> = ({ classes = {}, image_url, height, width, dataAPI }) => {
  const i18Lang = 'en'; // Hardcoded language
  // Mock product data to simulate filteredProduct
  const filteredProduct = [
    { id: '1', slug: 'apple' },
    { id: '2', slug: 'banana' },
    { id: '3', slug: 'milk' },
  ];

  const redirectToProduct = (productId: string) => {
    const product = filteredProduct.find((elem) => elem.id === productId);
    return 'product/' + (product?.slug || '');
  };

  return (
    <div className={classes.sectionClass || ''}>
      <div className='banner-contain hover-effect'>
        {image_url ? (
          dataAPI?.redirect_link?.link_type === 'external_url' ? (
            <a href={dataAPI.redirect_link.link || '/'} target='_blank' rel='noopener noreferrer'>
              <img src={image_url} className='img-fluid' alt='Banner' height={height} width={width} />
            </a>
          ) : dataAPI?.redirect_link?.link_type === 'collection' ? (
            <Link to={`/${i18Lang}/collections?category=${dataAPI.redirect_link.link}`}>
              <img src={image_url} className='img-fluid w-100' alt='Banner' height={height} width={width} />
            </Link>
          ) : dataAPI?.redirect_link?.link_type === 'product' ? (
            <Link to={`/${i18Lang}/${redirectToProduct(dataAPI.redirect_link.link)}`}>
              <img src={image_url} className='img-fluid' alt='Banner' height={height} width={width} />
            </Link>
          ) : (
            <img src={image_url} className='img-fluid' alt='Banner' height={height} width={width} />
          )
        ) : null}
      </div>
    </div>
  );
};

export default SingleBanner;