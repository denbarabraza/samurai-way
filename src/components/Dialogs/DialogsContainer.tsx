import React from 'react';
import {addMessageAC, DialogsPageType, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";

export type CommonDialogsType =
    MapStateToProps
    & MapDispatchToProps

type MapStateToProps = {
    dialogsPage: DialogsPageType
    isAuth:boolean
}
type MapDispatchToProps = {
    sendMessageHandler: () => void
    onChangeMessageHandler: (valueMessage: string) => void
}

const mapStateToProps = (state: RootReducerType):MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {
        sendMessageHandler: () => {
            dispatch(addMessageAC())
        },
        onChangeMessageHandler: (valueMessage: string) => {
            dispatch(updateNewMessageTextAC(valueMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

