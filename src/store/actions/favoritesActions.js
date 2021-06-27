export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"

export function addToFavorites (jobAdvertisement) {
    return {
        type : ADD_TO_FAVORITES,
        payload : jobAdvertisement    
    }
} 

export function removeFromFavorites (jobAdvertisement) {
    return {
        type : REMOVE_FROM_FAVORITES,
        payload : jobAdvertisement    
    }
} 