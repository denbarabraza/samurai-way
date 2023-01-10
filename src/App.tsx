import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";

const App = () => {

    const ProfileHandler = () => <ProfileContainer  />
    const DialogsHandler = () => <DialogsContainer />
    const UsersHandler = () => <UsersContainer />
    const LoginHandler = () => <LoginContainer />

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <HeaderContainer/>
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
                        path={"/user"}
                        render={UsersHandler}
                    />
                    <Route
                        path={"/login"}
                        render={LoginHandler}
                    />

                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
