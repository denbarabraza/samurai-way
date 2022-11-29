import React from 'react';
import {addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {RootReducerType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";


export type CommonPostType = MapStateToPropsType & MapDispatchToProps
type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchToProps = {
    onPostAdd: () => void
    onPostChangeHandler: (valuePost: string) => void
}

//My post container
const mapStateToProps = (state: RootReducerType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {
        onPostAdd: () => {
            dispatch(addPostAC())
        },
        onPostChangeHandler: (valuePost: string) => {
            dispatch(updateNewPostTextAC(valuePost))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)