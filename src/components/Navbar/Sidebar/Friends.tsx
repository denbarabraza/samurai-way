import React from "react";
import s from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {RootReducerType} from "../../../redux/redux-store";

type FriendsTypeProps={
    state: RootReducerType
}

export const Friends = (props: FriendsTypeProps) => {
    return (
        <div>
            <h3>My Friends</h3>
            <div className={s.items}>
                <Friend
                    friends={props.state.sidebar.friends}
                />
            </div>
        </div>
    )
}