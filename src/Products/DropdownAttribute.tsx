import React, { useEffect, useState } from 'react';

interface DropdownAttributeProps {
  elem: {
    name: string;
    attribute_values: { id: string; value: string }[];
  };
  soldOutAttributesIds: string[];
  productState: {
    variantIds: string[];
    product: { variations: any[] };
  };
  setVariant: (variations: any[], value: any) => void;
  i: number;
}

const DropdownAttribute: React.FC<DropdownAttributeProps> = ({ elem, soldOutAttributesIds, productState, setVariant, i }) => {
  const [selectedIndex, setSelectedIndex] = useState('');

  useEffect(() => {
    const index = elem?.attribute_values?.findIndex((value) => productState?.variantIds?.includes(value.id));
    if (index !== -1) {
      setSelectedIndex(index.toString());
    }
  }, [productState?.variantIds, elem]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.value;
    setSelectedIndex(index);
    setVariant(productState?.product?.variations, elem?.attribute_values[Number(index)]);
  };

  return (
    <select
      id={`input-state-${i}`}
      className='form-control form-select'
      onChange={handleChange}
      value={selectedIndex}
    >
      <option value='' disabled>
        Choose {elem?.name}
      </option>
      {elem?.attribute_values?.map((value, index) =>
        productState?.attributeValues?.includes(value?.id) ? (
          <option key={index} value={index} disabled={soldOutAttributesIds.includes(value.id)}>
            {value?.value}
          </option>
        ) : null
      )}
    </select>
  );
};

export default DropdownAttribute;
