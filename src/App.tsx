import React from 'react';
import './App.css';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import UsersContainer from "./components/Users/UsersContainer";
import MainContentContainer from "./components/MainContent/ProfileInfo/MainContentContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import {AppStateType} from "./redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";

export class App extends React.Component<AppContainerPropTypes> {


    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized) {
            <Preloader/>
        }
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
                            <Route path='/authMe' render={() => <Login/>}/>

                        </div>
                    </div>
                </BrowserRouter>
            );
    }
}

export type AppContainerPropTypes = MapDispatchToPropsType & MapStatePropTypes;

type MapDispatchToPropsType = {
    initializeApp: () => void,
}
let MapStateToProps = (state: AppStateType): MapStatePropTypes => {
    return {
        initialized: state.app.initialized
    }
}
type MapStatePropTypes = {
    initialized: boolean,
}

export default compose<React.ComponentType>(withRouter, connect(MapStateToProps, {initializeApp}))(App)