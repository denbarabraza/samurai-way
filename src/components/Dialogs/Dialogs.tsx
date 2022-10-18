import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props:any)=>{
    return(
        <div className={s.dialog}>
            <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props:any)=>{
    return(
        <div className={s.messagesItem}>
            {props.message}
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Den'} id={2}/>
            </div>
            <div className={s.messages}>
                <Messages message={'Hello, how are you?'}/>
                <Messages message={'Hi...'}/>
            </div>
        </div>
    )
}