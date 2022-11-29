import {connect} from "react-redux";
import {Users} from "./Users";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followedAC, sendUserAC, unFollowedAC, UsersPageType, UserType} from "../../redux/usersReducer";

export type CommonUsersType =
    MapStateToType
    & MapDispatchToType

type MapStateToType = {
    users: UsersPageType
}
type MapDispatchToType = {
    followedHandler: (userID: string) => void
    unFollowedHandler: (userID: string) => void
    sendUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: RootReducerType): MapStateToType => {
    return {
        users: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToType => {
    return {
        followedHandler: (userID: string) => {
            dispatch(followedAC(userID))
        },
        unFollowedHandler: (userID: string) => {
            dispatch(unFollowedAC(userID))
        },
        sendUsers: (users: UserType[]) => {
            dispatch(sendUserAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)