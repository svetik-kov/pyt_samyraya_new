import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
/*import {postsDataProps} from "../../App";*/
import {RootStateType} from "../../redux/State";

type ProfilePropsType = {
   /* posts: Array<postsDataProps>*/
    state:RootStateType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state}/>
        </div>

    );
}

