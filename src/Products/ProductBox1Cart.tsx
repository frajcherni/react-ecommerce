import React, { useState, useEffect } from 'react';
import { Input, InputGroup } from 'reactstrap';
import Btn from '../Btn';
import VariationModal from './VariationModal';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

interface ProductBox1CartProps {
  productObj: {
    id: string;
    stock_status: string;
    type?: string;
    quantity: number;
    attributes?: any[];
    variations?: any[];
  };
}

const ProductBox1Cart: React.FC<ProductBox1CartProps> = ({ productObj }) => {
  // Mock cart data (replacing CartContext)
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const [variationModal, setVariationModal] = useState('');
  const [productQty, setProductQty] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleIncDec = (
    qty: number,
    product: any,
    currentQty: number,
    setQty: (qty: number) => void,
    setOpen: (open: boolean) => void,
    variant: any = null
  ) => {
    const newQty = currentQty + qty;
    if (newQty < 0) return;

    const stockLimit = variant ? variant.quantity : product.quantity;
    if (newQty > stockLimit) return;

    setQty(newQty);
    setOpen(newQty >= 1);

    setCartProducts((prev) => {
      const existing = prev.find((item) => item.product_id === product.id && (!variant || item.variation_id === variant.id));
      if (existing) {
        if (newQty === 0) {
          return prev.filter((item) => item.product_id !== product.id || (variant && item.variation_id !== variant.id));
        }
        return prev.map((item) =>
          item.product_id === product.id && (!variant || item.variation_id === variant.id)
            ? { ...item, quantity: newQty }
            : item
        );
      }
      if (newQty > 0) {
        return [
          ...prev,
          {
            product_id: product.id,
            quantity: newQty,
            product,
            variation_id: variant?.id,
            variation: variant,
          },
        ];
      }
      return prev;
    });
  };

  useEffect(() => {
    const foundProduct = cartProducts.find((elem) => elem.product_id === productObj.id);
    if (foundProduct) {
      setIsOpen(true);
      setProductQty(foundProduct.quantity);
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
            if (productObj?.stock_status === 'in_stock') {
              if (productObj?.type === 'classified') {
                setVariationModal(productObj?.id);
              } else {
                handleIncDec(1, productObj, productQty, setProductQty, setIsOpen);
              }
            }
          }}
        >
          {productObj?.stock_status === 'in_stock' ? (
            <>
              Add
              <span className='add-icon'>
                <RiAddLine />
              </span>
            </>
          ) : (
            'Sold Out'
          )}
        </Btn>
        <div className={`cart_qty qty-box ${isOpen && productQty >= 1 ? 'open' : ''}`}>
          <InputGroup>
            <Btn
              type='button'
              className='qty-left-minus'
              onClick={() => handleIncDec(-1, productObj, productQty, setProductQty, setIsOpen)}
            >
              <RiSubtractLine />
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
              onClick={() => handleIncDec(1, productObj, productQty, setProductQty, setIsOpen)}
            >
              <RiAddLine />
            </Btn>
          </InputGroup>
        </div>
      </div>
      <VariationModal setVariationModal={setVariationModal} variationModal={variationModal} productObj={productObj} />
    </>
  );
};

export default ProductBox1Cart;
