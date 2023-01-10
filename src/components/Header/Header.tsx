import React from 'react';
import s from './Header.module.css';
import {CommonAuthUserType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";

export const Header: React.FC<CommonAuthUserType> = (props) => {

    const onClickLogOut=()=>{
        props.setLogOutThunk()
    }

    return (
        <header className={s.header}>
            <img
                src={"https://орфографика.рф/800/600/https/turbologo.com/articles/wp-content/uploads/2018/03/prozrachniy-logo-1-678x381.png"}/>
            <div className={s.loginBlock}>
                {props.auth?.isAuth
                    ? <div>
                        <span>{props.auth.login}</span>
                        <button onClick={onClickLogOut}>Log Out</button>
                        </div>
                    : <>
                        <NavLink to={'/login'}>Login</NavLink>
                    </>
                }
            </div>
        </header>
    )
}