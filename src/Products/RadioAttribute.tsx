import React, { Fragment } from 'react';
import { Input, Label } from 'reactstrap';

interface RadioAttributeProps {
  elem: {
    attribute_values: { id: string; value: string; attribute_id: string }[];
  };
  soldOutAttributesIds: string[];
  productState: {
    attributeValues: string[];
    variantIds: string[];
  };
  setVariant: (variations: any[], value: any) => void;
  i: number;
}

const RadioAttribute: React.FC<RadioAttributeProps> = ({ elem, soldOutAttributesIds, productState, setVariant, i }) => {
  return (
    <div className='d-flex'>
      {elem?.attribute_values.map((value, index) => (
        <Fragment key={index}>
          {productState?.attributeValues?.includes(value?.id) ? (
            <div className={`form-check ${soldOutAttributesIds.includes(value.id) ? 'disabled' : ''}`}>
              <Input
                type='radio'
                className='form-check-input'
                id={`radio-${i}-${index}`}
                name={`radio-group-${i}`}
                value={index}
                checked={productState?.variantIds?.includes(value?.id)}
                disabled={soldOutAttributesIds.includes(value.id)}
                onChange={(e) => setVariant(productState?.product?.variations, elem?.attribute_values[e.target.value])}
              />
              <Label htmlFor={`radio-${i}-${index}`} className='form-check-label'>
                {value?.value}
              </Label>
            </div>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
};

export default RadioAttribute;
