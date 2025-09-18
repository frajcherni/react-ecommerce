import { createContext } from 'react';
interface CartItem {
  id: number | null;
  product_id: number;
  product: any;
  variation: any;
  variation_id: number | null;
  quantity: number;
  sub_total: number;
}

interface CartContextType {
  cartProducts: CartItem[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartItem[]>>;
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  removeCart: (id: number, cartId: number | null) => void;
  getTotal: (items: CartItem[]) => number;
  handleIncDec: (
    qty: number, 
    productObj: any, 
    isProductQty: number | boolean, 
    setIsProductQty: React.Dispatch<React.SetStateAction<number>> | null, 
    isOpenFun: React.Dispatch<React.SetStateAction<boolean>> | null, 
    cloneVariation: any
  ) => void;
  variationModal: string;
  setVariationModal: React.Dispatch<React.SetStateAction<string>>;
  replaceCart: (updatedQty: number, productObj: any, cloneVariation: any) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export default CartContext;