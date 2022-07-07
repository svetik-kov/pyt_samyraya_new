import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
/*import {DialogsDataType, MessageDataType} from "../../App";*/
import {MessagePage, ProfilePageType, RootStateType} from "../../redux/State";

type DialogsPropsType = {
  /*  dialogs: Array<DialogsDataType>
    messages:Array<MessageDataType>*/
    messagePage:MessagePage
    profilePage:ProfilePageType
}





export const Dialogs = (props:DialogsPropsType) => {
    /*let dialogsData = [
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
    ]*/
    let dialogsElements= props.profilePage.dialogs.map((d)=>  <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements=props.messagePage.messages.map(m=><Message key={m.id} message={m.message}/>)
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

