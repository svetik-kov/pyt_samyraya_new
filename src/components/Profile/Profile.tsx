import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
/*import {postsDataProps} from "../../App";*/
import {ActionType, ProfilePageType, RootStateType} from "../../redux/State";

type ProfilePropsType = {
    /* posts: Array<postsDataProps>*/
    postPage:ProfilePageType
    dispatch:(action:ActionType)=>void
    message:string

}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts newPosts={props.postPage} dispatch={props.dispatch} message={props.message} />
        </div>

    );
}
