import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {
    followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingFetching, unFollowThunkCreator,

    UserTypes
} from "../../redux/users_reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users_selectors";


class UsersContainer extends React.Component<UsersConnectMapPropTypes> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
        //TODO: тут ли дожна быть устанановлена пагинация?
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       users={this.props.users}
                       setCurrentPage={this.props.setCurrentPage}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}
                       getUsers={this.props.getUsers}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                /></>)
    }
}

type MapStatePropTypes = {
    users: UserTypes[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}

let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
}

export type UsersConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

export default compose<React.ComponentType>(
    connect(MapStateToProps,
        {
            setCurrentPage,
            toggleFollowingFetching,
            getUsers: getUsersThunkCreator,
            follow: followThunkCreator,
            unFollow: unFollowThunkCreator
        }),
)(UsersContainer)

