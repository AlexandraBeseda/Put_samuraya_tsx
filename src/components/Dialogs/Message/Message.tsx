import s from "./Message.module.css";
import React, {ChangeEvent} from "react";

export type MessagePropTypes = {
    id: number,
    message: string
    messageDataForNewPost:string,
    addMessage:()=>void
    changeNewMessageCallBack:(newMessage:string)=>void
}
export const Message = (props: MessagePropTypes) => {
    const addMessage = () => {
        props.addMessage();
    }

    const changeNewMessageCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageCallBack(e.currentTarget.value);
    }

    return (
        <div>
            <div className={s.message}>{props.message}</div>
            {/*<textarea ref={newMessage}></textarea>*/}
            <textarea  onChange={changeNewMessageCallBack} value={props.messageDataForNewPost} />
            <button onClick={addMessage}>Add Message</button>
        </div>

    );
}