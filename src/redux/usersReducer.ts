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

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
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
                    : state.followInProgress.filter(id=>id!==action.payload.userID)
            }
        }
        default:
            return state
    }
}

type ActionsTypes =
    ReturnType<typeof followedAC>
    | ReturnType<typeof unFollowedAC>
    | ReturnType<typeof sendUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof setLoadingValueAC>
    | ReturnType<typeof setFollowProgressAC>

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
export const sendUserAC = (users: UserType[]) => {
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

//[
//                 {
//                     id: '1',
//                     photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Ew488dUE4fi9yDUTTn7H71pW1NjjDIrwdg&usqp=CAU',
//                     followed: false,
//                     fullName: 'Denis Bareischev',
//                     status: 'I want to IT',
//                     location: {
//                         city: 'Minsk',
//                         country: 'Belarus'
//                     }
//                 },
//                 {
//                     id: '2',
//                     photoURL: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3045138.png&w=350&h=254',
//                     followed: true,
//                     fullName: 'Mike Cala',
//                     status: 'I like salt',
//                     location: {
//                         city: 'Milan',
//                         country: 'Italy'
//                     }
//                 },
//                 {
//                     id: '3',
//                     photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWu2AgZKpP9kNj1GuOA6-tlFunx36xcFhbg&usqp=CAU',
//                     followed: true,
//                     fullName: 'Victor Popov',
//                     status: 'I am crazy man',
//                     location: {
//                         city: 'Moscow',
//                         country: 'Russia'
//                     }
//                 }
//             ]