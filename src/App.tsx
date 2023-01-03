import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


const App = () => {


    const ProfileHandler = () => <ProfileContainer  />
    const DialogsHandler = () => <DialogsContainer />
    const UsersHandler = () => <UsersContainer />

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className={"app-wrapper-content"}>

                    {/*<ProfileContainer  />*/}

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
                        render={Login}
                    />

                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
