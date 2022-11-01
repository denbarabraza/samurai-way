import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType={
    state:RootStateType
    addPost:(postText: string)=>void
}

const App = (props: AppPropsType) => {

    const ProfileHandler=() =><Profile state={props.state.profilePage} addPost={props.addPost}/>
    const DialogsHandler=() =><Dialogs state={props.state.dialogsPage}/>

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
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
