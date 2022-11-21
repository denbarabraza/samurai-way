import React from "react";
import s from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {SidebarType} from "../../../redux/store";

type FriendsTypeProps={
    state: SidebarType
}

export const Friends = (props: FriendsTypeProps) => {
    return (
        <div>
            <h3>Friends</h3>
            <div className={s.items}>
                <Friend
                    friends={props.state.friends}
                />
            </div>
        </div>
    )
}