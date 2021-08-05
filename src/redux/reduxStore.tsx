import React from "react";
import {combineReducers, createStore} from "redux";
import {addPostAC, changeNewTextCallbackAC, mainContent_reducer} from "./mainContent_reducer";
import {addMessageAC, changeNewMessageCallback, dialogsPage_reducer} from "./dialogsPage_reducer";
import {friendsNavigationBar_reducer} from "./friendsNavigationBar_reducer";


export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextCallbackAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeNewMessageCallback>;


const reducers = combineReducers(
    {
        mainContent: mainContent_reducer,
        dialogsPage: dialogsPage_reducer,
        navigationBar: friendsNavigationBar_reducer
    }
)
export const store = createStore(reducers);

export type ReducersStoreType = ReturnType<typeof reducers>

//создали встроенный объект store в redux, помним про типизацию

// @ts-ignore
window.store = store;