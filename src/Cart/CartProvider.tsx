import React, { useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';
import CartContext from './CartContext';
import { useQuery } from '@tanstack/react-query';

interface CartProviderProps {
  children: React.ReactNode;
}

// Mock API function - replace with your actual API call
const fetchCartData = async () => {
  // This is a mock implementation - replace with your actual API call
  return {
    data: {
      items: [],
      total: 0
    }
  };
};

const CartProvider: React.FC<CartProviderProps> = (props) => {
  const isCookie = Cookies.get('uat');
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const [variationModal, setVariationModal] = useState('');
  const [cartTotal, setCartTotal] = useState(0);

  const {
    data: CartAPIData,
    isLoading: getCartLoading,
    refetch,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartData,
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data
  });

  // Refetching Cart API
  useEffect(() => {
    if (isCookie) {
      refetch();
    }
  }, [isCookie, refetch]);

  // Setting CartAPI data to state and LocalStorage
  useEffect(() => {
    if (isCookie) {
      if (CartAPIData) {
        setCartProducts(CartAPIData?.items || []);
        setCartTotal(CartAPIData?.total || 0);
      }
    } else {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        try {
          const isCartAvailable = JSON.parse(cartData);
          if (isCartAvailable?.items?.length > 0) {
            setCartProducts(isCartAvailable.items);
            setCartTotal(isCartAvailable.total);
          }
        } catch (error) {
          console.error('Error parsing cart data from localStorage:', error);
        }
      }
    }
  }, [CartAPIData, isCookie]);

  // Adding data in localstorage when not Login
  useEffect(() => {
    storeInLocalStorage();
  }, [cartProducts]);

  // Getting total
  const total = useMemo(() => {
    return cartProducts?.reduce((prev, curr) => {
      return prev + Number(curr.sub_total || 0);
    }, 0);
  }, [cartProducts]);

  // Total Function for child components
  const getTotal = (value: any[]) => {
    return value?.reduce((prev, curr) => {
      return prev + Number(curr.sub_total || 0);
    }, 0);
  };

  // Remove and Delete cart data from API and State
  const removeCart = (id: number, cartId: number | null) => {
    const updatedCart = cartProducts?.filter((item) => item.product_id !== id);
    setCartProducts(updatedCart);
  };

  // Common Handler for Increment and Decrement
  const handleIncDec = (
    qty: number, 
    productObj: any, 
    isProductQty: number | boolean, 
    setIsProductQty: React.Dispatch<React.SetStateAction<number>> | null, 
    isOpenFun: React.Dispatch<React.SetStateAction<boolean>> | null, 
    cloneVariation: any
  ) => {
    const cartUid = null;
    const updatedQty = typeof isProductQty === 'number' ? isProductQty + qty : qty;
    const cart = [...cartProducts];
    const index = cart.findIndex((item) => item.product_id === productObj?.id);
    let tempProductId = productObj?.id;
    let tempVariantProductId = cloneVariation?.selectedVariation?.product_id;

    // Checking conditions for Replace Cart
    if (cart[index]?.variation && cloneVariation?.variation_id && tempProductId === tempVariantProductId && cloneVariation?.variation_id !== cart[index]?.variation_id) {
      return replaceCart(updatedQty, productObj, cloneVariation);
    }

    // Add data when not present in Cart variable
    if (index === -1) {
      const params = {
        id: null,
        product: productObj,
        product_id: productObj?.id,
        variation: cloneVariation?.selectedVariation ? cloneVariation.selectedVariation : null,
        variation_id: cloneVariation?.selectedVariation?.id ? cloneVariation.selectedVariation.id : null,
        quantity: cloneVariation?.selectedVariation?.productQty ? cloneVariation.selectedVariation.productQty : updatedQty,
        sub_total: cloneVariation?.selectedVariation?.sale_price ? 
          updatedQty * cloneVariation.selectedVariation.sale_price : 
          updatedQty * productObj?.sale_price,
      };
      setCartProducts((prev) => [...prev, params]);
    } else {
      // Checking the Stock QTY of particular product
      const productStockQty = cart[index]?.variation?.quantity ? 
        cart[index].variation.quantity : 
        cart[index]?.product?.quantity;
      
      if (productStockQty < cart[index]?.quantity + qty) {
        // Toast notification would go here
        console.error(`You can not add more items than available. In stock ${productStockQty} items.`);
        return false;
      }

      if (cart[index]?.variation) {
        cart[index].variation.selected_variation = cart[index]?.variation?.attribute_values?.map((values: any) => values.value).join('/');
      }

      const newQuantity = cart[index].quantity + qty;
      if (newQuantity < 1) {
        // Remove the item from the cart if the new quantity is less than 1
        return removeCart(productObj?.id, cartUid ? cartUid : cart[index].id);
      } else {
        cart[index] = {
          ...cart[index],
          id: cartUid?.id ? cartUid.id : cart[index].id ? cart[index].id : null,
          quantity: newQuantity,
          sub_total: newQuantity * (cart[index]?.variation ? 
            cart[index].variation.sale_price : 
            cart[index]?.product?.sale_price),
        };
        setCartProducts([...cart]);
      }
    }
    
    // Update the productQty state immediately after updating the cartProducts state
    if (setIsProductQty) {
      setIsProductQty(updatedQty);
    }
    if (isOpenFun) {
      isOpenFun(true);
    }
  };

  // Replace Cart
  const replaceCart = (updatedQty: number, productObj: any, cloneVariation: any) => {
    const cart = [...cartProducts];
    const index = cart.findIndex((item) => item.product_id === productObj?.id);
    
    if (index === -1) return;
    
    cart[index].quantity = 0;

    const productQty = cart[index]?.variation ? 
      cart[index].variation.quantity : 
      cart[index]?.product?.quantity;

    if (cart[index]?.variation) {
      cart[index].variation.selected_variation = cart[index]?.variation?.attribute_values?.map((values: any) => values.value).join('/');
    }

    // Checking the Stock QTY of particular product
    if (productQty < cart[index]?.quantity + updatedQty) {
      console.error(`You can not add more items than available. In stock ${productQty} items.`);
      return false;
    }

    const params = {
      id: null,
      product: productObj,
      product_id: productObj?.id,
      variation: cloneVariation?.selectedVariation ? cloneVariation.selectedVariation : null,
      variation_id: cloneVariation?.selectedVariation?.id ? cloneVariation.selectedVariation.id : null,
      quantity: cloneVariation?.productQty ? cloneVariation.productQty : updatedQty,
      sub_total: cloneVariation?.selectedVariation?.sale_price ? 
        updatedQty * cloneVariation.selectedVariation.sale_price : 
        updatedQty * productObj?.sale_price,
    };

    setCartProducts((prevCartProducts) =>
      prevCartProducts.map((elem) => {
        if (elem?.product_id === cloneVariation?.selectedVariation?.product_id) {
          return params;
        } else {
          return elem;
        }
      })
    );
  };

  // Setting data to localstorage when UAT is not there
  const storeInLocalStorage = () => {
    setCartTotal(total);
    localStorage.setItem('cart', JSON.stringify({ items: cartProducts, total: total }));
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        cartTotal,
        setCartTotal,
        removeCart,
        getTotal,
        handleIncDec,
        variationModal,
        setVariationModal,
        replaceCart,
      }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;