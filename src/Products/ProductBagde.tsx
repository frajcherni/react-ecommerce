import React from 'react';

interface ProductBagdeProps {
  productDetail: {
    is_sale_enable?: boolean;
    is_new_enable?: boolean;
    discount?: number;
  };
}

const ProductBagde: React.FC<ProductBagdeProps> = ({ productDetail }) => {
  return (
    <div className='badge-box'>
      {productDetail?.is_sale_enable && (
        <span className='label label-theme'>{productDetail.discount}% Off</span>
      )}
      {productDetail?.is_new_enable && <span className='label label-black'>New</span>}
    </div>
  );
};

export default ProductBagde;
