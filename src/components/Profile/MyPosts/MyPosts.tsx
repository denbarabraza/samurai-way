import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";


export const MyPosts = () => {
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
                <Post message={'Hi, how are you?'} likesCount={13}/>
                <Post message={'It\'s my first post'} likesCount={22}/>
            </div>
        </div>
    )
}
