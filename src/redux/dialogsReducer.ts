export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
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
}

export const dialogsReducer = (state:DialogsPageType = initialState, action: DialogsActionsTypes):DialogsPageType => {
    switch (action.type){
        case 'ADD_MESSAGE':{
            let newMessage: MessagesType = {
                id: 1,
                message: action.payload.message
            }
            return  {
                ...state,
                messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }
}

export type DialogsActionsTypes =
    ReturnType<typeof addMessageAC>


export const addMessageAC = (message:string) => {
    return {
        type: 'ADD_MESSAGE',
        payload:{
            message
        }
    } as const
}

