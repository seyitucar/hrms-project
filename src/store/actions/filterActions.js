export const FILTER_ADVERTS_BY_CITY = "FILTER_ADVERTS_BY_CITY"
export const FILTER_ADVERTS_BY_WORKING_TYPE = "FILTER_ADVERTS_BY_WORKING_TYPE"
export const FILTER_ADVERTS_BY_WORKING_PLACE = "FILTER_ADVERTS_BY_WORKING_PLACE"

export function filterAdvertsByCity (cityName) {
    return {
        type : FILTER_ADVERTS_BY_CITY,
        payload : cityName    
    }
} 

export function filterAdvertsByWorkingType (workingTypeName) {
    return {
        type : FILTER_ADVERTS_BY_WORKING_TYPE,
        payload : workingTypeName    
    }
} 

export function filterAdvertsByWorkingPlace (workingPlaceName) {
    return {
        type : FILTER_ADVERTS_BY_WORKING_PLACE,
        payload : workingPlaceName    
    }
} 