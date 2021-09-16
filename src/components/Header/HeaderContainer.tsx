import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Header} from "./Header";
import {AuthPropTypes, loginThunkCreator, setAuthUserData} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component<HeaderConnectMapPropTypes> {

    componentDidMount() {
        this.props.login();
    }

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        );
    }
}

type MapStatePropTypes = {
    authUsersData: AuthPropTypes,

}

let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        authUsersData: state.auth
    }
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, login: string, email: string,) => void,
    login:()=>void
}

export type HeaderConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

export default connect(MapStateToProps, {setAuthUserData, login:loginThunkCreator})(HeaderContainer)