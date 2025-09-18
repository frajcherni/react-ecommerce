import React, { useEffect, useRef, useState } from 'react';
import { Col } from 'reactstrap';
import Slider from 'react-slick';
import { viewModalSliderOption } from './SliderSettings';

interface LeftSideModalProps {
  cloneVariation: {
    product: {
      product_galleries?: { original_url: string }[];
      name: string;
    };
  };
  productObj: any;
}

const LeftSideModal: React.FC<LeftSideModalProps> = ({ cloneVariation, productObj }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef<any>(null);
  const slider2 = useRef<any>(null);
  const { nav1, nav2 } = state;

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  return (
    <Col lg='6'>
      <div className='view-image-slider'>
        <Slider asNavFor={nav2} ref={slider1}>
          {cloneVariation?.product?.product_galleries?.map((item, i) => (
            <div className='slider-image' key={i}>
              <img
                src={item ? item.original_url : ""}
                className='img-fluid'
                alt={cloneVariation?.product?.name}
                width={500}
                height={500}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='thumbnail-slider'>
        <Slider
          {...viewModalSliderOption}
          slidesToShow={cloneVariation?.product?.product_galleries?.length - 1 || 1}
          asNavFor={nav1}
          ref={slider2}
        >
          {cloneVariation?.product?.product_galleries?.map((item, i) => (
            <div className='slider-image' key={i}>
              <div className='thumbnail-image'>
                <img
                  src={item ? item.original_url : placeHolderImage}
                  className='img-fluid'
                  alt={cloneVariation?.product?.name}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Col>
  );
};

export default LeftSideModal;
