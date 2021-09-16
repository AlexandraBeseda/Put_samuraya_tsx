import {ActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export const setAuthUserData = (userID: number, login: string, email: string) => {
    return {
        type: "SET_USER_DATA",
        data: {userID, login, email},
    } as const
}

export type AuthPropTypes = {
    userId: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean,
};

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

export const auth_reducer = (state: AuthPropTypes = initialState, action: ActionsType): AuthPropTypes => {

    switch (action.type) {
        case "SET_USER_DATA" : {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}


export const loginThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.login()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}