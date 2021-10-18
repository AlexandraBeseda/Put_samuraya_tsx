import {ActionsType, AppStateType} from "./reduxStore";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk"

export const setAuthUserData = (userId: string | undefined, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "samuray/auth/SET_USER_DATA",
        payload: {userId, login, email, isAuth},
    } as const
}
export const setAuthErrorServer = (authError: string) => {
    return {
        type: "samuray/auth/SET_AUTH_ERROR_RES_FROM_SERVER",
        authError,
    } as const
}

export type AuthPropTypes = {
    userId: undefined | string,
    login: null | string,
    email: null | string,
    isAuth: boolean,
    authError: string | null,
};

const initialState = {
    userId: undefined,
    login: null,
    email: null,
    isAuth: false,
    authError: null,
};

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
//type ThunkReturnType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export type AuthReducerActionsType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setAuthErrorServer>;

export const auth_reducer = (state: AuthPropTypes = initialState, action: AuthReducerActionsType): AuthPropTypes => {

    switch (action.type) {
        case "samuray/auth/SET_USER_DATA" : {
            debugger
            return {...state, ...action.payload}
        }
        case "samuray/auth/SET_AUTH_ERROR_RES_FROM_SERVER": {
            return {...state, authError: action.authError}
        }
        default:
            return state
    }
}


export const getAuthUserData = (): ThunkType =>
    async (dispatch) => {
        let response = await authAPI.authMe();
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(setAuthUserData(id, login, email, true))
        }
    }

export const logIn = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch) => {
        let response = await authAPI.logIn(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let errorMessage = response.data.messages.lenght > 0 ? response.data.messages[0] : "Some error with auth";
            dispatch(setAuthErrorServer(errorMessage))
        }
    }

export const logOut = (): ThunkType =>
    async (dispatch) => {
        let response = await authAPI.logOut();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(undefined, null, null, false))
        }
    }