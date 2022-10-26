import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <img src={'https://static4.tgstat.ru/channels/_0/be/be7c19a29e937067566fb2380baca39c.jpg'}/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
