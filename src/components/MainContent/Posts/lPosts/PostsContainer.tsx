import React from "react";
import {addPost, NewPostType} from "../../../../redux/mainContent_reducer";
import {AppStateType} from "../../../../redux/reduxStore";
import {Posts} from "./Posts";

import {connect} from "react-redux";
import {compose} from "redux";

class PostsContainer extends React.Component<PostsConnectMapPropTypes> {

    render() {
        return (
            <>
                <Posts addPost={this.props.addPost}
                       postsData={this.props.postsData}/>
            </>
        );
    }
}

type MapDispatchToPropsType = {
    addPost: () => void,
}
type MapStatePropTypes = {
    postsData: Array<NewPostType>
}

export type PostsConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        postsData: state.mainContent.postsData
    }
}


/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeNewTextCallback: (e: ChangeEvent<HTMLTextAreaElement>) => {
            const post = e.currentTarget.value;
            dispatch(changeNewTextCallbackAC(post));
        }
    }
}*/

/*export default connect(mapStateToProps, {addPost, changeNewTextCallback})(PostsContainer);*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost})
)(PostsContainer);

