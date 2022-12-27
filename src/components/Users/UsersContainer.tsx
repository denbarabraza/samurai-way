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
    isAuth:boolean
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
        // this.props.setLoadingValue(true)
        // //вынесли запрос в API
        // usersAPI.getUser(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setLoadingValue(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUserCount(data.totalCount);
        // })
    }

    onclickChangedPage = (currentPage: number) => {
        this.props.getUsersThunk(currentPage,this.props.pageSize)
        /*this.props.setLoadingValue(true)
        this.props.setCurrentPage(pageNumber)
        //вынесли запрос в API
        usersAPI.getUser(pageNumber, this.props.pageSize).then(data => {
            this.props.setLoadingValue(false)
            // this.props.setUsers(data.items);
        })*/
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
        isAuth:state.auth.isAuth
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
