import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {CommonUsersType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";


export const Profile:React.FC<CommonUsersType> = (props) => {

    if (!props.isAuth) return <div><Redirect to={'/login'}/></div>

        return (
        <div >
            <ProfileInfo {...props}/>
             <MyPostsContainer/>
        </div>
    )
}
