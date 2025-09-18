import React, { Fragment } from 'react';
import Btn from '../Btn';


interface ImageOtherAttributesProps {
  setVariant: (variations: any[], value: any) => void;
  productState: {
    attributeValues: string[];
    variantIds: string[];
    product: { variations: any[] };
  };
  elem: {
    style?: string;
    attribute_values: { id: string; value: string; variation_image?: { original_url: string } }[];
  };
  soldOutAttributesIds: string[];
}

const ImageOtherAttributes: React.FC<ImageOtherAttributesProps> = ({
  setVariant,
  productState,
  elem,
  soldOutAttributesIds,
}) => {
  return (
    <ul className={`select-package ${elem?.style ?? ''}`}>
      {elem?.attribute_values?.map((item, index) => (
        <Fragment key={index}>
          {productState?.attributeValues?.includes(item?.id) && (
            <li
              className={`${productState?.variantIds?.includes(item?.id) ? 'active' : ''} ${
                soldOutAttributesIds?.includes(item.id) ? 'disabled' : ''
              }`}
              title={item?.value}
            >
              {elem?.style === 'image' ? (
                <img
                  src={item?.variation_image ? item?.variation_image?.original_url : ""}
                  onClick={() => setVariant(productState?.product?.variations, item)}
                  height={65}
                  width={65}
                  alt='Product'
                />
              ) : (
                <Btn onClick={() => setVariant(productState?.product?.variations, item)}>{item?.value}</Btn>
              )}
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default ImageOtherAttributes;