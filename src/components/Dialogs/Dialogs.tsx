import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogItemPropTypes, MessagePropTypes} from "../../redux/redux";



export type DialogsPropTypes = {
    arrayDialogs: Array<DialogItemPropTypes>,
    arrayMessage: Array<MessagePropTypes>,
    messageDataForNewPost: string,
    addMessage: () => void
    changeNewMessageCallBack:(newMessage:string)=>void
}

export const Dialogs = (props: DialogsPropTypes) => {


    let dialogsElements = props.arrayDialogs.map(d => <DialogItem key={d.id} name={d.name}
                                                                  id={d.id}
                                                                  avatar={d.avatar}/>);//тут должен быть тип!
    let messagesElements = props.arrayMessage.map(m => <Message key={m.id} id={m.id}
                                                                message={m.message}
                                                                messageDataForNewPost={props.messageDataForNewPost}
                                                                addMessage={props.addMessage}
                                                                changeNewMessageCallBack={props.changeNewMessageCallBack}/>);//тут должен быть тип!


    return (
        <div className={s.tableDialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}