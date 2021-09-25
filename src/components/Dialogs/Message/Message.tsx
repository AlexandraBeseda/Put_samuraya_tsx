import s from "./Message.module.css";
import React from "react";

export type MessagePropTypes = {
    id: number,
    message: string
}
export const Message = (props: MessagePropTypes) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    );
}