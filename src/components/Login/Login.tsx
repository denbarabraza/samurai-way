import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {setLoginAuthThunk, setLogOutThunk} from "../../redux/authReducer";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {AppDispatch, RootReducerType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    placeholder={'Email'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>

                <Field
                    name={'password'}
                    placeholder={'Password'}
                    type={'password'}
                    component={Input}
                    validate={[required]}/>
            </div>
            {props.error && <div className={s.textError}>
                {props.error}
            </div>}
            <div>
                <Field
                    type={'checkbox'}
                    name={'rememberMe'}
                    component={Input}
                />
                <span>remember me</span>
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    );
};

const LoginFormRedux = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

export const Login: FC<CommonLoginType> = (props) => {

    const onSubmitLogin = (formData: LoginFormDataType) => {
        console.log(formData)
        props.setLoginAuth(formData)
    }

    if (props.auth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmitLogin}/>
        </div>
    );
};

type CommonLoginType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: RootReducerType): MapStateToProps => {
    return {
        auth: state.auth.isAuth
    }
}

type MapStateToProps = {
    auth: boolean
}

type MapDispatchToProps = {
    setLoginAuth: (formData: LoginFormDataType) => void
    setLogOut: () => void
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToProps => ({
    setLoginAuth: (formData: LoginFormDataType) => {
        dispatch(setLoginAuthThunk(formData))
    },
    setLogOut: () => setLogOutThunk()
})

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
