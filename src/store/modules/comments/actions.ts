import { ActionTypes } from "./action.types";

export const actions = {
    [ActionTypes.GET_COMMENTS]() {
        new Promise((resolve) => resolve([]));
    }
};