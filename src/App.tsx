import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {


    const ProfileHandler = () => <ProfileContainer  />
    const DialogsHandler = () => <DialogsContainer />
    const UsersHandler = () => <UsersContainer />

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className={"app-wrapper-content"}>

                    <Route
                        path={'/profile/:userID?'}
                        render={ProfileHandler}
                    />
                    <Route
                        path={"/dialogs"}
                        render={DialogsHandler}
                    />
                    <Route
                        path={"/sfriends"}
                        render={UsersHandler}
                    />

                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
