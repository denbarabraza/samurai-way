import React from 'react';
import s from './Users.module.css'
import userPhoto from './../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import {CommonUsersType} from "./UsersContainer";

type UsersPropsType =CommonUsersType
    & { onclickChangedPage: (pageNumber: number) => void}

export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onClickUnfollowedHandler = (idUser: number) => {
        props.unFollowThunk(idUser)
    }
    const onClickFollowedHandler = (idUser: number) => {
        props.followThunk(idUser)
    }

      return (
        <div className={s.wrapper}>
            <div>
                {pages.map(p => {
                    return <span
                        onClick={() => props.onclickChangedPage(p)}
                        className={props.currentPage === p
                            ? s.selectPage
                            : ""
                        }>
                            {p}
                        </span>
                })}
            </div>
            {props.usersPage.users.map(e => <div key={e.id + e.name}>
                    <div className={s.items}>
                        <div className={s.item}>
                            <div>
                                <NavLink to={'/profile/' + e.id}>
                                    <img src={e.photos.small
                                        ? e.photos.small
                                        : userPhoto
                                    }/>
                                </NavLink>
                            </div>
                            <div>
                                {e.followed
                                    ? <button
                                        disabled={props.followInProgress.some(id => id === e.id)}
                                        onClick={() => onClickUnfollowedHandler(e.id)}>
                                        Unfollowed
                                    </button>
                                    : <button
                                        disabled={props.followInProgress.some(id => id === e.id)}
                                        onClick={() => onClickFollowedHandler(e.id)}>
                                        Followed
                                    </button>
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
}

