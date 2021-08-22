import { combineReducers } from "redux";
import favoritesReducer from "./reducers/favoritesReducer";
import filterReducer from "./reducers/filterReducer";


const rootReducer = combineReducers({
    favorites : favoritesReducer,
    filter : filterReducer
})

export default rootReducer;