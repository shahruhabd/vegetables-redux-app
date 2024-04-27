// Типы действий
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

// Интерфейсы для элементов корзины и состояния
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Тип действия
interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItem;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: string; // предполагаем, что payload - это id
}

interface IncrementQuantityAction {
  type: typeof INCREMENT_QUANTITY;
  payload: string; // id элемента корзины
}

interface DecrementQuantityAction {
  type: typeof DECREMENT_QUANTITY;
  payload: string; // id элемента корзины
}

// Объединение типов действий
type CartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | IncrementQuantityAction
  | DecrementQuantityAction;

// Состояние корзины
interface CartState {
  [key: string]: CartItem;
}

// Начальное состояние
const initialState: CartState = {};

// Редьюсер
const cartReducer = (
  state: CartState = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const addItem: CartItem = state[action.payload.id]
        ? { ...state[action.payload.id], quantity: state[action.payload.id].quantity + 1 }
        : { ...action.payload, quantity: 1 };
      return { ...state, [action.payload.id]: addItem };

    case REMOVE_FROM_CART:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;

    case INCREMENT_QUANTITY:
      return {
        ...state,
        [action.payload]: { ...state[action.payload], quantity: state[action.payload].quantity + 1 }
      };

    case DECREMENT_QUANTITY:
      if (state[action.payload].quantity === 1) {
        const newStateDec = { ...state };
        delete newStateDec[action.payload];
        return newStateDec;
      }
      return {
        ...state,
        [action.payload]: { ...state[action.payload], quantity: state[action.payload].quantity - 1 }
      };

    default:
      return state;
  }
};

export default cartReducer;
