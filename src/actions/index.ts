interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}



export const addToCart = (item: Product) => ({
  type: 'ADD_TO_CART',
  payload: item
});

export const removeFromCart = (itemId: string) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId
});

export const incrementQuantity = (itemId: string) => ({
  type: 'INCREMENT_QUANTITY',
  payload: itemId
});

export const decrementQuantity = (itemId: string) => ({
  type: 'DECREMENT_QUANTITY',
  payload: itemId
});
