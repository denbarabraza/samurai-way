import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {AppStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: AppStoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    let state=props.store.getState().dialogsPage

    const sendMessageHandler = () => {
        props.store.dispatch(addMessageAC())
    }
    const onChangeMessageHandler = (valueMessage:string) => {
        props.store.dispatch(updateNewMessageTextAC(valueMessage))
    }

    return (
        <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
            sendMessageHandler={sendMessageHandler}
            onChangeMessageHandler={onChangeMessageHandler}
        />
    )
}