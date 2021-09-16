import React from "react";
import {MainContent} from "../MainContent";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, ProfileType, setUserProfile} from "../../../redux/mainContent_reducer";
import {AppStateType} from "../../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

//после типизации withRouter изменили тип с MainContentConnectMapPropTypes на PropsType
//т.к. добавились пропсы от withRouter
class MainContentContainer extends React.Component <PropsType> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = JSON.stringify(2);
        }
        this.props.getUsersProfile(userId);
    }

    render() {

        return (<div>
            <MainContent {...this.props} profile={this.props.usersProfiles}/>
        </div>)
    }
}

type MapStatePropTypes = {
    usersProfiles: ProfileType | null,

}
type MapDispatchToPropsType = {
    setUserProfile: (userProfiles: ProfileType) => void,
    getUsersProfile: (userID: string) => void,
}

//withRouter типизация
type PathParamsType = {
    userId: string,
}

let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        usersProfiles: state.mainContent.usersProfiles,

    }
}

export type MainContentConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;
//withRouter типизация
type PropsType = RouteComponentProps<PathParamsType> & MainContentConnectMapPropTypes;

//withRouter возвращает новую компоненту!
//это метод, который позволяет следить за изменением URL
let WithURLDataContainerComponent = withRouter(MainContentContainer)


export default withAuthRedirect(connect(MapStateToProps, {
    setUserProfile,
    getUsersProfile: getUserProfileThunkCreator
})(WithURLDataContainerComponent));