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
import {NewPostType} from "./components/MainContent/Posts/lPosts/NewPost/NewPost";

import {DialogItemPropTypes, HumanPropTypes, store, StoreType} from "./redux/redux";
import {MessagePropTypes} from "./redux/redux";

type AppType={
    store:StoreType
    friends: Array<HumanPropTypes>
    addPost: () => void
    arrayPosts: Array<NewPostType>,
    messageForNewPost: string
    changeNewTextCallback: (newText: string) => void
    arrayDialogs: Array<DialogItemPropTypes>,
    arrayMessage: Array<MessagePropTypes>,
    messageDataForNewPost: string,
    addMessage: () => void
    changeNewMessageCallBack:(newMessage:string)=>void
}
export const App = (props: AppType) => {

    const state=props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavigationBar arrayFriends={state.sideBar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <MainContent arrayPosts={state.mainContent.postsData}
                                                      addPost={store.addPost.bind(props.store)}
                                                      messageForNewPost={state.messageDataForNewPost}
                                                      changeNewTextCallback={store.changeNewTextCallback.bind(props.store)}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs arrayDialogs={state.dialogsPage.dialogsData}
                                                                  arrayMessage={state.messagesData}
                                                                  messageDataForNewPost={state.messageDataForNewPost}
                                                                  addMessage={store.addMessage.bind(props.store)}
                                                                  changeNewMessageCallBack={store.changeNewMessageCallback.bind(props.store)}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );

   /* return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavigationBar arrayFriends={props.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <MainContent arrayPosts={props.arrayPosts}
                                                      addPost={props.addPost}
                                                      messageForNewPost={props.messageForNewPost}
                                                      changeNewTextCallback={props.changeNewTextCallback}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs arrayDialogs={props.arrayDialogs}
                                                                  arrayMessage={props.arrayMessage}
                                                                  messageDataForNewPost={props.messageDataForNewPost}
                                                                  addMessage={props.addMessage}
                                                                  changeNewMessageCallBack={props.changeNewMessageCallBack}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );*/
}

