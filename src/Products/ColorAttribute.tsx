import React, { Fragment, useState } from 'react';
import Btn from '../Btn';
import ColorTooltip from './ColorTooltip';

interface ColorAttributeProps {
  elem: {
    style: string;
    attribute_values: { id: string; value: string; hex_color: string }[];
  };
  soldOutAttributesIds: string[];
  productState: {
    variantIds: string[];
    product: { variations: any[] };
  };
  setVariant: (variations: any[], value: any) => void;
}

const ColorAttribute: React.FC<ColorAttributeProps> = ({ elem, soldOutAttributesIds, productState, setVariant }) => {
  const [tooltipOpen, setTooltipOpen] = useState<{ [key: string]: boolean }>({});

  const toggle = (target: string) => {
    setTooltipOpen((prevState) => ({ ...prevState, [target]: !prevState[target] }));
  };

  return (
    <ul className={`circle select-package ${elem?.style}`}>
      {elem?.attribute_values?.map((value, index) => (
        <Fragment key={index}>
          {productState?.attributeValues?.includes(value?.id) ? (
            <li
              className={`${soldOutAttributesIds.includes(value.id) ? 'disabled' : ''} ${
                productState?.variantIds?.includes(value.id) ? 'active' : ''
              }`}
            >
              <Btn
                id={value?.value}
                onClick={() => setVariant(productState?.product?.variations, value)}
                style={{ backgroundColor: value.hex_color }}
              />
              <ColorTooltip
                target={value?.value}
                title={value?.value}
                toggle={() => toggle(value?.value)}
                tooltipOpen={tooltipOpen[value?.value] || false}
              />
            </li>
          ) : null}
        </Fragment>
      ))}
    </ul>
  );
};

export default ColorAttribute;
