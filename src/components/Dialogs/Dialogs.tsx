import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import { addMessageAC,  updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {ActionsTypes, DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch:(action:ActionsTypes)=>void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Messages key={m.id} message={m.message}/>)
    let messageBody=props.state.newMessageText

    const onSendClickSendMessageHandler = () => {
        props.dispatch(addMessageAC())
    }
    const onChangeMessageHandler=(e:ChangeEvent<HTMLTextAreaElement> )=>{
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
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