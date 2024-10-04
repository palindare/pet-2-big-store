const defaultState = {
  menuBasket: [],
};

export const reducerBasket = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_MENU_BASKET":
      return { ...state, menuBasket: [...state.menuBasket, action.payload]};
    case "DELETE_MENU_BASKET":
      return {...state, menuBasket: state.menuBasket.filter(data => data.id !== action.payload)}
    case "CALC_PLUS":
      return {...state, menuBasket: state.menuBasket.map(item => +item.id === +action.payload ? {...item, quantity: item.quantity + 1} : item)};
    case "CALC_MINUS":
      return {...state, menuBasket: state.menuBasket.map(item =>  +item.id === +action.payload ? {...item, quantity: item.quantity - 1} : item)};
    case "REMOVE_DATA":
      return {...state, menuBasket: [...action.payload]}
    default:
      return state;
  }
};
