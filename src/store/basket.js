const defaultState = {
  menuBasket: [],
  menufavorite: [],
};

export const reducerBasket = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_MENU_BASKET":
      return { ...state, menuBasket: [...state.menuBasket, action.payload]};
    case "DELETE_MENU_BASKET":
      return {...state, menuBasket: state.menuBasket.filter(data => data.id !== action.payload)}
    case "ADD_MENU_FAVORITE":
      return {...state, menufavorite: [...state.menufavorite, action.payload]}
    case "DELETE_MENU_FAVORITE":
      return {...state, menufavorite: state.menufavorite.filter(data => data.id !== action.payload)}
    case "CALC_PLUS":
      return {...state, menuBasket: state.menuBasket.map(item => +item.id === +action.payload ? {...item, quantity: item.quantity + 1} : item)};
    case "CALC_MINUS":
      return {...state, menuBasket: state.menuBasket.map(item =>  +item.id === +action.payload ? {...item, quantity: item.quantity - 1} : item)};
    case "CHANGE_CHECKED":
      return {...state, menuBasket: state.menuBasket.map(item => +item.id === +action.payload ? {...item, checked: item.checked === false ? true : false } : item)}
    case "SHOW_FAVORITE":
      return {...state, menuBasket: state.menuBasket.map(item => +item.id === +action.payload ? {...item, showTextFavorite: item.showTextFavorite = true} : item)}
    case "HIDE_FAVORITE":
      return {...state, menuBasket: state.menuBasket.map(item => +item.id === +action.payload ? {...item, showTextFavorite: item.showTextFavorite = false} : item)}
      case "HIDE_FAVORITE_ALL":
        return {...state, menuBasket: state.menuBasket.map(item =>  {
         return {...item, showTextFavorite: item.showTextFavorite = false}
        })}
    case "REMOVE_DATA":
      return {...state, menuBasket: [...action.payload]}
    default:
      return state;
  }
};
