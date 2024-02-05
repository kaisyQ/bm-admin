import type { Module } from "vuex";
import { initialState, type ICommentsState } from "./state";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";


const commentsModule: Module<ICommentsState, any> = {
    state: initialState,
    getters,
    actions,
    mutations
}

export default commentsModule