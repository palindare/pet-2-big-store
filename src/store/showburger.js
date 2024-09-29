const defaultState = {
  showBurgerMenu: false,
};

export const reducerShowBurger = (state = defaultState, action) => {
  switch (action.type) {
    case "SETMENU":
      return { ...state, showBurgerMenu: action.payload };
    case "SETBASKET":
      return {...state, showBasket: action.payload};
    default:
      return state;
  }
};
