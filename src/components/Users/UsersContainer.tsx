import {connect} from "react-redux";
import {Users} from "./Users";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followedAC, sendUserAC, unFollowedAC, UsersPageType, UserType} from "../../redux/usersReducer";

export type CommonUsersType =
    MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    followedHandler: (userID: number) => void
    unFollowedHandler: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followedHandler: (userID: number) => {
            dispatch(followedAC(userID))
        },
        unFollowedHandler: (userID: number) => {
            dispatch(unFollowedAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(sendUserAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)