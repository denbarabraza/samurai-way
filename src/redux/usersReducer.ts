import {usersAPI} from "../API/api";
import {Dispatch} from "redux";
import {AppThunk, RootActionsType} from "./redux-store";

export type UsersPageType = {
    users: Array<UserType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    followInProgress: Array<number>
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

let initialState: UsersPageType = {
    users: [],
    totalUserCount: 0,
    pageSize: 5,
    currentPage: 1,
    isLoading: true,
    followInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOWED": {
            return {
                ...state,
                users: state.users.map(e => e.id === action.payload.userID
                    ? {...e, followed: true}
                    : e
                )
            }
        }
        case "UN_FOLLOWED": {
            return {
                ...state,
                users: state.users.map(e => e.id === action.payload.userID
                    ? {...e, followed: false}
                    : e
                )
            }
        }
        case "SEND_USERS": {
            return {
                ...state,
                users: action.payload.users
            }
        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case "SET_TOTAL_USER_COUNT": {
            return {
                ...state,
                totalUserCount: action.payload.count
            }
        }
        case "SET_LOADING_VALUE": {
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        }
        case "SET_FOLLOW_PROGRESS": {
            return {
                ...state,
                followInProgress: action.payload.isFollowProgress
                    ? [...state.followInProgress, action.payload.userID]
                    : state.followInProgress.filter(id => id !== action.payload.userID)
            }
        }
        default:
            return state
    }
}

export type UsersActionsTypes =
    ReturnType<typeof followedAC>
    | ReturnType<typeof unFollowedAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof setLoadingValueAC>
    | ReturnType<typeof setFollowProgressAC>

//Action Creator
export const followedAC = (userID: number) => {
    return {
        type: 'FOLLOWED',
        payload: {
            userID
        }
    } as const
}
export const unFollowedAC = (userID: number) => {
    return {
        type: 'UN_FOLLOWED',
        payload: {
            userID
        }
    } as const
}
export const setUserAC = (users: UserType[]) => {
    return {
        type: 'SEND_USERS',
        payload: {
            users
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUserCountAC = (count: number) => {
    return {
        type: 'SET_TOTAL_USER_COUNT',
        payload: {
            count
        }
    } as const
}
export const setLoadingValueAC = (isLoading: boolean) => {
    return {
        type: 'SET_LOADING_VALUE',
        payload: {
            isLoading
        }
    } as const
}
export const setFollowProgressAC = (isFollowProgress: boolean, userID: number) => {
    return {
        type: 'SET_FOLLOW_PROGRESS',
        payload: {
            isFollowProgress,
            userID
        }
    } as const
}

//Thunk Creator
export const getUsersThunk = (currentPage: number, pageSize: number):AppThunk => {
    return (dispatch) => {
        dispatch(setLoadingValueAC(true))
        dispatch(setCurrentPageAC(currentPage))
        usersAPI.getUser(currentPage, pageSize)
            .then(data => {
                dispatch(setLoadingValueAC(false))
                dispatch(setUserAC(data.items));
                dispatch(setTotalUserCountAC(data.totalCount));
            })
    }
}
export const followThunk = (idUser:number):AppThunk => {
    return (dispatch) => {
        dispatch(setFollowProgressAC(true, idUser))
        usersAPI.getFollow(idUser).then(data => {
            if (data.resultCode === 0) {
                dispatch(followedAC(idUser))
            }
            dispatch(setFollowProgressAC(false, idUser))
        })
    }
}
export const unFollowThunk = (idUser:number):AppThunk => {
    return (dispatch) => {
        dispatch(setFollowProgressAC(true, idUser))
        usersAPI.getUnFollow(idUser).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowedAC(idUser))
            }
            dispatch(setFollowProgressAC(false, idUser))
        })
    }
}

