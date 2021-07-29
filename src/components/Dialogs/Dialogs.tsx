import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionsType,

    DialogItemPropTypes,
    MessagePropTypes,
} from "../../redux/redux";
import {addMessageAC, changeNewMessageCallback} from "../../redux/dialogsPage_reducer";


export type DialogsPropTypes = {
    arrayDialogs: Array<DialogItemPropTypes>,
    arrayMessage: Array<MessagePropTypes>,
    messageDataForNewPost: string,
    changeNewMessageCallBack: (newMessage: string) => void,
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: DialogsPropTypes) => {


    const addMessage = () => {
        props.dispatch(addMessageAC());
    }

    const changeNewMessageCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const message=e.currentTarget.value;
        props.dispatch(changeNewMessageCallback(message));
    }




    const dialogsElements = props.arrayDialogs.map(d => <DialogItem key={d.id} name={d.name}
                                                                  id={d.id}
                                                                  avatar={d.avatar}/>);//тут должен быть тип!
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
}