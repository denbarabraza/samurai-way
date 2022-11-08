import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    newPostText:string
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    /*let postMessageRef = React.createRef<HTMLTextAreaElement>()*/
    const addPost = () => {
        /*if (postMessageRef.current) {
            props.addPost()
        }*/
        props.addPost()
    }
    const onPostChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                       /* ref={postMessageRef}*/
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
