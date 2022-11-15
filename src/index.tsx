import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderTree=()=> {
    ReactDOM.render(
        <App
            store={store}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root'));
}

store.subscribe(renderTree)
renderTree()