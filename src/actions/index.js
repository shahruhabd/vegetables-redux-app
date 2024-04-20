export const addToCart = item => ({
  type: 'ADD_TO_CART',
  payload: item
});

export const removeFromCart = itemId => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId
});

export const incrementQuantity = itemId => ({
  type: 'INCREMENT_QUANTITY',
  payload: itemId
});

export const decrementQuantity = itemId => ({
  type: 'DECREMENT_QUANTITY',
  payload: itemId
});
