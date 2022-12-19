export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth:boolean
}

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                ...action.payload.data,
                isAuth:true
            }
        }
        default:
            return state
    }
}

type ActionsTypes =
    ReturnType<typeof setUserDataAC>


export const setUserDataAC = (data:AuthType) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            data
        }
    } as const
}