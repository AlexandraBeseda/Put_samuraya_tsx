import React from "react";
import {Posts} from "./Posts/lPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../redux/reduxStore";
import {NewPostType} from "../../redux/mainContent_reducer";


export type MainContentPropTypes = {
    arrayPosts: Array<NewPostType>,
    textForNewPost: string,
    dispatch: (action: ActionsType) => void,
}

export const MainContent = (props: MainContentPropTypes) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts arrayPosts={props.arrayPosts}
                   dispatch={props.dispatch}
                   textForNewPost={props.textForNewPost}
            />
        </div>
    );
}