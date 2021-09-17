import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/mainContent_reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropTypes = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void,
}


export const ProfileInfo: React.FC<ProfileInfoPropTypes> = (props) => {
    if (!props.profile) {
        return (<Preloader/>)
    }

    return (
        <div>
            {/*<div>
                <img alt="#" className={s.themeImg}
                     src='https://st2.depositphotos.com/1021014/7859/i/600/depositphotos_78597430-stock-photo-nature-background-panorama.jpg'/>
            </div>*/}
            <div className={s.descriptionBlock}>

                <img src={props.profile.photos.large} alt=""/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <div>fullName: {props.profile.fullName}</div>
                <div>aboutMe: {props.profile.aboutMe}</div>
                <div>lookingForAJob:{props.profile.lookingForAJob}</div>
                <div>github: {props.profile.contacts.github}</div>
            </div>
        </div>
    );
}