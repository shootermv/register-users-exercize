import constants from "../constants";
export default function (
  state = { users: [], error: null, loading: false, sortBy: "Name" },
  action
) {
  switch (action.type) {
    case constants.USERS_FETCH:
      return {
        ...state,
        loading: true,
      };

    case constants.USERS_FETCH_SUCCESS:
      const users = action.payload;
      return {
        ...state,
        users,
        loading: false,
      };
    case constants.USERS_FETCH_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
   
    default:
      return state;
  }
}
