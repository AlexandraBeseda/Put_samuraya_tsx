import {ActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export const setStatus = (status: string) => {
    return {
        type: "SET_STATUS",
        status
    } as const
}


export const followSuccess = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}
export const unFollowSuccess = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}
export const setUsers = (newUsers: UserTypes[]) => {
    return {
        type: "SET_USERS",
        newUsers
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (count: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        count
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
export const toggleFollowingFetching = (toggle: boolean, userId: number) => {
    return {
        type: "TOGGLE_FOLLOWING_IS_FETCHING",
        userId,
        toggle,
    } as const
}
export type UserTypes = {
    followed: boolean
    id: number
    name: string
    photos: {
        small: string | null,
        large: string | null
    }
    status: string | null
    uniqueUrlName: string | null
};

export type UsersPropTypes = {
    users: Array<UserTypes>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
};

const initialState: UsersPropTypes = {
    users: [],
    // totalCount:
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

export const users_reducer = (state: UsersPropTypes = initialState, action: ActionsType): UsersPropTypes => {

    switch (action.type) {
        case "FOLLOW" : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        }
        case "SET_USERS": {
            return {...state, users: action.newUsers}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_FOLLOWING_IS_FETCHING": {
            return {
                ...state,
                followingInProgress: action.toggle
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));

            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const followThunkCreator = (userID: number) => {
    return (dispatch: Dispatch) => {
       dispatch(toggleFollowingFetching(true, userID));

        userAPI.followUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                   dispatch(followSuccess(userID))
                }
            })
        dispatch(toggleFollowingFetching(false, userID));
    }
}

export const unFollowThunkCreator = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingFetching(true, userID));
        userAPI.unFollowUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(userID))
                }
            })
        dispatch(toggleFollowingFetching(false, userID));
    }
}