import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ReducersStoreType} from "../../redux/reduxStore";
import {PostsContainer} from "./Posts/lPosts/PostsContainer";


export type MainContentPropTypes = {

   dispatch: (action: ActionsType) => void,
    state: ReducersStoreType

}

export const MainContent = (props: MainContentPropTypes) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer state={props.state}
                            dispatch={props.dispatch}/>


        </div>
    );
}