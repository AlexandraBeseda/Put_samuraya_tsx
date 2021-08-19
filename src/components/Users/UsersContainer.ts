import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users"
import {followAC, setUsersAC, unFollowAC, UserTypes} from "../../redux/users_reducer";


type MapStatePropTypes = {
    users: UserTypes[]
}

let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        users: state.usersPage.users
    }
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setUsers: (newUsers: UserTypes[]) => void
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
        setUsers: (newUsers:Array <UserTypes>) => {
            debugger

            dispatch(setUsersAC(newUsers))
        }
    }
}

export const UsersContainer = connect(MapStateToProps, mapDispatchToProps)(Users)