import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostsType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: Array<PostsType>
    onPostAdd:()=>void
    onPostChangeHandler:(valuePost:string)=>void
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.onPostAdd()
    }
    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChangeHandler(e.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChangeHandler}
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
