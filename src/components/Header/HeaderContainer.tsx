import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Header} from "./Header";
import {AuthPropTypes, logOut, setAuthUserData} from "../../redux/auth_reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component<HeaderConnectMapPropTypes> {



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
    logOut: () => void
}

export type HeaderConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

/*export default connect(MapStateToProps, {setAuthUserData, authMe:getAuthUserData})(HeaderContainer)*/


export default compose<React.ComponentType>(
    connect(MapStateToProps,
        {setAuthUserData,logOut}))
(HeaderContainer);
