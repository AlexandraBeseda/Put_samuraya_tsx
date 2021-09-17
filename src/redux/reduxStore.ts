import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPost, changeNewTextCallback, mainContent_reducer, setUserProfile} from "./mainContent_reducer";
import {addMessage, changeNewMessageCallback, dialogsPage_reducer} from "./dialogsPage_reducer";
import {friendsNavigationBar_reducer} from "./friendsNavigationBar_reducer";
import {
    followSuccess,
    setCurrentPage, setStatus,
    setTotalUsersCount,
    setUsers, toggleFollowingFetching,
    toggleIsFetching,
    unFollowSuccess,
    users_reducer
} from "./users_reducer";
import {auth_reducer, setAuthUserData} from "./auth_reducer";
import thunkMiddleware from "redux-thunk"


export type ActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof changeNewTextCallback>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof changeNewMessageCallback>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingFetching>
    | ReturnType<typeof setStatus>;

const rootReducer = combineReducers(
    {
        mainContent: mainContent_reducer,
        dialogsPage: dialogsPage_reducer,
        navigationBar: friendsNavigationBar_reducer,
        usersPage: users_reducer,
        auth: auth_reducer,
    }
)
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>

//создали встроенный объект store в redux, помним про типизацию

// @ts-ignore
window.store = store;