import React from "react";
import {MainContent} from "../MainContent";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../../redux/mainContent_reducer";
import {AppStateType} from "../../../redux/reduxStore";


class MainContentContainer extends React.Component <MainContentConnectMapPropTypes>/* тут должен быть тип пропс*/ {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
    usersProfiles: ProfileType|null
}
type MapDispatchToPropsType = {
    setUserProfile: (userProfiles: ProfileType) => void,
}
let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        usersProfiles: state.mainContent.usersProfiles
    }
}

export type MainContentConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;


export default connect(MapStateToProps, {setUserProfile})(MainContentContainer);