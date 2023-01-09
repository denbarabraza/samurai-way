import React, {ChangeEvent} from 'react';
import {Post} from "./Posts/Post";
import s from "./MyPosts.module.css";
import {CommonPostType} from "./MyPostsContainer";
import {reduxForm} from "redux-form";
import {PostForm, PostFormDataType} from "./PostForm/PostForm";

const PostsFormRedux = reduxForm<PostFormDataType>({form: 'message'})(PostForm)

export const MyPosts = (props: CommonPostType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = (formData:PostFormDataType) => {
        console.log(formData)
        props.onPostAdd(formData.post)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <PostsFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}