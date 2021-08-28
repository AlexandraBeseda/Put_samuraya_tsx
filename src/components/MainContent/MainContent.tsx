import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/lPosts/PostsContainer";
import {ProfileType} from "../../redux/mainContent_reducer";

type MainContentPropTypes = {
    profile: ProfileType | null
}

export const MainContent: React.FC<MainContentPropTypes> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    );
}
