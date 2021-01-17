import constants from "./constants";

export function getUsers() {
    return { type: constants.USERS_FETCH }
}

export function register(user) {
    return { type: constants.REGISTER_FETCH, user }
}

export function reset() {
    return { type: constants.REGISTER_RESET }
}


export function sortParams(orderBy) {
    return { type: constants.SORT_PARAMS, orderBy }
}