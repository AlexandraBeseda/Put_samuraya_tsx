import {ActionsType, AppStateType} from "./reduxStore";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk"

export const setAuthUserData = (userID: string | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        payload: {userID, login, email, isAuth},
    } as const
}
export const setAuthErrorServer = (authError: string) => {
    return {
        type: "SET_AUTH_ERROR_RES_FROM_SERVER",
        authError,
    } as const
}

export type AuthPropTypes = {
    userId: null | string,
    login: null | string,
    email: null | string,
    isAuth: boolean,
    authError: string | null,
};

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    authError: null,
};

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
type ThunkReturnType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const auth_reducer = (state: AuthPropTypes = initialState, action: ActionsType): AuthPropTypes => {

    switch (action.type) {
        case "SET_USER_DATA" : {
            return {...state, ...action.payload}
        }
        case "SET_AUTH_ERROR_RES_FROM_SERVER": {
            return {...state, authError: action.authError}
        }
        default:
            return state
    }
}


export const getAuthUserData = (): ThunkType =>
    (dispatch) => {
        authAPI.authMe()
            .then(res => {
                debugger
                if (res.resultCode === 0) {
                    let {id, login, email} = res.data
                    dispatch(setAuthUserData(id, login, email, true))
                    debugger
                }
            })
    }

export const logIn = (email: string, password: string, rememberMe: boolean)
    : ThunkType =>
    (dispatch) => {
        authAPI.logIn(email, password, rememberMe)
            .then((res) => {
                debugger
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                    debugger
                } else {
                    let errorMessage = res.data.messages.lenght > 0 ? res.data.messages[0] : "Some error with auth";
                    dispatch(setAuthErrorServer(errorMessage))
                }
            })
    }

export const logOut = (): ThunkType =>
    (dispatch) => {
        authAPI.logOut()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }