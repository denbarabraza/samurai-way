import {AppThunk} from "./redux-store";
import {authAPI} from "../API/api";
import {LoginFormDataType} from "../components/Login/Login";
import {stopSubmit} from "redux-form";

export type LoginResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}
export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
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
        case "SET_LOGIN_OUT": {
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false,
            }
        }
        default:
            return state
    }
}

export type AuthActionsTypes =
    ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setLogOutAC>

//Action Creator
export const setUserDataAC = (data: AuthType) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            data
        }
    } as const
}
export const setLogOutAC = () => {
    return {
        type: 'SET_LOGIN_OUT',
    } as const
}

//Thunk Creator
export const getMeAuthThunk = (): AppThunk => {
    return (dispatch) => {
        authAPI.getMeAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserDataAC(data.data))
                }
            })
    }
}

export const setLoginAuthThunk = (formData: LoginFormDataType): AppThunk => {
    return (dispatch) => {
        authAPI.setLoginAuth(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getMeAuthThunk())
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const setLogOutThunk = (): AppThunk => {
    return (dispatch) => {
        authAPI.setLogOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setLogOutAC())
                }
            })
    }
}
