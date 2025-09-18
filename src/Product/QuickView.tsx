import React, { useState } from 'react';
import { RiEyeLine } from 'react-icons/ri';
import VariationModal from './VariationModal';

interface QuickViewProps {
  productObj: any;
}

const QuickView: React.FC<QuickViewProps> = ({ productObj }) => {
  const [variationModal, setVariationModal] = useState('');

  return (
    <>
      <li title='View' onClick={() => setVariationModal(productObj?.id)}>
        <a>
          <RiEyeLine />
        </a>
      </li>
      <VariationModal 
        setVariationModal={setVariationModal} 
        variationModal={variationModal} 
        productObj={productObj} 
      />
    </>
  );
};

export default QuickView;