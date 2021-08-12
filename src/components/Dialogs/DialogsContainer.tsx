import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    addMessageAC, changeNewMessageCallbackAC,
    DialogItemPropTypes,
    MessagePropTypes,
} from "../../redux/dialogsPage_reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";

type MapStatePropTypes = {
    dialogsData: Array<DialogItemPropTypes>,
    messagesDataPosts: Array<MessagePropTypes>,
    messageDataNewPost: string,
}

let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesDataPosts: state.dialogsPage.messagesDataPosts,
        messageDataNewPost: state.dialogsPage.messageDataNewPost
    }
}

type MapDispatchToPropsType = {
    addMessage: () => void,
    changeNewMessageCallBack: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export type DialogsConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        changeNewMessageCallBack: (e: ChangeEvent<HTMLTextAreaElement>) => {
            const message = e.currentTarget.value;
            dispatch(changeNewMessageCallbackAC(message));
        }
    }
}

export const DialogsContainer = connect(MapStateToProps, mapDispatchToProps)(Dialogs)


/*

/*export type DialogsPropTypes = {

     state: AppStateType
     dispatch: (action: ActionsType) => void
}

export const DialogsContainer:React.FC<DialogsPropTypes> = (props) => {

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
}*/
