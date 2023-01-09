import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {setLoginAuthThunk} from "../../redux/authReducer";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'login'}
                    placeholder={'Login'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>

                <Field
                    name={'password'}
                    placeholder={'Password'}
                    component={Input}
                    validate={[required]}/>
            </div>
            <div>
                <Field
                    type={'checkbox'}
                    name={'rememberMe'}
                    component={Input}
                    validate={[required]}
                />
                <span>Remember me</span>
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    );
};

const LoginFormRedux = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmitLogin = (formData: LoginFormDataType) => {
        setLoginAuthThunk(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmitLogin}/>
        </div>
    );
};
