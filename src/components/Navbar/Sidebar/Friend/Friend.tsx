import React from "react";
import s from './Friend.module.css';
import {FriendsType} from "../../../../redux/state";


type FriendTypeProps = {
    friends: FriendsType[]
}

export const Friend = (props: FriendTypeProps) => {
    return (
        <div className={s.item}>
            {props.friends.map((e) => {
                if (e.id < 4) {
                    return (
                        <div key={e.id}>
                            <img src={'https://static4.tgstat.ru/channels/_0/be/be7c19a29e937067566fb2380baca39c.jpg'}/>
                            <span>{e.name}</span>
                        </div>
                    )
                }
            })}
        </div>
    )
}