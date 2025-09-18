import React from 'react';
import QuickView from './QuickView';
import AddToWishlist from './AddToWishlist';

interface ProductBoxActionProps {
  productObj: any;
  listClass: string;
}

const ProductBoxAction: React.FC<ProductBoxActionProps> = ({ productObj, listClass }) => {
  return (
    <ul className={listClass}>
      <QuickView productObj={productObj} />
      <AddToWishlist productObj={productObj} />
    </ul>
  );
};

export default ProductBoxAction;
