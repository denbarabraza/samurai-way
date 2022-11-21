import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, store} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStoreType} from "../../redux/redux-store";

type ProfilePropsType={
    store: AppStoreType
}

export const Profile = (props: ProfilePropsType) => {
        return (
        <div >
            <ProfileInfo/>
           <MyPostsContainer
               store={props.store}
           />
        </div>
    )
}
