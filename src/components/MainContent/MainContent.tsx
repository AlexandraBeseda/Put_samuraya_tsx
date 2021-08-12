import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/lPosts/PostsContainer";


export type MainContentPropTypes = {}

export const MainContent:React.FC<MainContentPropTypes> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer />
        </div>
    );
}


/*
export type MainContentPropTypes = {
   dispatch: (action: ActionsType) => void,
    state: AppStateType
}

export const MainContent:React.FC<MainContentPropTypes> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer state={props.state}
                            dispatch={props.dispatch}/>
        </div>
    );
}*/
