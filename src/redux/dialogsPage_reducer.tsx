import React from "react";
import {ActionsType, DialogsPropTypes, MessagePropTypes} from "./redux";

const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_CALLBACK = "CHANGE_NEW_MESSAGE_CALLBACK";

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}
export const changeNewMessageCallback = (newMessage: string) => {
    return {
        type: CHANGE_NEW_MESSAGE_CALLBACK,
        newMessage: newMessage
    } as const
}

export const dialogsPage_reducer = (state:DialogsPropTypes, action:ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagePropTypes = {
                id: 6,
                message: state.messageDataNewPost
            };
            state.messagesDataPosts.push(newMessage);
            state.messageDataNewPost = "";
            break;
        case CHANGE_NEW_MESSAGE_CALLBACK:
            state.messageDataNewPost = action.newMessage;
            break;
    }
    return state;
}

