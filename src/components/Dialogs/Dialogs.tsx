import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType={
   name?:string
   id?:number
   message?:string
}
const DialogItem = (props:DialogsPropsType) => {
    let path = '/dialogs/' + props.id;
  return(
      <div className={s.dialogs}>
          <NavLink  to={path}>{props.name}</NavLink>
      </div>
  )
}

const Message = (props:DialogsPropsType) => {
    return(
        <div className={s.message}>{props.message}</div>
        )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={'Nina'} id={1} />
                <DialogItem name={'Natasha'} id={2} />
                <DialogItem name={'Tanya'} id={3} />
                <DialogItem name={'Sveta'} id={4} />
                <DialogItem name={'Zlata'} id={5} />
                <DialogItem name={'Ira'} id={6} />
                <DialogItem name={' Marina'} id={7} />
                <DialogItem name={'Yulya'} id={8} />


            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
                <Message message={'Hi!'}/>

            </div>
        </div>
    );
};

