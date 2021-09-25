
import React from "react";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";
import {LoginForm} from "./LoginForm";


const Login: React.FC<LoginContainerPropTypes> = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>

    );
}


export type LoginContainerPropTypes = MapDispatchToPropsType & MapStatePropTypes;

export type MapDispatchToPropsType = {
    logIn: (email: string, password: string, rememberMe: boolean) => void,
}

type MapStatePropTypes = {
    isAuth: boolean,
}

let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        isAuth: state.auth.isAuth,

    }
}
export default connect(MapStateToProps, {logIn})(Login)