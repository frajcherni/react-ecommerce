import React from 'react';
import ProductSection1 from './ProductSection1';
import WrapperComponent from './../WrapperComponent';

interface ProductWrapperProps {
  dataAPI: {
    status: boolean;
    title: string;
    product_ids?: number[];
  };
  noCustomClass?: boolean;
  noSectionClass?: boolean;
  noWrapperRowCol?: boolean;
  titleClass?: string;
  classObj?: {
    productStyle: string;
    productBoxClass?: string;
  };
  customSliderOption?: any;
  products: any[];
}

const ProductWrapper: React.FC<ProductWrapperProps> = ({ 
  dataAPI, 
  noCustomClass, 
  noSectionClass, 
  noWrapperRowCol, 
  titleClass, 
  classObj = { productStyle: 'product-modern' }, 
  customSliderOption,
  products 
}) => {
  return (
    <>
      <WrapperComponent 
        classes={{ sectionClass: noSectionClass ? '' : 'product-section-3' }} 
        noRowCol={noWrapperRowCol ? false : true}
      >
        {dataAPI?.status && (
          <ProductSection1 
            dataAPI={dataAPI} 
            ProductData={products} 
            noCustomClass={noCustomClass}
            classObj={classObj} 
            customSliderOption={customSliderOption} 
          />
        )}
      </WrapperComponent>
    </>
  );
};

export default ProductWrapper;