import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogItemPropTypes} from "../../../redux/store";

export const DialogItem = (props: DialogItemPropTypes) => {
    return (

        <div>

            <div className={`${s.dialog} ${s.active}`}>
                <NavLink to={"/dialogsPage/" + props.id}>
                    <div className={s.user}>
                        <div><img className={s.userAvatar} src={props.avatar} alt="avatar"/></div>
                        <div className={s.userName}>{props.name}</div>

                    </div>

                </NavLink>

            </div>
        </div>
    );
}