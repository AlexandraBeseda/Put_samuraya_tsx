import React from "react";
import {MainContent} from "../MainContent";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../../redux/mainContent_reducer";
import {AppStateType} from "../../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

//после типизации withRouter изменили тип с MainContentConnectMapPropTypes на PropsType
//т.к. добавились пропсы от withRouter
class MainContentContainer extends React.Component <PropsType> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = JSON.stringify(2);
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (<div>
            <MainContent {...this.props} profile={this.props.usersProfiles}/>
        </div>)
    }
}

type MapStatePropTypes = {
    usersProfiles: ProfileType | null;
}
type MapDispatchToPropsType = {
    setUserProfile: (userProfiles: ProfileType) => void,
}

//withRouter типизация
type PathParamsType = {
    userId: string;
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


export default connect(MapStateToProps, {setUserProfile})(WithURLDataContainerComponent);