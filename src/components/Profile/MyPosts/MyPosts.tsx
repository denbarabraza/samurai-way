import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";


export const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post..</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likesCount={13}/>
                <Post message={'It\'s my first post'} likesCount={22}/>
            </div>
        </div>
    )
}
