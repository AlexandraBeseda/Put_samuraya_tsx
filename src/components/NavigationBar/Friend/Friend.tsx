import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Friend.module.css"
import {HumanPropTypes} from "../../../redux/friendsNavigationBar_reducer";


export const Friend = (props: HumanPropTypes) => {
    return (
        <div className={s.wrapper}>
            <div><img className={s.avaImg} src={props.avatar} alt="avatar"/></div>
            <div><NavLink to={"/friend/" + props.id}>{props.name}</NavLink></div>
        </div>
    );
}