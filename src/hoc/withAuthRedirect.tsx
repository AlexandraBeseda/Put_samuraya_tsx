import React, {ComponentType} from "react";
import {AppStateType} from "../redux/reduxStore";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type MapStatePropTypes = {
    isAuth: boolean,
}

const MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropTypes) => {

        let {isAuth, ...restProps} = props;

        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }

        return <Component {...restProps as T}/>

    }
    let ConnectedRedirectComponent = connect(MapStateToProps)(RedirectComponent);
    return ConnectedRedirectComponent
}