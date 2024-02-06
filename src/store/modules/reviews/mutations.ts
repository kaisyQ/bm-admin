import type { MutationTree } from 'vuex'
import { ReviewMutationTypes } from "./mutation.types";
import type {ReviewsState} from "./state";
import type {Review} from "@/types";


export type Mutations<S = ReviewsState> = {
    [ReviewMutationTypes.GET_REVIEWS](state: S, payload: Array<Review>): void
}

export const mutations: MutationTree<ReviewsState> & Mutations = {
    [ReviewMutationTypes.GET_REVIEWS](state, payload) {

    },
}