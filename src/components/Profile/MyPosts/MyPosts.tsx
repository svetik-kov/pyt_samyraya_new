import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {findAllByDisplayValue} from "@testing-library/react";
/*import {postsDataProps} from "../../../App";*/
import { ProfilePageType, RootStateType} from "../../../redux/State";

type MyPostsPropsType = {
    /* posts: Array<postsDataProps>*/
    newPosts: ProfilePageType
    addPost: (newMessage: string) => void
    message: string
    changeNewText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.newPosts.posts.map((p) => <Post key={p.id} message={p.message}
                                                              likesCount={p.likesCount}/>);
    /*let newPost=useRef<HTMLTextAreaElement>(null)*/
    let addPost = () => {
        props.addPost(props.message)
        props.changeNewText('')

    }
    const onchangeHandler = (e: any) => {
        debugger
        props.changeNewText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>MY posts</h3>
            <div>
                <div>

                    <form>
                        <input onChange={onchangeHandler} value={props.message} />
                    </form>
                </div>
                <button onClick={addPost}> Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}


            </div>
        </div>


    );
};

