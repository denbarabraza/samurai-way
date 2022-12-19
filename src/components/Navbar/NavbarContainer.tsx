import React from 'react';
import {connect} from "react-redux";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {RootReducerType} from "../../redux/redux-store";
import {Friends} from "./Sidebar/Friends";


const Navbar = (props: CommonNavbarType) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={"/profile"} activeClassName={s.activeLink}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/dialogs"} activeClassName={s.activeLink}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/news"} activeClassName={s.activeLink}>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/music"} activeClassName={s.activeLink}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/settings"} activeClassName={s.activeLink}>
                    Settings
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/user"} activeClassName={s.activeLink}>
                    User
                </NavLink>
            </div>
            <div className={s.item}>
                <Friends state={props.state}/>
            </div>
        </nav>
    )
}

type CommonNavbarType={
    state: RootReducerType
}

const mapStateToProps = (state: RootReducerType):CommonNavbarType => {
    return {
        state: state
    } as const
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)