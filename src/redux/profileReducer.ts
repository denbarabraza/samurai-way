import {ActionsTypes, PostsType, ProfilePageType} from "./store";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export type ProfileReducerType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>

let initialState:ProfilePageType={
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 13},
        {id: 2, message: 'It\'s my first post', likesCount: 22}
    ],
    newPostText: ''
}

export const profileReducer = (state=initialState, action: ActionsTypes) => {
    /*switch (action.type){
        case ADD_POST:
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case  UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state*/
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
