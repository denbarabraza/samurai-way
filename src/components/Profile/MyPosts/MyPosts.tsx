import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType={
    state: Array<PostsType>
}

export const MyPosts = (props:MyPostsPropsType) => {

    let postsElements=props.state.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post..</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
