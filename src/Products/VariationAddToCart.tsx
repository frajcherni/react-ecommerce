import React, { useState } from 'react';
import Btn from '../Btn';
import { RiShoppingCartLine } from 'react-icons/ri';

interface VariationAddToCartProps {
  cloneVariation: {
    product: {
      id: string;
      stock_status: string;
    };
    selectedVariation?: {
      stock_status: string;
      id: string;
    };
    productQty: number;
  };
  setVariationModal: (value: string) => void;
}

const VariationAddToCart: React.FC<VariationAddToCartProps> = ({ cloneVariation, setVariationModal }) => {
  // Mock cart data and handler
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const t = (key: string) => key; // Mock translation

  const productInStock = cloneVariation?.selectedVariation
    ? cloneVariation?.selectedVariation?.stock_status === 'in_stock'
    : cloneVariation?.product?.stock_status === 'in_stock';

  const handleIncDec = (
    qty: number,
    product: any,
    updateState = false,
    setQty: any = null,
    setOpen: any = null,
    variant: any = null
  ) => {
    const newQty = (variant ? variant.quantity : product.quantity) + qty;
    if (newQty < 0) return;

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

  const addToCart = (allProduct: any) => {
    if (cloneVariation?.selectedVariation) {
      handleIncDec(cloneVariation.productQty, allProduct, false, false, false, cloneVariation.selectedVariation);
      setVariationModal('');
    } else {
      handleIncDec(cloneVariation.productQty, allProduct);
      setVariationModal('');
    }
  };

  return (
    <div className='addtocart_btn'>
      <Btn
        className='btn btn-md fw-bold icon text-white theme-bg-color view-button text-uppercase'
        disabled={!productInStock}
        onClick={() => addToCart(cloneVariation.product)}
      >
        <RiShoppingCartLine />
        <span>{productInStock ? t('AddToCart') : t('SoldOut')}</span>
      </Btn>
    </div>
  );
};

export default VariationAddToCart;
