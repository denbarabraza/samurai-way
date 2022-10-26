import React from 'react';
import s from '../Dialogs.module.css';

type MessagesPropsType={
    message: string
}

export const Messages = (props: MessagesPropsType) => {
    return (
        <div className={s.messagesItem}>
            {props.message}
        </div>
    )
}
