import {getAuthUserData} from "./auth_reducer";

import {ThunkAction} from "redux-thunk";
import {ActionsType, AppStateType} from "./reduxStore";


const initialState = {
    initialized: false,
};

export type appPropTypes = {
    initialized: boolean,
};

export const initializedSuccess = () => {
    return {
        type: "INITIALIZED_SUCCESS",
    } as const
}

export type AppReducerActionTypes = ReturnType<typeof initializedSuccess>;

export const app_reducer = (state: appPropTypes = initialState, action: AppReducerActionTypes): appPropTypes => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {...state, initialized: true}
        default:
            return state
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;

export const initializeApp = (): ThunkType =>
    (dispatch) => {
        Promise.all([dispatch(getAuthUserData())])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }

