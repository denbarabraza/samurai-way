import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    state: Array<PostsType>
    addPost: (postText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.state.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value)
            postMessageRef.current.value=''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={postMessageRef}></textarea>
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
