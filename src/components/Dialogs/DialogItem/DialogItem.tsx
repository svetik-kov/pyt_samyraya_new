import {NavLink} from "react-router-dom";
import React from "react";
import s from '../Dialogs.module.css'


type DialogItemPropsType={
    name:string
    id:number

}
export const DialogItem = (props:DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;
    return(
        <div className={s.dialogs}>
            <NavLink  to={path}>{props.name}</NavLink>
        </div>
    )
}