import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followedAC,
    sendUserAC,
    setCurrentPageAC,
    setLoadingValueAC,
    setTotalUserCountAC,
    unFollowedAC,
    UsersPageType,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";


export type CommonUsersType =
    MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersPageType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isLoading: boolean
}
type MapDispatchToPropsType = {
    followedHandler: (userID: number) => void
    unFollowedHandler: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (count: number) => void
    setLoadingValue: (isLoading: boolean) => void
}

//Second Container Component
export class UsersC extends React.Component<CommonUsersType> {
    componentDidMount() {
        this.props.setLoadingValue(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.setLoadingValue(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            })
    }

    onclickChangedPage = (pageNumber: number) => {
        this.props.setLoadingValue(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.setLoadingValue(false)
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <>
            {this.props.isLoading
                ? <Preloader/>
                : <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    usersPage={this.props.usersPage}
                    followedHandler={this.props.followedHandler}
                    unFollowedHandler={this.props.unFollowedHandler}
                    onclickChangedPage={this.onclickChangedPage}
                />}
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
        isLoading: state.usersPage.isLoading
    }
}

//mapDispatchToProps=>Object
const mapDispatchToProps = {
    followedHandler: followedAC,
    unFollowedHandler: unFollowedAC,
    setUsers: sendUserAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    setLoadingValue: setLoadingValueAC
}

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
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)