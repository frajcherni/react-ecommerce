import React, { useState, useEffect } from 'react';
import { Input, InputGroup } from 'reactstrap';
import Btn from '../Btn';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

interface VariationModalQtyProps {
  cloneVariation: {
    product: {
      id: string;
      quantity: number;
      stock_status: string;
    };
    selectedVariation?: {
      quantity: number;
      stock_status: string;
    };
    productQty: number;
  };
  setCloneVariation: (value: any) => void;
}

const VariationModalQty: React.FC<VariationModalQtyProps> = ({ cloneVariation, setCloneVariation }) => {
  // Mock cart data
  const [cartProducts, setCartProducts] = useState<any[]>([]);

  const checkStockAvailable = () => {
    if (cloneVariation?.selectedVariation) {
      setCloneVariation((prevState: any) => {
        const tempSelectedVariation = { ...prevState.selectedVariation };
        tempSelectedVariation.stock_status =
          tempSelectedVariation.quantity < prevState.productQty ? 'out_of_stock' : 'in_stock';
        return {
          ...prevState,
          selectedVariation: tempSelectedVariation,
        };
      });
    } else {
      setCloneVariation((prevState: any) => {
        const tempProduct = { ...prevState.product };
        tempProduct.stock_status = tempProduct.quantity < prevState.productQty ? 'out_of_stock' : 'in_stock';
        return {
          ...prevState,
          product: tempProduct,
        };
      });
    }
  };

  const updateQuantity = (qty: number) => {
    if (1 > cloneVariation?.productQty + qty) return;

    setCloneVariation((prev: any) => ({
      ...prev,
      productQty: cloneVariation?.productQty + qty,
    }));
    checkStockAvailable();
  };

  useEffect(() => {
    const foundProduct = cartProducts.find((elem) => elem.product_id === cloneVariation?.product?.id);
    if (foundProduct) {
      setCloneVariation({ ...cloneVariation, productQty: foundProduct?.quantity });
    } else {
      setCloneVariation({ ...cloneVariation, productQty: 1 });
    }
  }, [cartProducts, cloneVariation?.product?.id]);

  return (
    <div className='qty-box cart_qty'>
      <InputGroup>
        <Btn type='button' className='btn qty-left-minus' onClick={() => updateQuantity(-1)}>
          <RiSubtractLine />
        </Btn>
        <Input
          className='form-control input-number qty-input'
          type='text'
          name='quantity'
          value={cloneVariation.productQty}
          readOnly
        />
        <Btn type='button' className='btn qty-right-plus' onClick={() => updateQuantity(1)}>
          <RiAddLine />
        </Btn>
      </InputGroup>
    </div>
  );
};

export default VariationModalQty;
