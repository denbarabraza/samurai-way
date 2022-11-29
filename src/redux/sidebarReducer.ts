export type SidebarType = {
    friends: Array<FriendsType>
}
export type FriendsType = {
    id: number
    name: string
}

let initialState:SidebarType = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]
}

export const sidebarReducer = (state=initialState, action: any) => {
    return state
}