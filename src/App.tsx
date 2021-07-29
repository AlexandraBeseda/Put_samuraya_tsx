import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {MainContent} from "./components/MainContent/MainContent";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {store, StoreType} from "./redux/redux";

type AppType = {
    store: StoreType
}
export const App = (props: AppType) => {

    const openState = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavigationBar arrayFriends={openState.friendsNavigationBar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <MainContent arrayPosts={openState.mainContent.postsData}
                                                      dispatch={store.dispatch.bind(props.store)}
                                                      textForNewPost={openState.mainContent.textNewPost}/>}/>
                    <Route path='/dialogsPage' render={() => <Dialogs arrayDialogs={openState.dialogsPage.dialogsData}
                                                                  arrayMessage={openState.dialogsPage.messagesDataPosts}
                                                                  messageDataForNewPost={openState.dialogsPage.messageDataNewPost}
                                                                  dispatch={store.dispatch.bind(props.store)}
                                                                  changeNewMessageCallBack={store.changeNewMessageCallback.bind(props.store)}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

