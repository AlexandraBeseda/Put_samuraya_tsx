import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MainContent} from "./components/MainContent/MainContent";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, ReducersStoreType} from "./redux/reduxStore";
import {BrowserRouter, Route} from "react-router-dom";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";

type AppType = {
    state: ReducersStoreType
    dispatch: (action: ActionsType) => void
}
export const App: React.FC<AppType> = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <NavigationBar arrayFriends={props.state.navigationBar.friendsNavigationBar.friends}/>
                <div className='app-wrapper-content'>

                    <Route path='/profile'
                           render={() => <MainContent arrayPosts={props.state.mainContent.postsData}
                                                      dispatch={props.dispatch.bind(props.state)}
                                                      textForNewPost={props.state.mainContent.textNewPost}/>}/>

                    <Route path='/dialogsPage' render={() => <Dialogs arrayDialogs={props.state.dialogsPage.dialogsData}
                                                                      arrayMessage={props.state.dialogsPage.messagesDataPosts}
                                                                      messageDataForNewPost={props.state.dialogsPage.messageDataNewPost}
                                                                      dispatch={props.dispatch.bind(props.state)}/>}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

