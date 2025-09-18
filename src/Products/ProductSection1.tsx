import React, { useMemo } from 'react';
import { Col, Row } from 'reactstrap';
import Slider from 'react-slick';
import CustomHeading from './CustomHeading';
import ProductBox1 from './ProductBox1';
import { productSliderOption } from '../SliderSettings';

interface ProductSection1Props {
  dataAPI: {
    title: string;
    description?: string;
    product_ids?: string[];
  };
  ProductData: any[];
  svgUrl?: string;
  noCustomClass?: boolean | string;
  customClass?: string;
  classObj?: {
    productStyle?: string;
    productBoxClass?: string;
  };
  customSliderOption?: any;
  isHeadingVisible?: boolean;
}

const ProductSection1: React.FC<ProductSection1Props> = ({
  dataAPI,
  ProductData,
  svgUrl,
  noCustomClass,
  customClass,
  classObj,
  customSliderOption = productSliderOption,
  isHeadingVisible = true,
}) => {
  const filterProduct = useMemo(() => {
    return ProductData?.filter((el) => (dataAPI?.product_ids ? dataAPI?.product_ids?.includes(el.id) : el));
  }, [ProductData, dataAPI]);

  return (
    <>
      {isHeadingVisible && (
        <CustomHeading
          title={dataAPI?.title}
          svgUrl={svgUrl}
          subTitle={dataAPI?.description}
          customClass={customClass ? customClass : noCustomClass ? '' : 'section-t-space title'}
        />
      )}
      <div className={`${classObj?.productStyle} overflow-hidden`}>
        <div className='no-arrow'>
          <Slider {...customSliderOption}>
            {filterProduct?.map((elem) => (
              <div key={elem?.id}>
                <Row className='m-0'>
                  <Col xs={12} className='px-0'>
                    <ProductBox1
                      imgUrl={elem?.product_thumbnail}
                      productDetail={{ ...elem }}
                      classObj={classObj}
                    />
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductSection1;
