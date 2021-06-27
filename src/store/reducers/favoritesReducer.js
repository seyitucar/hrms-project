import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/favoritesActions"
import { favoritesItems } from "../initialValues/favoritesItems"


const initialState = {
    favoritesItems : favoritesItems
}

export default function favoritesReducer (state=initialState,{type,payload}) {
    switch (type) {
        case ADD_TO_FAVORITES:
            let jobAdvertisement = state.favoritesItems.find(f=>f.jobAdvertisement.id === payload.id)
            if (jobAdvertisement) {  
                return{
                    ...state,
                favoritesItems:state.favoritesItems.filter(f=>f.jobAdvertisement.id !== payload.id )
                }
            } else {
                return {
                    ...state,
                    favoritesItems:[...state.favoritesItems,{jobAdvertisement:payload}]
                }
                
            }

            case REMOVE_FROM_FAVORITES:
                return {
                    ...state,
                    favoritesItems:state.favoritesItems.filter(f=>f.jobAdvertisement.id !== payload.id )
                }
    
        default:
            return state;
    }
}