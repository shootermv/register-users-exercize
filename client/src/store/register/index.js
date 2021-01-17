import constants from "../constants";

const initial = {
  success: false,
  error: null,
  loading: false,
};

export default function (state = initial, action) {
  switch (action.type) {
    case constants.REGISTER_FETCH:
      return {
        ...state,
        loading: true,
      };

    case constants.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case constants.REGISTER_ERROR:
      const error = action.error;
      return {
        ...state,
        loading: false,
        error,
      };

    case constants.REGISTER_RESET:
      return initial;
      
    default:
      return state;
  }
}
