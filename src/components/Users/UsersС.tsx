import React from 'react';
import {CommonUsersType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from './../../assets/images/user.jpg'

export class UsersC extends React.Component<CommonUsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            })
    }

    onclickChangedPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.wrapper}>
                <div>
                    {pages.map(p => {
                        return <span
                            onClick={() => this.onclickChangedPage(p)}
                            className={this.props.currentPage === p
                                ? s.selectPage
                                : ""
                            }
                        >
                            {p}
                        </span>
                    })}
                </div>
                {this.props.usersPage.users.map(e => <div key={e.id + e.name}>
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
                                        ? <button onClick={() => this.props.followedHandler(e.id)}>Unfollowed</button>
                                        : <button onClick={() => this.props.unFollowedHandler(e.id)}>Followed</button>
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
}
