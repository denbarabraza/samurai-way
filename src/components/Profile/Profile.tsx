import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, store} from "../../redux/state";

type ProfilePropsType={
    state:ProfilePageType
    dispatch:(action:ActionsTypes)=>void
}

export const Profile = (props: ProfilePropsType) => {
        return (
        <div >
            <ProfileInfo/>
           <MyPosts
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={store.dispatch.bind(store)}
           />
        </div>
    )
}
