import type {ActionContext, ActionTree} from 'vuex'
import type { ReviewsState } from './state'
import type { Mutations } from './mutations'
import { ActionTypes } from "@/store/modules/reviews/action.types";
import type { Review } from "@/types";

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<ReviewsState, ReviewsState>, 'commit'>

export interface Actions {
    [ActionTypes.GET_REVIEWS](
        { commit }: AugmentedActionContext,
        payload: Review | null
    ): Promise<Review | null>
}

export const actions: ActionTree<ReviewsState, ReviewsState> & Actions = {
    [ActionTypes.GET_REVIEWS]({ commit }): Promise<Review | null> {
        return new Promise((resolve) => resolve(null));
    }
};