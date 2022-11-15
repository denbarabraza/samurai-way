import {ActionsTypes, PostsType, ProfilePageType} from "./state";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export type ProfileReducerType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>


export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    if (action.type === ADD_POST) {
        let newPost: PostsType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newPostText
    }
    return state
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}