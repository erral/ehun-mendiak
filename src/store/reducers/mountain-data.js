import {
  GET_MOUNTAINS_ERROR,
  GET_MOUNTAINS_PENDING,
  GET_MOUNTAINS_SUCCESS,
} from "../actions/mountain-data";

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  data: [],
};

const mountainDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOUNTAINS_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case GET_MOUNTAINS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };
    case GET_MOUNTAINS_ERROR:
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

export default mountainDataReducer;
