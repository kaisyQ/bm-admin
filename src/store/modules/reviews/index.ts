import { createStore, Store as VuexStore, type CommitOptions, type DispatchOptions, type StoreOptions } from 'vuex'
import { type ReviewsState, initialState } from './state'
import { type Getters, getters } from './getters'
import { type Mutations, mutations } from './mutations'
import { type Actions, actions } from './actions'

const storeOptions: StoreOptions<ReviewsState> = {
    state: initialState,
    getters,
    mutations,
    actions
}

export const store = createStore(storeOptions)

export type Store = Omit<
    VuexStore<ReviewsState>,
    'getters' | 'commit' | 'dispatch'
> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
}