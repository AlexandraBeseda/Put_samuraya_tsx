import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/lPosts/PostsContainer";
import {ProfileType} from "../../redux/mainContent_reducer";

type MainContentPropTypes = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void,
}

export const MainContent: React.FC<MainContentPropTypes> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    );
}
