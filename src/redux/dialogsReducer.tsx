import {ActionsTypes, DialogsPageType, MessagesType} from "./state";

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type DialogsReducerType =
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>

export const dialogsReducer = (state:DialogsPageType, action:ActionsTypes) => {
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
export const updateNewMessageTextAC = (newMessageText:string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    } as const
}