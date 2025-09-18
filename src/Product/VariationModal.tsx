import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import CustomModal from './CustomModal';
 // import LeftSideModal from './LeftSideModal';         <LeftSideModal cloneVariation={cloneVariation} productObj={productObj} />

// import RightVariationModal from './RightVariationModal';   <RightVariationModal cloneVariation={cloneVariation} />

// import VariationModalQty from './VariationModalQty';   <VariationModalQty cloneVariation={cloneVariation}  setCloneVariation={setCloneVariation}  />
// import VariationAddToCart from './VariationAddToCart';     <VariationAddToCart  cloneVariation={cloneVariation} setVariationModal={setVariationModal} 
// import ProductAttribute from './ProductAttribute';     <ProductAttribute  productState={cloneVariation}  setProductState={setCloneVariation}  />

interface VariationModalProps {
  productObj: any;
  variationModal: string;
  setVariationModal: React.Dispatch<React.SetStateAction<string>>;
}

const VariationModal: React.FC<VariationModalProps> = ({ productObj, variationModal, setVariationModal }) => {
  const [cloneVariation, setCloneVariation] = useState({ 
    product: productObj, 
    attributeValues: [], 
    productQty: 1, 
    selectedVariation: '', 
    variantIds: [] 
  });

  return (
    <CustomModal 
      modal={productObj?.id == variationModal} 
      setModal={setVariationModal} 
      classes={{ modalClass: 'view-modal modal-lg theme-modal', modalHeaderClass: 'p-0' }}
    >
      <Row className='g-sm-4 g-2'>
        <Col lg='6'>
          <div className='right-sidebar-modal'>
          
            <div className='modal-bottom-cart'>
            
           
            </div>
          </div>
        </Col>
      </Row>
    </CustomModal>
  );
};

export default VariationModal;