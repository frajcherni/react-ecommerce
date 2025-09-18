import React from 'react';
import WrapperComponent from '../WrapperComponent';
import ProductSection1 from './ProductSection1';

interface ProductWrapperProps {
  dataAPI?: {
    status: boolean;
    title: string;
    description?: string;
    product_ids?: string[] | number[];
  };
  products?: any[];
  noCustomClass?: boolean;
  noSectionClass?: boolean;
  noWrapperRowCol?: boolean;
  titleClass?: string;
  classObj?: {
    productStyle?: string;
    productBoxClass?: string;
  };
  customSliderOption?: any;
}

const ProductWrapper: React.FC<ProductWrapperProps> = ({
  dataAPI,
  products,
  noCustomClass,
  noSectionClass,
  noWrapperRowCol,
  titleClass,
  classObj = { productStyle: 'product-modern' },
  customSliderOption,
}) => {
  return (
    <WrapperComponent classes={{ sectionClass: noSectionClass ? '' : 'product-section-3' }} noRowCol={noWrapperRowCol ? false : true}>
      {dataAPI?.status && (
        <ProductSection1
          dataAPI={dataAPI}
          ProductData={products || []}
          noCustomClass={titleClass ? titleClass : noCustomClass}
          classObj={classObj}
          customSliderOption={customSliderOption}
        />
      )}
    </WrapperComponent>
  );
};

export default ProductWrapper;