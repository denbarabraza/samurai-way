import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {RootReducerType} from "../../redux/redux-store";
import {AuthType, getMeAuthThunk, setLogOutThunk} from "../../redux/authReducer";


class HeaderContainer extends React.Component<CommonAuthUserType> {
    componentDidMount() {
        this.props.getMeAuthThunk()
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
    getMeAuthThunk: () => void
    setLogOutThunk: () => void
}

const mapStateToProps = (state: RootReducerType): MapStateToProps => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    getMeAuthThunk: getMeAuthThunk,
    setLogOutThunk: setLogOutThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)