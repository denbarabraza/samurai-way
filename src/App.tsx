import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

/*type AppPropsType = {
    store: AppStoreType
}*/

const App = (/*props: AppPropsType*/) => {


    const ProfileHandler = () => <Profile  />
    const DialogsHandler = () => <DialogsContainer />
    const UsersHandler = () => <UsersContainer />

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className={"app-wrapper-content"}>

                    <Route
                        path={"/profile"}
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
