import React from "react";
import {connect} from "react-redux";
import {
    addMessage,

    DialogItemPropTypes,
    MessagePropTypes,
} from "../../redux/dialogsPage_reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component<DialogsConnectMapPropTypes> {

    render() {
        return (
            <>
                <Dialogs dialogsData={this.props.dialogsData}
                         messagesDataPosts={this.props.messagesDataPosts}
                         addMessage={this.props.addMessage}/>
            </>
        );
    }
}

type MapStatePropTypes = {
    dialogsData: Array<DialogItemPropTypes>,
    messagesDataPosts: Array<MessagePropTypes>,
}

let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesDataPosts: state.dialogsPage.messagesDataPosts,
    }
}

type MapDispatchToPropsType = {
    addMessage: (newMessage:string) => void,
}

export type DialogsConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

/*export default withAuthRedirect(connect(MapStateToProps, {addMessage, changeNewMessageCallback})(DialogsContainer))*/

export default compose<React.ComponentType>(
    connect(MapStateToProps, {addMessage}),
    withAuthRedirect
)(DialogsContainer)