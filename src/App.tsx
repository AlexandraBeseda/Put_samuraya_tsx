import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MainContent} from "./components/MainContent/MainContent";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

export const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavigationBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <MainContent/>}/>
                    <Route path='/dialogsPage' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


/*
type AppType = {
    state: AppStateType
    dispatch: (action: ActionsType) => void
}

export const App: React.FC<AppType> = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavigationBar
                    arrayFriends={props.state.navigationBar.friendsNavigationBar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <MainContent state={props.state}
                                                      dispatch={props.dispatch}/>}/>
                    <Route path='/dialogsPage' render={() => <DialogsContainer state={props.state}
                                                                               dispatch={props.dispatch}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}*/
