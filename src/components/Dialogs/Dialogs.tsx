import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsConnectMapPropTypes} from "./DialogsContainer";


export const Dialogs: React.FC<DialogsConnectMapPropTypes> = (props) => {

    const addMessage = () => {
        props.addMessage();
    }

    const changeNewMessageCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageCallBack(e);
    }

    const dialogsElements = props.dialogsData.map(d => <DialogItem key={d.id}
                                                                   name={d.name}
                                                                   id={d.id}
                                                                   avatar={d.avatar}/>);
    const messagesElements = props.messagesDataPosts.map(m => <Message key={m.id}
                                                                       id={m.id}
                                                                       message={m.message}
                                                                       messageDataForNewPost={props.messageDataNewPost}/>)
    return (
        <div className={s.tableDialogs}>
            <div className={s.dialogsItems}>
                <div>{dialogsElements}</div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={"Enter message"}
                                   onChange={changeNewMessageCallBack}
                                   value={props.messageDataNewPost}/></div>
                    <div>
                        <button onClick={addMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


/*
export type DialogsPropTypes = {
    addMessage: () => void,
    changeNewMessageCallBack: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    arrayDialogs: Array<DialogItemPropTypes>,
    arrayMessage: Array<MessagePropTypes>,
    messageDataForNewPost: string
}
export const Dialogs = (props: DialogsPropTypes) => {

    const addMessage = () => {
        props.addMessage();
    }

    const changeNewMessageCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageCallBack(e);
    }

    const dialogsElements = props.arrayDialogs.map(d => <DialogItem key={d.id} name={d.name}
                                                                    id={d.id}
                                                                    avatar={d.avatar}/>);
    const messagesElements = props.arrayMessage.map(m => <Message key={m.id} id={m.id}
                                                                  message={m.message}
                                                                  messageDataForNewPost={props.messageDataForNewPost}/>)

    const messageDataForNewPost=props.messageDataForNewPost;


    return (
        <div className={s.tableDialogs}>
            <div className={s.dialogsItems}>
                <div>{dialogsElements}</div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={"Enter message"}
                                   onChange={changeNewMessageCallBack}
                                   value={messageDataForNewPost}/></div>
                    <div>
                        <button onClick={addMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}*/
