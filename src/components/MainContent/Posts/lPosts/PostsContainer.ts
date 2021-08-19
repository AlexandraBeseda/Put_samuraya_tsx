import  {ChangeEvent} from "react";
import {addPostAC, changeNewTextCallbackAC, NewPostType} from "../../../../redux/mainContent_reducer";
import { AppStateType} from "../../../../redux/reduxStore";
import {Posts} from "./Posts";
import {Dispatch} from "redux";
import {connect} from "react-redux";



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


let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeNewTextCallback: (e: ChangeEvent<HTMLTextAreaElement>) => {
            const message = e.currentTarget.value;
            dispatch(changeNewTextCallbackAC(message));
        }
    }
}

export const PostsContainer=connect(mapStateToProps,mapDispatchToProps)(Posts);



/*
export type PostsDataArrayPropTypes = {

    dispatch: (action: ActionsType) => void,
    state: AppStateType
}

export const PostsContainer:React.FC<PostsDataArrayPropTypes> = (props) => {

    const addPost = () => {
        props.dispatch(addPostAC());
    }

    const changeNewTextCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value;
        props.dispatch(changeNewTextCallbackAC(text));
    }

    return (
        <Posts arrayPosts={props.state.mainContent.postsData}
               addPost={addPost}
               changeNewTextCallback={changeNewTextCallback}
               textForNewPost={props.state.mainContent.textNewPost}/>

    )
}*/
