import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followedAC,
    sendUserAC,
    setCurrentPageAC, setTotalUserCountAC,
    unFollowedAC,
    UsersPageType,
    UserType
} from "../../redux/usersReducer";
import {UsersC} from "./UsersС";

export type CommonUsersType =
    MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersPageType
    pageSize:number
    totalUserCount:number
    currentPage:number
}
type MapDispatchToPropsType = {
    followedHandler: (userID: number) => void
    unFollowedHandler: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage:number) => void
    setTotalUserCount: (count:number) => void
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage:number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (count:number) => {
            dispatch(setTotalUserCountAC(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)