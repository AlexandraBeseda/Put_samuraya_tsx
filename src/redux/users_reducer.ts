import {Dispatch} from "redux";
import {userAPI} from "../api/api";


export const setStatus = (status: string) => {
    return {
        type: "samuray/users/SET_STATUS",
        status
    } as const
}

export const followSuccess = (userID: number) => {
    return {
        type: "samuray/users/FOLLOW",
        userID
    } as const
}
export const unFollowSuccess = (userID: number) => {
    return {
        type: "samuray/users/UNFOLLOW",
        userID
    } as const
}
export const setUsers = (newUsers: UserTypes[]) => {
    return {
        type: "samuray/users/SET_USERS",
        newUsers
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "samuray/users/SET_CURRENT_PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (count: number) => {
    return {
        type: "samuray/users/SET_TOTAL_USERS_COUNT",
        count
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "samuray/users/TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
export const toggleFollowingFetching = (toggle: boolean, userId: number) => {
    return {
        type: "samuray/users/TOGGLE_FOLLOWING_IS_FETCHING",
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
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

export type UserReducerActionsType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingFetching>;


export const users_reducer = (state: UsersPropTypes = initialState, action: UserReducerActionsType): UsersPropTypes => {

    switch (action.type) {
        case "samuray/users/FOLLOW" : {
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
        case "samuray/users/UNFOLLOW": {
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
        case "samuray/users/SET_USERS": {
            return {...state, users: action.newUsers}
        }
        case "samuray/users/SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "samuray/users/SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        case "samuray/users/TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "samuray/users/TOGGLE_FOLLOWING_IS_FETCHING": {
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

export const getUsersThunkCreator = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        //TODO 81 lesson, при перерисовке сохраням данную страницу в стэйт
        dispatch(setCurrentPage(page));
        let response = await userAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
}

export const followThunkCreator = (userID: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingFetching(true, userID));
        let response = await userAPI.followUser(userID);
        if (response.resultCode === 0) {
            dispatch(followSuccess(userID))
        }
        dispatch(toggleFollowingFetching(false, userID));
    }
}

export const unFollowThunkCreator = (userID: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingFetching(true, userID));
        let response = await userAPI.unFollowUser(userID);
        if (response.resultCode === 0) {
            dispatch(unFollowSuccess(userID))
        }
        dispatch(toggleFollowingFetching(false, userID));
    }
}