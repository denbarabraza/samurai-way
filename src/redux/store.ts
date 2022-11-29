import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

 type PostsType = {
    id: number
    message: string
    likesCount: number
}
type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
 type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
 type SidebarType = {
    friends: Array<FriendsType>
}
 type FriendsType = {
    id: number
    name: string
}
 type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

 type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    callSubscribe: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}
 let store: StoreType = {
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
        /*this._state.profilePage=profileReducer(this._state.profilePage,action)*/
        this._state.sidebar=sidebarReducer(this._state.sidebar,action)
        this.callSubscribe()
    },
}





