import React, {ChangeEvent} from "react";

import {addPostAC, changeNewTextCallbackAC} from "../../../../redux/mainContent_reducer";
import {ActionsType, ReducersStoreType} from "../../../../redux/reduxStore";
import {Posts} from "./Posts";


export type PostsDataArrayPropTypes = {

    dispatch: (action: ActionsType) => void,
    state: ReducersStoreType
}

export const PostsContainer = (props: PostsDataArrayPropTypes) => {

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
}