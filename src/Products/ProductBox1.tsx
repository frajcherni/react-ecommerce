import React from 'react';
import { Link } from 'react-router-dom';
import ProductBoxAction from './ProductBoxAction';
import ProductBox1Cart from './ProductBox1Cart';
import ProductBox1Rating from './ProductBox1Rating';
import ProductBagde from './ProductBagde';
import { ModifyString } from './ModifyString';

interface ProductBox1Props {
  imgUrl: string;
  productDetail: any;
  isClose?: boolean;
  addAction?: boolean;
  classObj?: {
    productBoxClass?: string;
  };
  setWishlistState?: React.Dispatch<React.SetStateAction<any[]>>;
}

const ProductBox1: React.FC<ProductBox1Props> = ({ 
  imgUrl, 
  productDetail, 
  isClose, 
  addAction = true, 
  classObj, 
  setWishlistState 
}) => {
  const placeHolderImage = '/images/placeholder-image.jpg';

  const handelDelete = (currObj: any) => {
    if (setWishlistState) {
      setWishlistState((prev) => prev.filter((elem) => elem.id !== currObj?.id));
    }
  };

  return (
    <div className={`product-box ${classObj?.productBoxClass || ''}`}>
      <ProductBagde productDetail={productDetail} />
      <div className='product-image'>
        <Link to={`/product/${productDetail?.slug}`}>
          <img 
            src={imgUrl || placeHolderImage} 
            className='img-fluid' 
            alt={productDetail.name} 
          />
        </Link>
        <ProductBoxAction productObj={productDetail} listClass='product-option' />
      </div>
      <div className='product-detail'>
        <Link to={`/product/${productDetail?.slug}`}>
          <h6 className='name'>{productDetail.name}</h6>
          <p dangerouslySetInnerHTML={{ __html: productDetail?.short_description }} />
        </Link>
        {productDetail?.unit && <h6 className='unit mt-1'>{productDetail?.unit}</h6>}
        <h5 className='sold text-content'>
          <span className='theme-color price'>${productDetail?.sale_price}</span>
          {productDetail?.price && <del>${productDetail?.price}</del>}
        </h5>

        <div className='product-rating mt-sm-2 mt-1'>
          <ProductBox1Rating totalRating={productDetail?.rating_count || 0} />
          <h6 className='theme-color'>{ModifyString(productDetail.stock_status, false, '_')}</h6>
        </div>
        {addAction && <ProductBox1Cart productObj={productDetail} />}
      </div>
    </div>
  );
};

export default ProductBox1;