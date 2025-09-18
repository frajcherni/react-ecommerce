import CartContext from '../Cart/CartContext';
import Btn from '../Btn';

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Input, InputGroup } from 'reactstrap';

import VariationModal from './VariationModal';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

interface ProductBox1CartProps {
  productObj: any;
}

const ProductBox1Cart: React.FC<ProductBox1CartProps> = ({ productObj }) => {
  const { cartProducts, handleIncDec } = useContext(CartContext);
  const [variationModal, setVariationModal] = useState('');
  const [productQty, setProductQty] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const getSelectedVariant = useMemo(() => {
    return cartProducts.find((elem) => elem.product_id === productObj.id);
  }, [cartProducts, productObj.id]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      const foundProduct = cartProducts.find((elem) => elem.product_id === productObj.id);
      if (foundProduct) {
        setIsOpen(true);
        setProductQty(foundProduct.quantity);
      } else {
        setProductQty(0);
        setIsOpen(false);
      }
    } else {
      setProductQty(0);
      setIsOpen(false);
    }
  }, [cartProducts, productObj.id]);

  return (
    <>
      <div className='add-to-cart-box'>
        <Btn
          className='btn-add-cart addcart-button'
          disabled={productObj?.stock_status !== 'in_stock'}
          onClick={() => {
            productObj?.stock_status === 'in_stock' && productObj?.type === 'classified' 
              ? setVariationModal(productObj?.id) 
              : handleIncDec(1, productObj, productQty, setProductQty, setIsOpen, null);
          }}
        >
          {productObj?.stock_status === 'in_stock' ? (
            <>
              Add
              <span className='add-icon'>
                <RiAddLine/>
              </span>
            </>
          ) : (
            'SoldOut'
          )}
        </Btn>
        <div className={`cart_qty qty-box ${isOpen && productQty >= 1 ? 'open' : ''}`}>
          <InputGroup>
            <Btn 
              type='button' 
              className='qty-left-minus' 
              onClick={() => handleIncDec(-1, productObj, productQty, setProductQty, setIsOpen, getSelectedVariant || null)}
            >
              <RiSubtractLine/>
            </Btn>
            <Input 
              className='form-control input-number qty-input' 
              type='text' 
              name='quantity' 
              value={productQty} 
              readOnly 
            />
            <Btn 
              type='button' 
              className='qty-right-plus' 
              onClick={() => handleIncDec(1, productObj, productQty, setProductQty, setIsOpen, getSelectedVariant || null)}
            >
              <RiAddLine/>
            </Btn>
          </InputGroup>
        </div>
      </div>
      <VariationModal 
        setVariationModal={setVariationModal} 
        variationModal={variationModal} 
        productObj={productObj} 
      />
    </>
  );
};

export default ProductBox1Cart;