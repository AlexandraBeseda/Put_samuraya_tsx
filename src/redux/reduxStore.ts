import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {mainContent_reducer, MainContentReducerActionsType} from "./mainContent_reducer";
import {dialogsPage_reducer, DialogsReducerActionsType} from "./dialogsPage_reducer";
import {friendsNavigationBar_reducer} from "./friendsNavigationBar_reducer";
import {UserReducerActionsType, users_reducer} from "./users_reducer";
import {auth_reducer, AuthReducerActionsType} from "./auth_reducer";
import thunkMiddleware from "redux-thunk"
import {app_reducer, AppReducerActionTypes} from "./app_reducer";


export type ActionsType =
    AuthReducerActionsType
    | UserReducerActionsType
    | MainContentReducerActionsType
    | DialogsReducerActionsType
    | AppReducerActionTypes;


const rootReducer = combineReducers(
    {
        mainContent: mainContent_reducer,
        dialogsPage: dialogsPage_reducer,
        navigationBar: friendsNavigationBar_reducer,
        usersPage: users_reducer,
        auth: auth_reducer,
        app: app_reducer,
    }
)
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//export const store =  createStore(rootReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)));

//создали встроенный объект store в redux, помним про типизацию

// @ts-ignore
window.store = store;