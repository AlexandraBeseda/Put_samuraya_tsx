import React from "react";
import {connect} from "react-redux";
import {
    addMessage,
    changeNewMessageCallback,
    DialogItemPropTypes,
    MessagePropTypes,
} from "../../redux/dialogsPage_reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";

class DialogsContainer extends React.Component<DialogsConnectMapPropTypes> {

    render() {
        return (
            <>
                <Dialogs dialogsData={this.props.dialogsData}
                       messagesDataPosts={this.props.messagesDataPosts}
                       messageDataNewPost={this.props.messageDataNewPost}
                       addMessage={this.props.addMessage}
                       changeNewMessageCallback={this.props.changeNewMessageCallback}/>
            </>
        );
    }
}

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
    changeNewMessageCallback: (newMessage: string) => void,
}

export type DialogsConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

export default connect(MapStateToProps, {addMessage, changeNewMessageCallback})(DialogsContainer)