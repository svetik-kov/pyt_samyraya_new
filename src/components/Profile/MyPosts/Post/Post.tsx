import React from 'react';
import s from './Post.module.css'

type PostPropsType={
    id?:number
    message:string
    likesCount:number
}

export const Post = (props:PostPropsType) => {
    return (

                <div className={s.item}>

                    <img src={'https://shapka-youtube.ru/wp-content/uploads/2022/05/avatarka-kot-iz-tom-i-dzherri.jpg'}/>
                    {props.message}
                    <div> like: {props.likesCount}</div>
                </div>

    );
};

