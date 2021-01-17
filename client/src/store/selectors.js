import { createSelector } from "reselect";
// users
export const usersSelector = (state) => state.users.users;
export const loadingSelector = (state) => state.users.loading;
export const errorSelector = (state) =>  state.users.error;
// register
export const registerSuccessSelector = (state) =>  state.register.success;
export const registerErrorSelector = (state) =>  state.register.error;
export const registerLoadingSelector = (state) =>  state.register.loading;
// sort
export const sortSelector = (state) =>  state.sort;
export const sortedUsersSelector = createSelector(
    usersSelector,
    sortSelector,
    (users, sort) => {
        const {orderBy, asc} = sort;
        return users.sort((a, b) => asc ? (a[orderBy] > b[orderBy] ? 1 : -1) : (b[orderBy] > a[orderBy] ? 1 : -1))
    }
)