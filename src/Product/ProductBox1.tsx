import React from 'react';
import ProductBoxAction from './ProductBoxAction';
import ProductBox1Cart from './ProductBox1Cart';
// import ProductBox1Rating from './ProductBox1Rating';      <ProductBox1Rating totalRating={productDetail?.rating_count || 0} />


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
      <div className='product-image'>
        <a href={`/product/${productDetail?.slug}`}>
          <img 
            src={imgUrl || placeHolderImage} 
            className='img-fluid' 
            alt={productDetail.title} 
          />
        </a>
        <ProductBoxAction productObj={productDetail} listClass='product-option' />
      </div>
      <div className='product-detail'>
        <a href={`/product/${productDetail?.slug}`}>
          <h6 className='name'>{productDetail.name}</h6>
          <p dangerouslySetInnerHTML={{ __html: productDetail?.short_description }} />
        </a>
        {productDetail?.unit && <h6 className='unit mt-1'>{productDetail?.unit}</h6>}
        <h5 className='sold text-content'>
          <span className='theme-color price'>${productDetail?.sale_price}</span>
          {productDetail?.price && <del>${productDetail?.price}</del>}
        </h5>

        <div className='product-rating mt-sm-2 mt-1'>
          <h6 className='theme-color'>{productDetail.stock_status}</h6>
        </div>
        {addAction && <ProductBox1Cart productObj={productDetail} />}
      </div>
    </div>
  );
};

export default ProductBox1;