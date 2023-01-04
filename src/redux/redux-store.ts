import {applyMiddleware, combineReducers, createStore} from "redux";
import {DialogsActionsTypes, dialogsReducer} from "./dialogsReducer";
import {ProfileActionsTypes, profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {UsersActionsTypes, usersReducer} from "./usersReducer";
import {AuthActionsTypes, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


//объединяем редюсеры
export let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

//тип всего объекта состояния
export type RootReducerType = ReturnType<typeof rootReducer>

//типизация всех экшенов
export type RootActionsType = AuthActionsTypes
    | DialogsActionsTypes
    | ProfileActionsTypes
    | UsersActionsTypes

//создаем стор
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootReducerType, unknown, RootActionsType>

