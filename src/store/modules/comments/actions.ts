import { ActionTypes } from "./action.types";

export const actions = {
    [ActionTypes.GET_COMMENTS]({ commit }) {
        new Promise((resolve) => resolve([]));
    }
};