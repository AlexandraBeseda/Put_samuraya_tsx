import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from "./redux/redux";


const state=store.getState();


const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode><App
            store={store}
            friends={state.sideBar.friends}
            arrayDialogs={state.dialogsPage.dialogsData}
            arrayMessage={state.messagesData}
            addMessage={store.addMessage}
            messageDataForNewPost={state.messageDataForNewPost}
            changeNewMessageCallBack={store.changeNewMessageCallback}
            arrayPosts={state.mainContent.postsData}
            messageForNewPost={state.mainContent.messageForNewPost}
            addPost={store.addPost}
            changeNewTextCallback={store.changeNewTextCallback}
        />
        </React.StrictMode>,

        document.getElementById('root')
    );
}

renderEntireTree();
store.subscriber(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
