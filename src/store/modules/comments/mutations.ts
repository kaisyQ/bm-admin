import type { MutationTree } from 'vuex'
import { CommentMutationTypes } from "./mutation.types";
import type { CommentsState } from "./state";
import type { Comment } from "@/types";


export type Mutations<S = CommentsState> = {
    [CommentMutationTypes.SET_COMMENTS](state: S, payload: Array<Comment>): void
}

export const mutations: MutationTree<CommentsState> & Mutations = {
    [CommentMutationTypes.SET_COMMENTS](state, payload) {
        state.items = payload;
    },
}