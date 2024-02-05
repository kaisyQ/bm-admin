import type { Comment } from "@/types";


export const initialState = {
    items: [] as Array<Comment>,
}

export type CommentsState = typeof initialState;