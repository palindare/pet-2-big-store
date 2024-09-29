const defaultState = {
  menuBasket: [],
};

export const reducerBasket = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_MENU_BASKET":
      return { ...state, menuBasket: [...state.menuBasket, action.payload]};
    default:
      return state;
  }
};
