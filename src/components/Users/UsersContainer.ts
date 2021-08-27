import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users"
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserTypes
} from "../../redux/users_reducer";


type MapStatePropTypes = {
    users: UserTypes[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setUsers: (newUsers: UserTypes[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (count: number) => void,

}

export type UsersConnectMapPropTypes = MapStatePropTypes & MapDispatchToPropsType;

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (newUsers: Array<UserTypes>) => {
            dispatch(setUsersAC(newUsers))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        },
    }
}

export const UsersContainer = connect(MapStateToProps, mapDispatchToProps)(Users)