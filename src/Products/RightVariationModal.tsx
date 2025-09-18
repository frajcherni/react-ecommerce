import React from 'react';
import { Label } from 'reactstrap';
import ProductBox1Rating from './ProductBox1Rating';
import TextLimit from './TextLimit';
import { ModifyString } from './ModifyString';

interface RightVariationModalProps {
  cloneVariation: {
    product: {
      name: string;
      sale_price: number;
      price: number;
      discount?: number;
      rating_count: number;
      reviews_count: number;
      short_description: string;
      sku: string;
      stock_status: string;
      quantity: number;
    };
    selectedVariation?: {
      name: string;
      sale_price: number;
      price: number;
      discount?: number;
      sku: string;
      stock_status: string;
      quantity: number;
    };
  };
}

const RightVariationModal: React.FC<RightVariationModalProps> = ({ cloneVariation }) => {
  // Mock currency conversion and translation
  const convertCurrency = (price: number) => `$${price.toFixed(2)}`;
  const t = (key: string) => key; // Mock translation function

  return (
    <>
      <h4 className='title-name'>
        {cloneVariation?.selectedVariation ? cloneVariation?.selectedVariation?.name : cloneVariation?.product?.name}
      </h4>
      <h4 className='price'>
        {cloneVariation?.selectedVariation
          ? convertCurrency(cloneVariation?.selectedVariation?.sale_price)
          : convertCurrency(cloneVariation?.product?.sale_price)}
        <del>
          {cloneVariation?.selectedVariation
            ? convertCurrency(cloneVariation?.selectedVariation?.price)
            : convertCurrency(cloneVariation?.product?.price)}
        </del>
        <Label className='modal-label mb-0'>
          {cloneVariation?.selectedVariation
            ? cloneVariation?.selectedVariation?.discount
            : cloneVariation?.product?.discount}
          % {t('Off')}
        </Label>
      </h4>
      <div className='product-rating'>
        <ProductBox1Rating totalRating={cloneVariation?.product?.rating_count} />
        <div className='fs-14 ms-2'>
          {cloneVariation?.product?.reviews_count} {t('Reviews')}
        </div>
      </div>
      <div className='product-detail'>
        <h4>{t('ProductDetails')}:</h4>
        <div className='mt-2'>
          <TextLimit value={cloneVariation?.product?.short_description} maxLength={200} tag='p' />
        </div>
      </div>
      <div className='pickup-box'>
        <div className='product-title'>
          <h4>{t('ProductInformation')}</h4>
        </div>
        <div className='product-info'>
          <ul className='product-info-list'>
            <li>
              {t('SKU')} :{' '}
              {cloneVariation?.selectedVariation?.sku ?? cloneVariation?.product?.sku}
            </li>
            <li>
              {t('StockStatus')} :
              {cloneVariation?.selectedVariation?.stock_status
                ? ModifyString(cloneVariation?.selectedVariation?.stock_status, false, '_')
                : ModifyString(cloneVariation?.product?.stock_status, false, '_')}
            </li>
            <li>
              {t('Quantity')} :{' '}
              {cloneVariation?.selectedVariation?.quantity ?? cloneVariation?.product?.quantity}{' '}
              {t('ItemsLeft')}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightVariationModal;
