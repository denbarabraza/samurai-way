const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

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

export const dialogsReducer = (state:DialogsPageType = initialState, action: DialogsActionsTypes):DialogsPageType => {
    switch (action.type){
        case ADD_MESSAGE:{
            let newMessage: MessagesType = {
                id: 1,
                message: state.newMessageText
            }
            return  {...state, messages: [...state.messages, newMessage], newMessageText:''}
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {...state, newMessageText:action.newMessageText}
        }
        default:
            return state
    }
}

export type DialogsActionsTypes =
    ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

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