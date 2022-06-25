import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


/*type isActiveType={
   isActiv:boolean
}*/


export const Navbar = () => {

const ActiveLink =(act:{isActive:boolean}) =>act.isActive?s.active:s.item


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={ActiveLink} to={'/profile'} >Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={ActiveLink} to={'/dialogs'}>Messages</NavLink>
               {/* <NavLink className={(act)=>act.isActive?s.active:s.item} to={'/dialogs'}>Messages</NavLink>*/}
            </div>
            <div className={s.item}>
                <NavLink className={ActiveLink} to={''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={ActiveLink} to={''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={ActiveLink} to={''}>Settings</NavLink>
            </div>
        </nav>
    )
}