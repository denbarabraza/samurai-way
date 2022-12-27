import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {getProfileThunk, ProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userID: string
}

type OnUserType = RouteComponentProps<PathParamsType> & CommonUsersType

export type CommonUsersType =
    MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    profilePage: ProfileType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getProfileThunk: (userID: number | string) => void
}

class ProfileContainer extends React.Component<OnUserType> {
    componentDidMount() {
        let userID: number | string = this.props.match.params.userID;
        if (!userID) {
            userID = 2;
        }
        this.props.getProfileThunk(userID)
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
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = {
    getProfileThunk: getProfileThunk
}

const WithURLDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent)