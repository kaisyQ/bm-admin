import type {Review} from "@/types";


export const initialState = {
    items: [] as Array<Review>,
}

export type ReviewsState = typeof initialState;