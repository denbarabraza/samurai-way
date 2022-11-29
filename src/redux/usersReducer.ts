export type UsersPageType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

let initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOWED": {
            return {...state, users: state.users.map(e => e.id === action.payload.userID ? {...e, followed: false} : e)}
        }
        case "UN_FOLLOWED": {
            return {...state, users: state.users.map(e => e.id === action.payload.userID ? {...e, followed: true} : e)}
        }
        case "SEND_USERS": {
            return {...state, users: [...state.users,...action.payload.users]}
        }
        default:
            return state
    }
}

type ActionsTypes =
    ReturnType<typeof followedAC>
    | ReturnType<typeof unFollowedAC>
    | ReturnType<typeof sendUserAC>

export const followedAC = (userID: string) => {
    return {
        type: 'FOLLOWED',
        payload: {
            userID
        }
    } as const
}
export const unFollowedAC = (userID: string) => {
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