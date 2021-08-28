import {ActionsType} from "./reduxStore";

export const follow = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}
export const unFollow = (userID: number) => {
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
};

const initialState: UsersPropTypes = {
    users: [],
    // totalCount:
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
        default:
            return state
    }
}