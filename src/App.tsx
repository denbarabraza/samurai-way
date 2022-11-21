import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, store} from "./redux/store";
import {AppStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: AppStoreType
}

const App = (props: AppPropsType) => {

    const state = props.store.getState()

    const ProfileHandler = () => <Profile
        store={props.store}
    />
    const DialogsHandler = () => <DialogsContainer
        store={props.store}
    />

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar state={state.sidebar}/>
                <div className={"app-wrapper-content"}>

                    <Route
                        path={"/profile"}
                        render={ProfileHandler}
                    />
                    <Route
                        path={"/dialogs"}
                        render={DialogsHandler}
                    />

                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
