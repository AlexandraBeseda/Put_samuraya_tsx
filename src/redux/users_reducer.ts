import {ActionsType} from "./reduxStore";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

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
export type UserTypes = {
    followed: boolean
    id: number
    name: string
    photos: {
        small: string | null,
        large: string | null }
    status: string | null
    uniqueUrlName: string | null
};

export type UsersPropTypes = {
    users: Array<UserTypes>
};

const initialState: UsersPropTypes = {
    users: []
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
            debugger
            return {...state, users: [...state.users, ...action.newUsers]}
        }
        default:
            return state
    }
}