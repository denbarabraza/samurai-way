import React from 'react';
import {addMessageAC, DialogsPageType} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {WidthAuthRedirect} from "../../hoc/widthAuthRedirect";

export type CommonDialogsType =
    MapStateToProps
    & MapDispatchToProps

type MapStateToProps = {
    dialogsPage: DialogsPageType
}
type MapDispatchToProps = {
    sendMessageHandler: (message:string) => void
}

const mapStateToProps = (state: RootReducerType):MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {
        sendMessageHandler: (message:string) => {
            dispatch(addMessageAC(message))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WidthAuthRedirect
)(Dialogs)


