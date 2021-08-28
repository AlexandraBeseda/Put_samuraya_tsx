import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import UsersContainer from "./components/Users/UsersContainer";
import MainContentContainer from "./components/MainContent/ProfileInfo/MainContentContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavigationBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={() => <MainContentContainer/>}/>
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