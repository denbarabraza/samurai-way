import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import s from "./Dialogs.module.css";
import {CommonDialogsType} from "./DialogsContainer";
import {reduxForm} from "redux-form";
import {DialogForm, DialogsFormDataType} from "./DialogForm/DialogForm";


const DialogsFormRedux = reduxForm<DialogsFormDataType>({form: 'message'})(DialogForm)


export const Dialogs = (props: CommonDialogsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Messages key={m.id} message={m.message}/>)

    const onSubmitMessage = (formData: DialogsFormDataType) => {
        props.sendMessageHandler(formData.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <DialogsFormRedux onSubmit={onSubmitMessage}/>
            </div>
        </div>
    )
}
