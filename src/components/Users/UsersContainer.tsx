import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followedAC,
    followThunk,
    getUsersThunk,
    setFollowProgressAC,
    unFollowedAC,
    unFollowThunk,
    UsersPageType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {WidthAuthRedirect} from "../../hoc/widthAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


export type CommonUsersType =
    MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersPageType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isLoading: boolean
    followInProgress:Array<number>
}
type MapDispatchToPropsType = {
    followedHandler: (userID: number) => void
    unFollowedHandler: (userID: number) => void
    setFollowProgress: (isFollow: boolean, userID: number) => void
    getUsersThunk: (currentPage:number, pageSize:number)=>void
    followThunk: (idUser:number)=>void
    unFollowThunk: (idUser:number)=>void
}

//Second Container Component
export class UsersC extends React.Component<CommonUsersType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)
    }

    onclickChangedPage = (currentPage: number) => {
        this.props.getUsersThunk(currentPage,this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isLoading
                ? <Preloader/>
                : <Users {...this.props} onclickChangedPage={this.onclickChangedPage} />}
        </>
    }
}


//First Container Component
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followInProgress: state.usersPage.followInProgress,
    }
}
//mapDispatchToProps=>Object
const mapDispatchToProps = {
    followedHandler: followedAC,
    unFollowedHandler: unFollowedAC,
    setFollowProgress:setFollowProgressAC,
    getUsersThunk: getUsersThunk,
    followThunk: followThunk,
    unFollowThunk: unFollowThunk,
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WidthAuthRedirect
)(UsersC)

//mapDispatchToProps=>Function
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
        },
        setLoadingValue: (isLoading:boolean) => {
            dispatch(setLoadingValueAC(isLoading))
        }
    }
}*/
