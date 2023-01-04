import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {setLoginAuthThunk} from "../../redux/authReducer";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'login'}
                    placeholder={'Login'}
                    component={'input'}/>
            </div>
            <div>

                <Field
                    name={'password'}
                    placeholder={'Password'}
                    component={'input'}/>
            </div>
            <div>
                <Field
                    type={'checkbox'}
                    name={'rememberMe'}
                    component={'input'}
                />
                <span>Remember me</span>
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    );
};

const LoginFormRedux = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)//dispatch(thunk)
        setLoginAuthThunk(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    );
};
