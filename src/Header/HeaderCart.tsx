import React, { useState } from 'react';
import Btn from '../Btn';
import { RiShoppingCartLine , RiCloseLine } from 'react-icons/ri';

const HeaderCart: React.FC = () => {
  const [cartCanvas, setCartCanvas] = useState(false);
  const cartProducts = []; // Hardcoded empty for simplicity

  return (
    <li className='right-side'>
      <div className='onhover-dropdown header-badge'>
        <Btn
          className='btn p-0 position-relative header-wishlist'
          onClick={() => setCartCanvas(!cartCanvas)}
        >
          <RiShoppingCartLine />
          {cartProducts.length > 0 && (
            <span className='position-absolute top-0 start-100 translate-middle badge'>
              {cartProducts.length}
              <span className='visually-hidden'>Unread Messages</span>
            </span>
          )}
        </Btn>
        {cartCanvas && (
          <div className={`onhover-div fixed-cart ${cartCanvas ? 'show' : ''}`}>
            <div className='cart-title'>
              <h4>Shopping Cart</h4>
              <a onClick={() => setCartCanvas(!cartCanvas)}>
                <RiCloseLine />
              </a>
            </div>
            <div className='empty-cart-box'>
              <div className='empty-icon'>
                <RiShoppingCartLine />
              </div>
              <h5>Your cart is currently empty.</h5>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default HeaderCart;
