export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null,
        vk: string
        twitter: string
        instagram: string
        youtube: null,
        github: string
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId:number
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
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
    newPostText: '',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case 'ADD_POST': {
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case 'UPDATE_NEW_POST_TEXT': {
            return {...state, newPostText: action.newPostText}
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.payload.userProfile}
        }
        default:
            return state
    }
}

export type ProfileActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>

export const addPostAC = () => {
    return {
        type: 'ADD_POST'
    } as const
}
export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newPostText: newPostText
    } as const
}
export const setUserProfileAC = (userProfile: ProfileType) => {
    return {
        type: 'SET_USER_PROFILE',
        payload: {
            userProfile
        }
    } as const
}