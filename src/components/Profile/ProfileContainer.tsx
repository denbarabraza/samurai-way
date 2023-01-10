import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {getProfileThunk, getUserStatus, ProfileType, updateUserStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WidthAuthRedirect} from "../../hoc/widthAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userID: string
}

type OnUserType = RouteComponentProps<PathParamsType> & CommonUsersType

export type CommonUsersType =
    MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    profilePage: ProfileType | null
    status: string
    authUserID: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getProfileThunk: (userID: number | string ) => void
    getUserStatus: (userID: number | string ) => void
    updateUserStatus: (status: string) => void
}

class ProfileContainer extends React.Component<OnUserType> {
    componentDidMount() {
        let userID: number | string  = this.props.match.params.userID;
        if (!userID) {
            //userID = this.props.authUserID;
            userID = 2;
        }
        this.props.getProfileThunk(userID);
        this.props.getUserStatus(userID)
    }

    render() {
        return <>
            <Profile {...this.props}/>
        </>
    }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage.profile,
        status:state.profilePage.status,
        authUserID: state.auth.userId,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = {
    getProfileThunk: getProfileThunk,
    getUserStatus: getUserStatus,
    updateUserStatus:updateUserStatus
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WidthAuthRedirect
)(ProfileContainer)

//1.connect
//2.withRouter
//3.WidthAuthRedirect