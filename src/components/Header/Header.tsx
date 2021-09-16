import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderConnectMapPropTypes} from "./HeaderContainer";

export const Header: React.FC<HeaderConnectMapPropTypes> = (props) => {
    // debugger
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwmALuU19xPRQx_5_ZQK8QqG5HpA79AD5Iw&usqp=CAU'
                alt="nothingSpecial"/>
            <div className={s.loginBlock}>
                {props.authUsersData.isAuth ? props.authUsersData.login : <NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    );
}
