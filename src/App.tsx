import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, store, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
    dispatch:(action:ActionsTypes)=>void
}

const App = (props: AppPropsType) => {

    const state = props.store.getState()

    const ProfileHandler = () => <Profile
        state={state.profilePage}
        dispatch={store.dispatch.bind(store)}
    />
    const DialogsHandler = () => <Dialogs
        state={state.dialogsPage}
        dispatch={store.dispatch.bind(store)}
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
