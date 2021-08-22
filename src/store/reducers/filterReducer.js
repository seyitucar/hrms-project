import { FILTER_ADVERTS_BY_CITY } from "../actions/filterActions";
import { cityFilterItems } from "../initialValues/filterItems";

import {FILTER_ADVERTS_BY_WORKING_PLACE} from "../actions/filterActions";
import { workingPlaceFilterItems } from "../initialValues/filterItems";

import {FILTER_ADVERTS_BY_WORKING_TYPE} from "../actions/filterActions";
import { workingTypeFilterItems } from "../initialValues/filterItems";

const initialState = {
  cityFilterItems: cityFilterItems,
  workingPlaceFilterItems: workingPlaceFilterItems,
  workingTypeFilterItems: workingTypeFilterItems,
};

export default function filterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FILTER_ADVERTS_BY_CITY:
      return { ...state, cityFilterItems: [...state.cityFilterItems, payload] };

    case FILTER_ADVERTS_BY_WORKING_PLACE:
      return { ...state, workingPlaceFilterItems: [...state.workingPlaceFilterItems, payload] };

    case FILTER_ADVERTS_BY_WORKING_TYPE:
      return { ...state, workingTypeFilterItems: [...state.workingTypeFilterItems, payload] };
    default:
      return state;
  }
}
