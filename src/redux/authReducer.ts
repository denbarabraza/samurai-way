import {AppThunk} from "./redux-store";
import {authAPI} from "../API/api";

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

export const authReducer = (state: AuthType = initialState, action: AuthActionsTypes): AuthType => {
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

export type AuthActionsTypes =
    ReturnType<typeof setUserDataAC>

//Action Creator
export const setUserDataAC = (data:AuthType) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            data
        }
    } as const
}

//Thunk Creator
export const getMeAuthThunk=():AppThunk=>{
    return (dispatch)=>{
        //вынесли запрос в API
        authAPI.getMeAuth().then(data => {
            if(data.resultCode===0){
                dispatch(setUserDataAC(data.data))
            }
        })
    }
}