import { getMountainsData } from "../../api/mountains-data";

export const GET_MOUNTAINS_SUCCESS = "GET_MOUNTAINS_SUCCESS";
export const GET_MOUNTAINS_PENDING = "GET_MOUNTAINS_PENDING";
export const GET_MOUNTAINS_ERROR = "GET_MOUNTAINS_ERROR";

export const getMountains = () => {
  return (dispatch) => {
    dispatch({ type: GET_MOUNTAINS_PENDING });
    try {
      let data = getMountainsData();
      dispatch({ type: GET_MOUNTAINS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_MOUNTAINS_ERROR, payload: error });
    }
  };
};
