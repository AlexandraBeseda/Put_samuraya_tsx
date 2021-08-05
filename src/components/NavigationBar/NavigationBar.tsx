import React from "react";
import s from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";
import {Friend} from "./Friend/Friend";
import { HumanPropTypes} from "../../redux/friendsNavigationBar_reducer";

type NavigationBarPropTypes = {
    arrayFriends: Array<HumanPropTypes>
}

export const NavigationBar = (props: NavigationBarPropTypes) => {

    let friendElements = props.arrayFriends.map(f => <Friend
        key={f.id}
        id={f.id}
        name={f.name}
        avatar={f.avatar}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="dialogsPage" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.forFriendsBar}>
                <h1>Friends</h1>
                <div>{friendElements}</div>
            </div>

        </nav>
    );
}