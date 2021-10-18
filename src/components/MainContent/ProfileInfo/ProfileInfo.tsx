import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/mainContent_reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

type ProfileInfoPropTypes = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void,
}


export const ProfileInfo: React.FC<ProfileInfoPropTypes> = ({profile, updateStatus, status}) => {
    if (!profile) {
        return (<Preloader/>)
    }

    return (
        <div>
            <div className={s.descriptionBlock}>

                <img src={profile.photos.large} alt=""/>

                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>

                <div>fullName: {profile.fullName}</div>
                <div>aboutMe: {profile.aboutMe}</div>
                <div>lookingForAJob:{profile.lookingForAJob}</div>
                <div>github: {profile.contacts.github}</div>
            </div>
        </div>
    );
}