import React from 'react';
import './App.css';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import UsersContainer from "./components/Users/UsersContainer";
import MainContentContainer from "./components/MainContent/ProfileInfo/MainContentContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

export const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavigationBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={() => <MainContentContainer/>}/>
                    <Route path='/dialogsPage' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/authMe' render={() => <Login />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}