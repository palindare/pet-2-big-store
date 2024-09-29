import { combineReducers } from "redux";
import { createStore } from "redux";
import { reducerSlides } from "./Section-slides/slides";
import { reducerCatalogList } from "./Header-catalog-btn/catalogList";
import { reducerShowBurger } from "./showburger";
import { reducerBasket } from "./basket";

const reducers = combineReducers({
    slides: reducerSlides,
    catalogList: reducerCatalogList,
    showBurger: reducerShowBurger,
    menuBasket: reducerBasket,
})

export const store = createStore(reducers)