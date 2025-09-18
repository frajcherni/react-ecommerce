import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { Col, Row } from 'reactstrap';
import WrapperComponent from './WrapperComponent';
import CustomHeading from '../CustomHeading';
import Btn from '../Btn';
import { madridCategorySlider } from '../SliderSettings';
import { RiArrowRightSLine } from 'react-icons/ri';

interface Category {
  id: number;
  slug: string;
  name: string;
  products_count: number;
  category_image?: {
    original_url: string;
  };
}

interface ShopCategoryProps {
  dataAPI: {
    title: string;
    category_ids?: number[];
  };
  categories: Category[];
}

const ShopCategory: React.FC<ShopCategoryProps> = ({ dataAPI, categories }) => {
  const placeHolderImage = '/images/placeholder-image.jpg';

  const categoryData = useMemo(() => {
    if (dataAPI?.category_ids && dataAPI.category_ids.length > 0) {
      return categories.filter((category) => 
        dataAPI.category_ids?.includes(category.id)
      );
    }
    return categories;
  }, [categories, dataAPI]);

  return (
    <WrapperComponent 
      classes={{ sectionClass: 'category-section-3' }} 
      noRowCol={false} // Changed to false to use Row/Col structure
    >
      <CustomHeading title={dataAPI?.title} customClass={'title'} />
      <Row>
        <Col xs={12}>
          <div className='category-slider-1 arrow-slider'>
            <Slider {...madridCategorySlider}>
              {categoryData?.map((elem) => (
                <div key={elem.id}>
                  <div className='category-box-list'>
                    <a href={`/collections?category=${elem?.slug}`} className='category-name'>
                      <h4>{elem?.name}</h4>
                      <h6>
                        {elem?.products_count} Items
                      </h6>
                    </a>
                    <div className='category-box-view'>
                      <a href={`/collections?category=${elem?.slug}`}>
                        <img 
                          src={elem?.category_image?.original_url || placeHolderImage} 
                          className='img-fluid' 
                          alt='Shop Category' 
                          height={133} 
                          width={133} 
                        />
                      </a>
                      <Btn className='btn shop-button'>
                        <span>Shop Now</span>
                        <RiArrowRightSLine />
                      </Btn>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </WrapperComponent>
  );
};

export default ShopCategory;