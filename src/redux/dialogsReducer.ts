import {ActionsTypes, DialogsPageType, MessagesType} from "./store";

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type DialogsReducerType =
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>

let initialState:DialogsPageType = {
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
}


export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage: MessagesType = {
            id: 1,
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessageText
    }
    return state
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    } as const
}