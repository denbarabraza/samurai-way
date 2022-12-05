import React from 'react';
import {CommonUsersType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from './../../assets/images/user.jpg'

export const Users = (props: CommonUsersType) => {

    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
            props.setUsers(response.data.items))
    }

    return (
        <div className={s.wrapper}>
            {props.usersPage.users.map(e => <div key={e.id+e.name}>
                    <div className={s.items}>
                        <div className={s.item}>
                            <div>
                                <img src={e.photos.small
                                    ? e.photos.small
                                    : userPhoto
                                }/>
                            </div>
                            <div>
                                {e.followed
                                    ? <button onClick={() => props.followedHandler(e.id)}>Unfollowed</button>
                                    : <button onClick={() => props.unFollowedHandler(e.id)}>Followed</button>
                                }
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.itemInfo}>
                                <div>
                                    {e.name}
                                </div>
                                <div>
                                    {e.status}
                                </div>
                            </div>
                            <div className={s.itemInfoLoc}>
                                <div>{"e.location.city"}</div>
                                <div>{"e.location.country"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
