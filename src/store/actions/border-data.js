import { getBorderData } from "../../api/border-data";

export const GET_BORDER_SUCCESS = "GET_BORDER_SUCCESS";
export const GET_BORDER_PENDING = "GET_BORDER_PENDING";
export const GET_BORDER_ERROR = "GET_BORDER_ERROR";

export const getBorder = () => {
  return (dispatch) => {
    dispatch({ type: GET_BORDER_PENDING });
    try {
      let data = getBorderData();
      dispatch({ type: GET_BORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_BORDER_ERROR, payload: error });
    }
  };
};
