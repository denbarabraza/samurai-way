import React from 'react';
import {addPostAC, PostsType} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {RootReducerType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";


export type CommonPostType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    posts: Array<PostsType>
}
type MapDispatchToProps = {
    onPostAdd: (newPostTitle:string) => void
}

//My post container
const mapStateToProps = (state: RootReducerType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {
        onPostAdd: (newPostTitle:string) => {
            dispatch(addPostAC(newPostTitle))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)