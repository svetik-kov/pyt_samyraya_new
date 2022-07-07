import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {findAllByDisplayValue} from "@testing-library/react";
/*import {postsDataProps} from "../../../App";*/
import {addPost, ProfilePageType, RootStateType} from "../../../redux/State";

type MyPostsPropsType = {
   /* posts: Array<postsDataProps>*/
    newPosts:ProfilePageType
    addPost:(newMessage:string)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.newPosts.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
let newPost=useRef<HTMLTextAreaElement>(null)
  let addPost=()=>{
    if (newPost.current!==null){
         props.addPost(newPost.current.value)
        newPost.current.value=''
    }

  }
    return (
        <div className={s.postsBlock}>
            <h3>MY posts</h3>
            <div>
                <div>
                    <textarea ref={newPost}></textarea>
                </div>
                <button onClick={addPost}> Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
                {/*<Post message={postsData[0].message} like={postsData[0].likesCount}/>
                <Post message={'It is my first post'} like={30}/>*/}

            </div>
        </div>


    );
};

