import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followedAC,
    sendUserAC,
    setCurrentPageAC, setFollowProgressAC,
    setLoadingValueAC,
    setTotalUserCountAC,
    unFollowedAC,
    UsersPageType,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../API/apiI";


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
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (count: number) => void
    setLoadingValue: (isLoading: boolean) => void
    setFollowProgress: (isFollow: boolean, userID: number) => void
}

//Second Container Component
export class UsersC extends React.Component<CommonUsersType> {
    componentDidMount() {
        this.props.setLoadingValue(true)
        //вынесли запрос в API
        usersAPI.getUser(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setLoadingValue(false)
            this.props.setUsers(data.items);
            this.props.setTotalUserCount(data.totalCount);
        })
    }

    onclickChangedPage = (pageNumber: number) => {
        this.props.setLoadingValue(true)
        this.props.setCurrentPage(pageNumber)
        //вынесли запрос в API
        usersAPI.getUser(pageNumber, this.props.pageSize).then(data => {
            this.props.setLoadingValue(false)
            this.props.setUsers(data.items);
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
                    setFollowProgress={this.props.setFollowProgress}
                    followInProgress={this.props.followInProgress}
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
        isLoading: state.usersPage.isLoading,
        followInProgress: state.usersPage.followInProgress
    }
}

//mapDispatchToProps=>Object
const mapDispatchToProps = {
    followedHandler: followedAC,
    unFollowedHandler: unFollowedAC,
    setUsers: sendUserAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    setLoadingValue: setLoadingValueAC,
    setFollowProgress:setFollowProgressAC
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

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
