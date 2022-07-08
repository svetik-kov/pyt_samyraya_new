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

    let dialogsElements= props.profilePage.dialogs.map((d)=>  <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements=props.messagePage.messages.map(m=><Message key={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                {messageElements}

            </div>
        </div>
    );
};

