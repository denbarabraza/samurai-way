import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {RootReducerType} from "../../redux/redux-store";
import {AuthType, setUserDataAC} from "../../redux/authReducer";
import {authAPI} from "../../API/apiI";


class HeaderContainer extends React.Component<CommonAuthUserType> {
    componentDidMount() {
        //вынесли запрос в API
        authAPI.getMeAuth().then(data => {
                if(data.resultCode===0){
                    this.props.setUserData(data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export type CommonAuthUserType = MapStateToProps
    & MapDispatchToProps

type MapStateToProps = {
    auth: AuthType | null
}
type MapDispatchToProps = {
    setUserData: (data: AuthType) => void
}

const mapStateToProps = (state: RootReducerType): MapStateToProps => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    setUserData: setUserDataAC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)