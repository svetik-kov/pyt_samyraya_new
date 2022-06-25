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
    let dialogsData = [
        {id: 1, name: 'Nina'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Tanya'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Zlata'},
        {id: 6, name: 'Ira'},
        {id: 7, name: 'Marina'},
        {id: 8, name: 'Yulya'},
    ]
    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hi!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
    ]
    let dialogsElements= dialogsData.map((d)=>  <DialogItem name={d.name} id={d.id}/>);
    let messageElements=messagesData.map(m=><Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
               {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={'Natasha'} id={2} />
                <DialogItem name={'Tanya'} id={3} />
                <DialogItem name={'Sveta'} id={4} />
                <DialogItem name={'Zlata'} id={5} />
                <DialogItem name={'Ira'} id={6} />
                <DialogItem name={' Marina'} id={7} />
                <DialogItem name={'Yulya'} id={8} />*/}


            </div>
            <div className={s.messages}>
                {messageElements}
               {/* <Message message={messagesData[0].message}/>
                <Message message={'How are you?'}/>
                <Message message={'Hi!'}/>*/}

            </div>
        </div>
    );
};

