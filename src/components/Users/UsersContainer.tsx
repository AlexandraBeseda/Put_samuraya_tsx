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


class UsersContainer extends React.Component<UsersConnectMapPropTypes> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
}

export type UsersConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

/*export default connect(MapStateToProps,
    {
        setCurrentPage,
        toggleFollowingFetching,
        getUsers: getUsersThunkCreator,
        follow:followThunkCreator,
        unFollow:unFollowThunkCreator
    })(UsersContainer);*/

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

