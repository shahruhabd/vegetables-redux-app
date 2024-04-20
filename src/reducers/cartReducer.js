const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const addItem = state[action.payload.id]
        ? { ...state[action.payload.id], quantity: state[action.payload.id].quantity + 1 }
        : { ...action.payload, quantity: 1 };
      return { ...state, [action.payload.id]: addItem };

    case 'REMOVE_FROM_CART':
      const newState = { ...state };
      delete newState[action.payload];
      return newState;

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        [action.payload]: { ...state[action.payload], quantity: state[action.payload].quantity + 1 }
      };

    case 'DECREMENT_QUANTITY':
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
}

export default cartReducer;
