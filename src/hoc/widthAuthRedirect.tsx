import React, {ComponentType, FC} from 'react';
import {RootReducerType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type MapStateToProps={
    isAuth:boolean
}
const mapStateToProps = (state: RootReducerType):MapStateToProps => {
    return {
        isAuth:state.auth.isAuth
    }
}

export function WidthAuthRedirect<T>(Component:ComponentType<T>) {

    const RedirectComponent:FC<MapStateToProps>=(
        {
            isAuth,
            ...restProps
        })=>{

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)

}

