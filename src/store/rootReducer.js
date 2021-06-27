import { combineReducers } from "redux";
import favoritesReducer from "./reducers/favoritesReducer";


const rootReducer = combineReducers({
    favorites : favoritesReducer
})

export default rootReducer;