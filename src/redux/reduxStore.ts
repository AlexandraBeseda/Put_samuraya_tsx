import {combineReducers, createStore} from "redux";
import {addPost, changeNewTextCallback, mainContent_reducer, setUserProfile} from "./mainContent_reducer";
import {addMessage, changeNewMessageCallback, dialogsPage_reducer} from "./dialogsPage_reducer";
import {friendsNavigationBar_reducer} from "./friendsNavigationBar_reducer";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow, users_reducer
} from "./users_reducer";


export type ActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof changeNewTextCallback>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof changeNewMessageCallback>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>;


const rootReducer = combineReducers(
    {
        mainContent: mainContent_reducer,
        dialogsPage: dialogsPage_reducer,
        navigationBar: friendsNavigationBar_reducer,
        usersPage: users_reducer
    }
)
export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

//создали встроенный объект store в redux, помним про типизацию

// @ts-ignore
window.store = store;