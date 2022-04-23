import {
  GET_BORDER_ERROR,
  GET_BORDER_PENDING,
  GET_BORDER_SUCCESS,
} from "../actions/border-data";

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  data: [],
};

const borderDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BORDER_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case GET_BORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };
    case GET_BORDER_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default borderDataReducer;
