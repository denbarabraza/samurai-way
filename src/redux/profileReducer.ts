const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 13},
        {id: 2, message: 'It\'s my first post', likesCount: 22}
    ],
    newPostText: ''
}

export const profileReducer = (state:ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type){
        case ADD_POST:{
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost,...state.posts],newPostText:''}
        }
        case UPDATE_NEW_POST_TEXT:{
            return {...state, newPostText: action.newPostText}
        }
        default:
            return state
    }
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

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
