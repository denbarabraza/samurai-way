import React from 'react';
import s from './Post.module.css';

type PostPropsType={
    message: string
    likesCount: number
}

export const Post = (props:PostPropsType) => {
    return (
            <div className={s.item}>
                <img src={'https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-12.jpg'}/>
                <span>{props.message}</span>
                <div>
                    <span>like</span>{props.likesCount}
                </div>
            </div>
    )
}
