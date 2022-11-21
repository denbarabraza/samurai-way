import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogsType, MessagesType} from "../../redux/store";

type DialogsPropsType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
    sendMessageHandler:()=>void
    onChangeMessageHandler:(valueMessage:string)=>void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Messages key={m.id} message={m.message}/>)
    let messageBody=props.newMessageText

    const onSendClickSendMessageHandler = () => {
        props.sendMessageHandler()
    }
    const onChangeMessageHandler=(e:ChangeEvent<HTMLTextAreaElement> )=>{
        props.onChangeMessageHandler(e.currentTarget.value)
    }

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