import { combineReducers } from "redux";
import { createStore } from "redux";
import { reducerSlides } from "./Section-slides/slides";
import { reducerCatalogList } from "./Header-catalog-btn/catalogList";

const reducers = combineReducers({
    slides: reducerSlides,
    catalogList: reducerCatalogList,
})

export const store = createStore(reducers)