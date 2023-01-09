import axios from "axios";
import {LoginFormDataType} from "../components/Login/Login";
import {LoginRensponseType} from "../redux/authReducer";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '8f06781b-9aa8-47ca-9636-db5da3b1bd57'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUser(page: number, count: number) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => response.data)
    },
    getUnFollow(idUser: number) {
        return instance.delete(`follow/${idUser}`)
            .then(response => response.data)
    },
    getFollow(idUser: number) {
        return instance.post(`follow/${idUser}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userID: string | number) {
        return instance.get(`profile/${userID}`)
            .then(response => response.data)
    },
    getStatus(userID: string | number) {
        return instance.get(`/profile/status/${userID}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})
            .then(response => response.data)
    }
}

export const authAPI = {
    getMeAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    setLoginAuth(formData: LoginFormDataType) {
        return instance.post<LoginRensponseType>(`auth/login`, formData)
            .then(response => response.data)
    }
}
