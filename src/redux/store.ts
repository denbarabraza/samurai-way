import {dialogsReducer, DialogsReducerType} from "./dialogsReducer";
import {profileReducer, ProfileReducerType} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
export type FriendsType = {
    id: number
    name: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type ActionsTypes = ProfileReducerType | DialogsReducerType

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    callSubscribe: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 13},
                {id: 2, message: 'It\'s my first post', likesCount: 22}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello, how are you?'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Ciao'},
                {id: 6, message: 'Yo'},
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ]
        }
    },
    getState() {
        return this._state
    },
    callSubscribe() {
        console.log("rendering")
    },
    subscribe(observer) {
        this.callSubscribe = observer
    },
    dispatch(action) {
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.sidebar=sidebarReducer(this._state.sidebar,action)
        this.callSubscribe()
    },
}





