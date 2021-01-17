import constants from "../constants";

const initial = { orderBy: "name", asc: true };

export default function (state = initial, action) {
  switch (action.type) {
    case constants.SORT_PARAMS:
      let orderBy = action.orderBy;
      let asc;
      if (orderBy !== state.orderBy) {
        asc = true; // when orderBy changes - asc must allways be true
      } else {
        asc = !state.asc;
      }
      return {
        orderBy,
        asc,
      };

    default:
      return state;
  }
}
