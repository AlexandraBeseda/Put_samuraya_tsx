import React, {ChangeEvent} from "react";
import {addMessageAC, changeNewMessageCallback,} from "../../redux/dialogsPage_reducer";
import {ActionsType, ReducersStoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";


export type DialogsPropTypes = {

    state: ReducersStoreType
    dispatch: (action: ActionsType) => void
}

export const DialogsContainer = (props: DialogsPropTypes) => {

    const addMessage = () => {
        props.dispatch(addMessageAC());
    }

    const changeNewMessageCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const message = e.currentTarget.value;
        props.dispatch(changeNewMessageCallback(message));
    }

    return (
        <Dialogs
            addMessage={addMessage}
            changeNewMessageCallBack={changeNewMessageCallBack}
            arrayDialogs={props.state.dialogsPage.dialogsData}
            arrayMessage={props.state.dialogsPage.messagesDataPosts}
            messageDataForNewPost={props.state.dialogsPage.messageDataNewPost}/>
    );
}