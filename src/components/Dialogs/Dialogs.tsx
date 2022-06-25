import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogs}>
                    <NavLink  to={'/dialogs/1'}>Nina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}> Natasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Tanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>  Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}>  Zlata</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/6'}>  Ira</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/7'}> Marina</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> Hello</div>
                <div className={s.message}> How are you?</div>
                <div className={s.message}> Hi?</div>
            </div>
        </div>
    );
};

