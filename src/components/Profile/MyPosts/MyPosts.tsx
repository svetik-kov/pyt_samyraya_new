import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {findAllByDisplayValue} from "@testing-library/react";
import {postsDataProps} from "../../../App";

type MyPostsPropsType = {
    posts: Array<postsDataProps>
}

export const MyPosts = (props: MyPostsPropsType) => {
    /*  let postsData = [
          {id: 1,message: 'Hi, how are you?',  likesCount: 14},
          {id: 2, message: 'It is my first post!!!', likesCount: 30},
          {id: 3, message: 'It is my second post!!!', likesCount: 130},
      ]*/
    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>MY posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button> Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
                {/*<Post message={postsData[0].message} like={postsData[0].likesCount}/>
                <Post message={'It is my first post'} like={30}/>*/}

            </div>
        </div>


    );
};

