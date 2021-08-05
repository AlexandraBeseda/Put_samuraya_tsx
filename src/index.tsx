import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from "./redux/reduxStore"


//это функция!
const renderEntireTree = () => {


    ReactDOM.render(<App state={store.getState()}
                         dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

//тут мы её вызываем
renderEntireTree();
store.subscribe(renderEntireTree)

// у меня  было написано subscribe вместо subscribe!
/*store.subscribe(() => {
    let state = store.getState();

    renderEntireTree();
});*/


// store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
