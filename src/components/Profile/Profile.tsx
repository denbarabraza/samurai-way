import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType={
    state:ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {
        return (
        <div >
            <ProfileInfo/>
           <MyPosts
                state={props.state.posts}
           />
        </div>
    )
}
