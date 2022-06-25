import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src={'https://i.pinimg.com/originals/1a/39/2d/1a392d93f1d19d9660aecdefe9bd6679.jpg'}/></div>
            <div> AVA +DESCRIPTION</div>

            <div>
                <MyPosts/>
            </div>

        </div>

    );
}

