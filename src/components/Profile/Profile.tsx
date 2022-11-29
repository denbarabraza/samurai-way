import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

/*type ProfilePropsType={
    store: AppStoreType
}*/

export const Profile = (/*props: ProfilePropsType*/) => {
        return (
        <div >
            <ProfileInfo/>
             <MyPostsContainer/>
        </div>
    )
}
