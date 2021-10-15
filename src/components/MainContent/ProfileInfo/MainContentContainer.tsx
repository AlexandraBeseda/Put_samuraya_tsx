import React from "react";
import {MainContent} from "../MainContent";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusTC,
    ProfileType,
    setUserProfile, updateUserStatusTC
} from "../../../redux/mainContent_reducer";
import {AppStateType} from "../../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

//после типизации withRouter изменили тип с MainContentConnectMapPropTypes на PropsType
//т.к. добавились пропсы от withRouter
class MainContentContainer extends React.Component <PropsType> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        //если тут не определил
        if (!userId) {
            //если тут не определил

            userId = this.props.authorizedUserID;
            if(!userId){
                //если тут не определил

                this.props.history.push('/authMe')
            }

        }
            userId && this.props.getUsersProfile(userId);
            userId && this.props.getUserStatus(userId);
    }

    render() {

        return (<div>
            <MainContent {...this.props}
                         profile={this.props.usersProfiles}
                         status={this.props.status}
                         updateStatus={this.props.updateUserStatus}/>
        </div>)
    }
}

type MapStatePropTypes = {
    usersProfiles: ProfileType | null,
    status: string,
    authorizedUserID: undefined | string,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    setUserProfile: (userProfiles: ProfileType) => void,
    getUsersProfile: (userID: string) => void,
    getUserStatus: (userID: string) => void,
    updateUserStatus: (status: string) => void,
}

//withRouter типизация
type PathParamsType = {
    userId: string|undefined,
}

let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        usersProfiles: state.mainContent.usersProfiles,
        status: state.mainContent.status,
        authorizedUserID: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export type MainContentConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;
//withRouter типизация
type PropsType = RouteComponentProps<PathParamsType> & MainContentConnectMapPropTypes;

//withRouter возвращает новую компоненту!
//это метод, который позволяет следить за изменением URL
/*let WithURLDataContainerComponent = withRouter(MainContentContainer)


export default withAuthRedirect(connect(MapStateToProps, {
    setUserProfile,
    getUsersProfile: getUserProfileThunkCreator
})(WithURLDataContainerComponent));*/


export default compose<React.ComponentType>(
    connect(MapStateToProps, {
        setUserProfile,
        getUsersProfile: getUserProfileThunkCreator,
        getUserStatus: getUserStatusTC,
        updateUserStatus: updateUserStatusTC
    }),
    withRouter,
    withAuthRedirect
)(MainContentContainer)