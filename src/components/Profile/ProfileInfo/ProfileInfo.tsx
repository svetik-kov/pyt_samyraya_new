import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return(
        <div>
            <div><img src={'https://i.pinimg.com/originals/1a/39/2d/1a392d93f1d19d9660aecdefe9bd6679.jpg'}/></div>
            <div className={s.discriptionBlock}>
                AVA +DESCRIPTION
            </div>
        </div>

    )
}