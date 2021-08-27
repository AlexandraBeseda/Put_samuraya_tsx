import {ActionsType} from "./reduxStore";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";


export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}
export const setUsersAC = (newUsers: UserTypes[]) => {
    return {
        type: SET_USERS,
        newUsers
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setTotalUsersCountAC = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
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
};

const initialState: UsersPropTypes = {
    users: [],
    // totalCount:
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
};

export const users_reducer = (state: UsersPropTypes = initialState, action: ActionsType): UsersPropTypes => {

    switch (action.type) {
        case FOLLOW : {
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
        case UNFOLLOW: {
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
        case SET_USERS: {
            return {...state, users: action.newUsers}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state
    }
}