import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
/*import {postsDataProps} from "../../App";*/
import {addPost, ProfilePageType, RootStateType} from "../../redux/State";

type ProfilePropsType = {
   /* posts: Array<postsDataProps>*/
    postPage:ProfilePageType
    addPost:(newMessage:string)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.postPage} addPost={props.addPost}/>
        </div>

    );
}

