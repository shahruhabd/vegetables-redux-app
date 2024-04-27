import React from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../actions';
import { RootState } from '../store';
import { CartItem } from 'src/reducers/cartReducer';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const Cart = () => {
  const cartItems = useAppSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = Object.values(cartItems).reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-3">
      <h2>Your Cart</h2>
      <ul className="list-group">
        {Object.keys(cartItems).length > 0 ? (
          Object.values(cartItems).map(item => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              <div>
                <button className="btn btn-success btn-sm" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button className="btn btn-secondary btn-sm mx-2" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">Your cart is empty.</li>
        )}
      </ul>
      {Object.keys(cartItems).length > 0 && (
        <div className="mt-3">
          <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
        </div>
      )}
    </div>
  );
};

export default Cart;
