import React, {ChangeEvent} from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import s from "./Dialogs.module.css";
import {CommonDialogsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

export const Dialogs = (props: CommonDialogsType) => {
    //console.log(props.dialogsPage.newMessageText)
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Messages key={m.id} message={m.message}/>)
    let messageBody = props.dialogsPage.newMessageText

    const onSendClickSendMessageHandler = () => {
        props.sendMessageHandler()
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessageHandler(e.currentTarget.value)
    }

    if (!props.isAuth) return <div><Redirect to={'/login'}/></div>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={messageBody}
                            placeholder={'Enter your message'}
                            onChange={onChangeMessageHandler}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button
                            onClick={onSendClickSendMessageHandler}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}