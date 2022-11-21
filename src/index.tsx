import './index.css';

import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {StoreType} from "./redux/store";

export const renderTree=()=> {
    ReactDOM.render(
        <App
            store={store}
        />,
        document.getElementById('root'));
}

store.subscribe(()=>renderTree())
/*store.subscribe(renderTree)*/
renderTree()