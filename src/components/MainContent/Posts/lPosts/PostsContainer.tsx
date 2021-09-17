import React, {ChangeEvent} from "react";
import {addPost, changeNewTextCallback, NewPostType} from "../../../../redux/mainContent_reducer";
import {AppStateType} from "../../../../redux/reduxStore";
import {Posts} from "./Posts";

import {connect} from "react-redux";
import {compose} from "redux";

class PostsContainer extends React.Component<PostsConnectMapPropTypes> {

    render() {
        return (
            <>
                <Posts addPost={this.props.addPost}
                       postsData={this.props.postsData}
                       changeNewTextCallback={this.props.changeNewTextCallback}
                       textNewPost={this.props.textNewPost}/>
            </>
        );
    }
}

type MapDispatchToPropsType = {
    addPost: () => void,
    changeNewTextCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
type MapStatePropTypes = {
    textNewPost: string
    postsData: Array<NewPostType>
}

export type PostsConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        textNewPost: state.mainContent.textNewPost,
        postsData: state.mainContent.postsData
    }
}


/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeNewTextCallback: (e: ChangeEvent<HTMLTextAreaElement>) => {
            const message = e.currentTarget.value;
            dispatch(changeNewTextCallbackAC(message));
        }
    }
}*/

/*export default connect(mapStateToProps, {addPost, changeNewTextCallback})(PostsContainer);*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, changeNewTextCallback})
)(PostsContainer);

