import React from 'react';
import {CommonUsersType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from './../../assets/images/user.jpg'

export class UsersC extends React.Component<CommonUsersType>{
    /*constructor(props:CommonUsersType) {
        super(props);
    }*/ //можно не показывать, так как передает только super-по умолчанию
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
            this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div className={s.wrapper}>
                {this.props.usersPage.users.map(e => <div key={e.id+e.name}>
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
