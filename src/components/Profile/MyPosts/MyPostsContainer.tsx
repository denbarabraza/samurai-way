import React from 'react';
import {ActionsTypes, PostsType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    store: AppStoreType
   /* posts: Array<PostsType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string*/
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let state=props.store.getState()

    const onPostAdd = () => {
        props.store.dispatch(addPostAC())
    }
    const onPostChangeHandler = (valuePost:string) => {
        props.store.dispatch(updateNewPostTextAC(valuePost))
    }


    return (
        <MyPosts
            posts={state.profilePage.posts}
            onPostAdd={onPostAdd}
            onPostChangeHandler={onPostChangeHandler}
            newPostText={state.profilePage.newPostText}
        />
    )
}
