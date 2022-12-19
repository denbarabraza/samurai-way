import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../redux/profileReducer";
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
}
type MapDispatchToPropsType = {
    setUserProfile: (userProfile: ProfileType) => void
}

class ProfileContainer extends React.Component<OnUserType> {
    componentDidMount() {
        let userID: number | string = this.props.match.params.userID;
        if (!userID) {
            userID = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID,{withCredentials:true})
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <>
            <Profile {...this.props}/>
        </>
    }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage.profile
    }
}
const mapDispatchToProps = {
    setUserProfile: setUserProfileAC
}

const WithURLDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent)