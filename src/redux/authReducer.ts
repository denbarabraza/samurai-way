import {AppThunk} from "./redux-store";
import {authAPI} from "../API/api";
import {LoginFormDataType} from "../components/Login/Login";


export type LoginRensponseType = {
    resultCode: number
    messages: string[]
    data: {
        userId: number
    }
}
export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    userID:number
}

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userID: 0
}

export const authReducer = (state: AuthType = initialState, action: AuthActionsTypes): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }
        }
        case "SET_LOGIN_AUTH": {
            return {
                ...state,
                userID: action.payload.userID
            }
        }
        default:
            return state
    }
}

export type AuthActionsTypes =
    ReturnType<typeof setUserDataAC>
   | ReturnType<typeof setLoginAuthAC>

//Action Creator
export const setUserDataAC = (data: AuthType) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            data
        }
    } as const
}
export const setLoginAuthAC = (userID: number) => {
    return {
        type: 'SET_LOGIN_AUTH',
        payload: {
            userID
        }
    } as const
}

//Thunk Creator
export const getMeAuthThunk = (): AppThunk => {
    return (dispatch) => {
        //вынесли запрос в API
        authAPI.getMeAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserDataAC(data.data))
                }
            })
    }
}

export const setLoginAuthThunk = (formData:LoginFormDataType): AppThunk => {
    return (dispatch) => {
        debugger
        authAPI.setLoginAuth(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setLoginAuthAC(data.data.userId))
                }
            })
    }
}