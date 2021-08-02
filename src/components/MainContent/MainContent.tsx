import React from "react";
import {Posts} from "./Posts/lPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {NewPostType} from "./Posts/lPosts/NewPost/NewPost";
import {ActionsType} from "../../redux/store";

export type MainContentPropTypes = {
    arrayPosts: Array<NewPostType>,
   /* addPost: () => void,*/
    textForNewPost:string,
/*
    changeNewTextCallback:(newText:string)=>void,
*/
    dispatch:(action:ActionsType)=>void,
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