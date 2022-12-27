import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from "./Posts/Post";
import s from "./MyPosts.module.css";
import {CommonPostType} from "./MyPostsContainer";

export const MyPosts = (props: CommonPostType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.onPostAdd()
    }
    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChangeHandler(e.currentTarget.value)
    }
    const onKeyUpHandler=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if(e.key==='Enter'){
            addPost()
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChangeHandler}
                        onKeyUp={onKeyUpHandler}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post..</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}